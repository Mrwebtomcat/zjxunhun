<!-- 注册 -->
<template>
  <div class="rehgist">
	  <Header :isShowIcon="0"></Header>
	  <div class="regis_main">
		 <el-row :gutter="20">
		  <el-col :span="18"><div class="grid-content bg-purple">
			<el-form ref="form" :model="form" label-width="100px">
				 <el-form-item label="你的昵称 :">
					  <el-col :span="8" style="padding-left:0;">
						<el-input v-model="form.vc_nickname" placeholder="请输入昵称"></el-input>
					  </el-col>
				</el-form-item>
			  <el-form-item label="你的性别 :">
					<el-radio-group v-model="form.n_sex">
					  <el-radio label="男"></el-radio>
					  <el-radio label="女"></el-radio>
					</el-radio-group>
			  </el-form-item>
			  <el-form-item label="你的身高:">
				  <el-col :span="8" style="padding-left:0;">
				  	<el-input v-model="form.vc_sg" placeholder="请输入你的身高"> <i slot="suffix" class='idIcon' >(cm)</i> </el-input>
				  </el-col>
			  </el-form-item>
			   <el-form-item label="出生日期 :">
					<el-col :span="8" style="padding-left:0;">
					  <el-date-picker type="date" placeholder="选择日期" v-model="form.n_age" style="width: 100%;"></el-date-picker>
					</el-col>
			  </el-form-item>
			  <el-form-item label="工作地区 :" >
				  <el-col :span="8" style="padding-left:0;" >
					<el-select v-model="form.vc_province" placeholder="请选择省份" @change="getCity">
					  <el-option v-for="(items,index) in provice" :key="index" :label="items['name']" :value="items['id']" ></el-option>
					</el-select>
				  </el-col>
				  
				  <el-col :span="8" style="padding-left:0;">
					<el-select v-model="form.vc_city" placeholder="请选择市区" @change="getArea">
					  <el-option v-for="(items,index) in city" :key="index" :label="items['name']" :value="items['id']" ></el-option>
					</el-select>
				  </el-col> 
				  
				  <el-col :span="8" style="padding-left:0;">
					<el-select v-model="form.vc_area" placeholder="请寻选择镇/县">
					 	<el-option v-for="(items,index) in Area" :key="index" :label="items['name']" :value="items['id']" ></el-option>
					</el-select>
				  </el-col>
			  </el-form-item>
			   <el-form-item label="我的学历 :">
				  <el-col :span="8" style="padding-left:0;">
					<el-select v-model="form.n_education" placeholder="请选择你的学历">
					  <el-option v-for="(items,index) in autoData[1]" :key="index" :label="items['value']" :value="items['code']"></el-option>
					</el-select>
				  </el-col>
			  </el-form-item>
			  <el-form-item label="个人月薪 :">
				  <el-col :span="8" style="padding-left:0;">
					<el-select v-model="form.n_money" placeholder="选择你的薪资范围">
						<el-option v-for="(items,index) in autoData[2]" :key="index" :label="items['value']" :value="items['code']"></el-option>
					</el-select>
				  </el-col>
			  </el-form-item>
			  <el-form-item label="婚姻状态 :">
					<el-radio-group v-model="form.n_huntype">
					  <el-radio label="未婚"></el-radio>
					  <el-radio label="离异"></el-radio>
					  <el-radio label="丧偶"></el-radio>
					</el-radio-group>
			  </el-form-item>
			   <el-form-item label="手机号码 :">
				  <el-col :span="8" style="padding-left:0;">
					<el-input v-model="form.vc_userphone" placeholder="请输入手机号码"></el-input>
				  </el-col>
				  <div style="float: left;">验证码：</div>
				    <el-col :span="4" style="padding-left:0;">
				  		<el-input v-model="form.code" placeholder="填写验证码"></el-input>
				  </el-col>
				   <el-col :span="4" style="padding-left:0;margin-right: 20px;">
				  		<el-button v-if="ispostCode" class="" type="primary" @click="getSms">{{yzmtext}}</el-button>
				  		<el-button type="info" disabled  v-else>已发送({{mincode}})S</el-button>
				  </el-col>
				 
			  </el-form-item>
			  <el-form-item label="密码 :">
				  <el-col :span="8" style="padding-left:0;">
					<el-input type="password" v-model="form.vc_password" placeholder="请输入密码"></el-input>
				  </el-col>
			  </el-form-item>
			   <el-form-item label="请确认密码 :">
				  <el-col :span="8" style="padding-left:0;">
					<el-input type="password" v-model="aginpsw" placeholder="请再次输入密码"></el-input>
				  </el-col>
			  </el-form-item>
			  <el-form-item label="">
			  		<div>
						<el-checkbox v-model="istongyi"></el-checkbox> 已阅读和同意寻婚网的服务条款和信息保护政策并同意将本人提供之信息
