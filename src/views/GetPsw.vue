<!-- 忘记密码 -->
<template>
  <div class="module_psw">
		<Header :isHeader="0" :ative="0" :isShowIcon="0" style="posistion:relative;z-index: 1000;"></Header>
		<div class="tipcontent">
			<div class="followConten">
				<div class="writetip">
					<div class="write_item">
						<div :class="ativeindex==1?'write_icon ative':'write_icon'">1</div>
						<div class="w_txt">输入手机号码</div>
					</div>
					<div class="tipcrile">
						<span v-for="item in 8" :key="item"></span>
					</div>
					<div class="write_item">
						<div :class="ativeindex==2?'write_icon ative':'write_icon'">2</div>
						<div class="w_txt">输入验证码</div>
					</div>
					<div class="tipcrile">
						<span v-for="item in 8" :key="item"></span>
					</div>
					<div class="write_item">
						<div :class="ativeindex==3?'write_icon ative':'write_icon'">3</div>
						<div class="w_txt">输入新密码</div>
					</div>
				</div>
			</div>
			
		</div>
		
		<div class="followConten">
			<div class="fromlist">
				<div class="phonetip" v-if="ativeindex==1">请输入绑定的手机号</div>
				<div class="phonetip" v-else-if="ativeindex==2">请输入验证码</div>
				<div class="phonetip" v-else>请输入新密码</div>
				<div class="phonebox" v-if="ativeindex==1">
					<el-input v-model="form.vc_userphone" placeholder="请填写手机号码"></el-input>
				</div>
				<div class="phonebox yzm" v-if="ativeindex==2">
					<el-input v-model="form.n_yanzhengma" placeholder="请填写验证码"></el-input>
					<el-button type="primary" v-if="minutes>0">{{minutes}}</el-button>
					<el-button type="primary" v-else @click="getUserPost">发送验证码</el-button>
				</div>
				<div class="phonebox" v-if="ativeindex==3">
					<div style="margin-bottom: 20px;">
						<el-input v-model="form.newpsw" placeholder="请输入新密码"></el-input>
					</div>
					<div>
						<el-input v-model="form.n_againpsw" placeholder="请再次输入新密码"></el-input>
					</div>
				</div>
				<div class="btn" v-if="ativeindex==1">
					<el-button type="primary" @click="postPhone(1)">下一步</el-button>
				</div>
				<div class="btn" v-if="ativeindex==2">
					<el-button type="primary" @click="postPhone(2)">下一步</el-button>
				</div>
				<div class="btn"  v-if="ativeindex==3">
					<el-button type="primary" @click="changOk">确认修改</el-button>
				</div>
			</div>
		</div>
		<chatPan 
			:showChat = "isShowChat"
			:chartDate="liaotainarray"
			:username="'刘强东'" 
			:usertmeta="'刘强东是京东的创始人'"
			:input_state="'离线中....'"
			:closeFn="fnfn1"
			:enterFn="enterFn"
			:Mofan="Mofan "
		>
		</chatPan>
		
  </div>
</template>
<script>
	import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
	import https from "../utils/Https.js"
import { setTimeout } from 'timers';
	export default{
		data(){
			return{
				ativeindex:1,
				resetPost:0,
				minutes:60,
				isgopsw:0,
				form:{},
				isShowChat:0,//是否显示聊天窗口
				liaotainarray:[]
			}
		},
		methods:{
			postPhone:function(ints){
				if(ints==1){
					if(this.form['vc_userphone']!=""){
						if(regPhone(this.form['vc_userphone'])){
							this.getUserPost();
							return false;
						}
						
						this.taostip('手机号码不正确')
						
					}else{
						this.taostip('手机号码不能为空')
					}
					return false;
				}
				if(ints==2){
					// this.ativeindex = 3;
					this.isMyphone();
					return false;
				}
				
			},
			fnfn1:function(){ //关闭聊天
				this.isShowChat = 0;
			},
			Mofan:function(str){//模仿第二人
				this.liaotainarray.push({state:1,chatTxt:str})
			},
			enterFn:function(str){//回车聊天发送
				// state:0 代表自己发出的消息,state:1聊天对象发出的信息
				this.liaotainarray.push({state:0,chatTxt:str})
			},
			doLink:function(url){
				this.$router.push(url)
			},
			//校验是否是本人操作
			isMyphone:function(){
				let data = {
					code:this.form.n_yanzhengma,
					vc_userphone:this.form['vc_userphone']
				}
				if(data['code']==""){
					this.taostip('验证码不能为空')
				}
				connetAction.ajaxPost(https['checkPhone'],data)
					.then((res)=>{
						if(res.status==1){
							this.ativeindex = 3;
						}else{
							this.taostip("请确认是你的账号，再操作")
						}
					})
					.catch((res)=>{
						
					})
			},
			getUserPost:function(){
				this.minutes = 60;
				let that=this,data = {
					type:2,
					vc_userphone:this.form['vc_userphone']
				}
				
				connetAction.ajaxPost(https['getSmsCode'],data)
				.then((res)=>{
					if(res.status==1){
						this.ativeindex = 2;
						this.yanzma();
					}
					
				})
				.catch((res)=>{
					
				})
			},
			yanzma:function(){
				let timer = null;
			
				let that  = this;
				this.isgopsw = 1;
				timer = setInterval(function(){
					that.minutes--;
					if(that.minutes<=0){
						this.isgopsw = 0;
						clearInterval(timer)
					}
				},1000)
				return false;
				
			},
			taostip:function(str,type){
				this.$message({
					showClose: true,
					message: str,
					type: type||'warning'
				});
			},
			changOk:function(){
				if(this.form.n_againpsw.length<6){
					taostip("新密码长度不能小于6位");
					return false;
				}
				if(this.form.n_againpsw==""){
					taostip("新密码不能为空");
					return false;
				}
				if(this.form.newpsw!=this.form.n_againpsw){
					taostip("两次输入的密码不一致");
					return false;
				}
				let that,data = {
					vc_password:this.form.n_againpsw,
					vc_userphone:this.form['vc_userphone']
				}
				
				connetAction.ajaxPost(https['forgotPassWord'],data)
				.then((res)=>{
					if(res.status==1){
						taostip("新密码修改成功",'success');
						setTimeout(function(){
							that.router.push("/")
						},2000)
					}else{
						taostip("新密码修改成功",res.message);
					}
					
				})
				.catch((res)=>{
					
				})
			}
		}
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.module_psw{
		width: 100%;
		height: 100%;
		background: #f3f3f3;
		padding-top: 80px;
	}
	.followConten{
		width: 1200px;
		margin: auto;
	}
	.writetip{
		display: flex;
		height: 200px;
		justify-content: space-between;
		align-items: center;
	}
	.tipcontent{
		background:#fff;
	}
	.write_icon{
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border-radius:50%;
		background: #999;
		margin: auto;
		font-size: 20px;
		color: #fff;
	}
	.tipcrile{
		flex: 0 0 30%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.write_icon.ative{
		background: linear-gradient(-134.2deg,#f11197,#e175a5);
	}
	.tipcrile span{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: #ddd;
	}
	.w_txt{
		padding-top: 10px;
	}
	.fromlist{
		width: 300px;
		margin: auto;
	}
	.phonetip{
		font-size: 20px;
		text-align: center;
		margin: 80px 0 20px;
	}
	.phonebox{
		margin-bottom: 20px;
	}
	.btn button{
		width: 100%;
	}
	.yzm{
		display: flex;
	}
	.yzm button{
		margin-left: 20px;
	}
	
</style>