由寻婚网提供线上/线下服务使用
					</div>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" :loading="isloading" @click.stop="onSubmit">免费注册 开启寻婚之旅</el-button>
				
				<el-button  @click="cancel">取消</el-button>
			  </el-form-item>
			</el-form>
		  </div></el-col>
		  
		  <!-- 右侧广告区域 -->
		  <el-col :span="6">
			  <div class="grid-content bg-purple">
				  <img src="../assets/img/side-card.d4df2ff.png" alt="">
				  
			  </div>
		  </el-col>
		</el-row>
	  </div>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';
import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
import https from "../utils/Https.js"
export default {
	data(){
		return{
			data:'',
			name:"",
			mincode:60,
			ispostCode:1,
			istongyi:0,
			yzmtext:"获取验证码",
			provice:[],//省份
			city:[],//城市
			Area:[],//地区
			autoData:[],
			isloading:false,
			aginpsw:'',
			form:{
				vc_nickname:'',
				n_sex:"男",
				vc_sg:170,
				n_age:'',
				vc_province:'',
				 vc_city :'',
				 vc_area:'',
				n_education:'',
				n_money:"",
				n_huntype:0,
				vc_userphone:'',
				code:'',
				vc_password:'',
				provice:[],
			  provincearr:[],
			  citysarrs:[],
				areaarrs:[]
			}
		}
	},
	methods: {
		...mapMutations(['setPosition']),
		onSubmit() {
			let that = this,data=this.form;
			
			if(!data['vc_nickname']||data['vc_nickname']==""){
				message(this,{contxt:"昵称不能为空"})
				return false;
			}
			
			
			if(this.form['n_sex']=="男"){
				data['n_sex'] = 1
			}else if(this.form['n_sex']=="女"){
				data['n_sex'] = 2
			}
			
			if(!data['n_age']||data['n_age']==""){
				message(this,{contxt:"出生日期不能为空"})
				return false;
			}
			if(!data['vc_province']||data['vc_province']==""){
				message(this,{contxt:"请选择省份"})
				return false;
			}
			if(!data['vc_city']||data['vc_city']==""){
				message(this,{contxt:"请选择城市"})
				return false;
			}
			if(!data['vc_area']||data['vc_area']==""){
				message(this,{contxt:"请选择城区"})
				return false;
			}
			if(!data['n_education']||data['n_education']==""){
				message(this,{contxt:"请选择学历"})
				return false;
			}
			if(!data['n_money']||data['n_money']==0){
				message(this,{contxt:"请选择薪资"})
				return false;
			}
			if(!data['n_huntype']||data['n_huntype']==0){
				message(this,{contxt:"请选择婚姻情况"})
				return false;
			}else{
				if(data['n_huntype']=="未婚"){
					data['n_huntype'] = 1;
				}else if(data['n_huntype']=="离异"){
					data['n_huntype'] =2;
				}else{
					data['n_huntype'] =3;
				}
			}
			if(!data['vc_userphone']||data['vc_userphone']==""){
				message(this,{contxt:"手机号码不能为空"})
				return false;
			}
			if(!regPhone(data.vc_userphone)){
				message(this,{contxt:"手机格式不正确"})
				return false;
			}
			if(!data['code']||data['code']==""){
				message(this,{contxt:"验证码不能为空"})
				return false;
			}
			if(!data['vc_password']||data['vc_password']==""){
				message(this,{contxt:"密码不能为空"})
				return false;
			}else{
				if(data['vc_password']!=this.aginpsw){
					message(this,{contxt:"两次输入的密码不一致"})
					return false;
				}
			}
			var nowDate = new Date().getFullYear();
			var inputDate = new Date(data['n_age']).getFullYear();
			inputDate =Number(nowDate) - Number(inputDate);
			this.isloading = true;
			var dd = {};
			connetAction.ajaxPost(https['register'],Object.assign(dd,data,{'n_age':inputDate}))
			.then(rd=>{
				if(rd.status==1){
					this.isloading = false;
					that.toast(rd.message,'success')
					setTimeout(function(){
						that.$router.push('./')
					},2000)
				}else{
					
				}
				// 
				// console.log(rd)
			})
			.catch(res=>{
				console.log(res,"res")
			})
		},
		cancel() {
			this.isloading = false;
			this.$router.push('./')
		},
		dolink(url){
			this.$router.push(url)
		},
		formatTooltip(val){
			this.form.vc_sg = val;
			return val + 'cm'
		},
		toast:function(str,type){
			this.$message({
			  message: str,
			  type: type||'error'
			});
		},
		// 获取省份
		getProvice: function() {
				this.provincearr = [];
				this.citysarrs = [];
				this.areaarrs = [];
				connetAction.ajaxPost(https['tree'], "")
					.then(rd => {
						//console.log(rd)
						if (rd.status != 0) {   
							var provice =rd.data;
							for(var i=0;i<provice.length;i++){
								if(provice[i]['type']==1){
									this.provincearr.push(provice[i]);
								}
								if(provice[i]['type']==2){
									this.citysarrs.push(provice[i]);
								}
								if(provice[i]['type']==3){
									this.areaarrs.push(provice[i]);
								}
							}
							this.provice = this.provincearr;
							this.setPosition({vc_province:this.provincearr,vc_city:this.citysarrs,vc_area:this.areaarrs})
						}

					})
					.catch(res => {
						console.log(res, "res")
					})
			},
			//获取城市
			getCity: function(pid) {
				this.city = [];
				this.Area = [];
				this.form.vc_area = "";
				this.form.vc_city = "";
				for(var i=0;i<this.citysarrs.length;i++){
					if(this.citysarrs[i]['pid']==pid){
						this.city.push(this.citysarrs[i])
					}
				}
				console.log(this.city.push,333)
			},
			//获取地区
			getArea: function(pid) {
				this.form.vc_area = "";
				this.Area = [];
				for(var i=0;i<this.areaarrs.length;i++){
					if(this.areaarrs[i]['pid']==pid){
						this.Area.push(this.areaarrs[i]);
					}	
				}
			},
		// 发送验证码
		getSms:function(){
			let timer=null,that=this,data = {
				type:1,
				vc_userphone:this.form.vc_userphone
			}
			if(this.mincode<60){
				return false;
			}
			if(!data.vc_userphone||data.vc_userphone==""||data.vc_userphone==null){
					that.toast("手机号码不能为空",'warning')
					return false;
			}
			if(!regPhone(data.vc_userphone)){
				message(this,{contxt:"手机格式不正确"})
				return false;
			}
			this.ispostCode = 0;
			timer = setInterval(function(){
				that.mincode--;
				if(that.mincode<=0){
					clearInterval(timer);
					that.ispostCode = 1;
					that.mincode = 60;
					that.yzmtext = "重新获取验证码";
					
				}
			},1000)
		
			connetAction.ajaxPost(https['getSmsCode'],data)
			.then(rd=>{
				if(rd.status==1){

					that.toast("验证码发送成功,请用手机查看",'success')
				}
			})
			.catch(res=>{
				// console.log(res,"res")
				that.toast('发送验证码失败')
			})
		},
		// 默认请求系统编码
		autoCode:function(){
			connetAction.ajaxPost(https['getCode'],"")
			.then(rd=>{
				this.autoData = rd.data;
				//console.log(this.autoData)
			})
			.catch(res=>{
				// console.log(res,"res")
			})
		}
	},
	created(){
			this.getProvice();
	},
	mounted() {
		this.autoCode();
	}
}
</script>
<style scoped>
	.rehgist{
		padding-top: 80px;
		width: 100%;
		/* height: 100%; */
		background: #f4f4f4;
	}
	.regis_main{
		width: 1200px;
		margin: auto;
		padding-top: 1%;
	}
	.regis_main .el-select{
		width: 100%;
	}
	.regis_main .el-form{
		background: #fff;
		text-align: left;
		padding-bottom:4% ;
		border-radius: 10px;
		
	}
	.regis_main .el-form-item{
		padding-top: 1%;
		margin-bottom: 1%;
	}
	.regis_main .regis_main .el-input__inner{
		width: 30%;
	}
</style>
