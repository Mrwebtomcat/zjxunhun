<!-- 身份认证 -->
<template>
  <div class="xunhun">
    <Header :isHeader="1" :ative="0"></Header>
		<div class="xh_main">
			 <div class="vip_notice" >
				<img src="../assets/img/banner.fa0272b.png" alt="">
			 </div>
			 <div class="changeseach">
				  <el-row :gutter="24" style="margin-left: 0;">
						<el-col :span="17" class="uerlistbg">
								<div class="seachbox">
									<div v-if="autoInfo['n_issm']==0" class="selcinev" >
										 认证状态	- <span class="smspan">未实名认证，请填写相关信息实名认证</span>	
									</div>
									<div v-else-if="autoInfo['n_issm']==1" class="selcinev" >
										 认证状态	- <span class="smspan">用户待审核状态</span>	
									</div>
									<div v-else class="selcinev" >
										 认证状态	- <span class="smspan">恭喜你已经审核通过了</span>	
									</div>
								</div>
								<div class="userboxs">
									<el-form v-if="autoInfo['n_issm']==0" ref="form" :model="form" label-width="200px">
										<div v-show="renzheng==0">
											 <el-form-item label="姓名">
													<el-input v-model="form.name"></el-input>
											</el-form-item>
											 <el-form-item label="身份证号码">
													<el-input v-model="form.idcard"></el-input>
											</el-form-item>
										</div>
										<div v-show="renzheng==1">
											 <el-form-item label="手机号码">
												<el-input v-model="form.phone"></el-input>
											</el-form-item>
											 <el-form-item label="验证码">
												<el-input v-model="form.yzm" style="width:100px;margin-right: 30px;" type="small" ></el-input>
												<el-button v-show="showCode==1" type="small"  @click="GetYzm">获取验证码</el-button>
												<el-button v-show="showCode!=1" type="primary">{{isCode}}</el-button>
											</el-form-item>
											
										</div>
										  <el-form-item v-if="renzheng==0">
											<el-button type="primary" @click="onSubmit(1)">下一步</el-button>
										  </el-form-item>
										  <el-form-item v-else-if="renzheng==1">
										  		<el-button type="primary" @click="onSubmit(2)">手机验证</el-button>
										  </el-form-item>
									</el-form>
									<div v-else style="margin: auto;">
										<div v-if="autoInfo['n_issm']==1" class="selcinev"  >
											 <span class="smspan" style="font-size: 20px;">正在等待审核中,请等待...</span>	
										</div>
										<div v-if="autoInfo['n_issm']==2" class="selcinev"  >
											 <span class="smspan" style="font-size: 20px;color: blue;">恭喜你，实名审核已通过</span>	
										</div>
									</div>
								</div>
								<div class="seachbox">
									<div class="selcinev" >
										认证流程	
									</div>
								</div>
								<div class="lcul">
									<div class="rzlist">
										<img src="../assets/img/flow_01.22edfd6.png" alt="">
										<div class="lcmshu">输入真实姓名及身份证</div>
									</div>
									<div class="xiayibu">
										<span></span>
										<span class="bigs"></span>
										<span></span>
									</div>
									<div class="rzlist">
										<img src="../assets/img/flow_03.81d7c28.png" alt="">
										<div class="lcmshu">验证手机号绑定信息</div>
									</div>
									<div class="xiayibu">
										<span></span>
										<span class="bigs"></span>
										<span></span>
									</div>
									<div class="rzlist">
										<img src="../assets/img/flow_04.0db0674.png" alt="">
										<div class="lcmshu">授权通过</div>
									</div>
								</div>
								
								<div class="seachbox">
									<div class="selcinev" >
										安全保障	
									</div>
								</div>
								<div class="aqbz">
									<div class="bztxt">金梦情缘，严格保护会员隐私</div>
									<br>
									<div class="bztxt">如认证遇到困难，可咨询客服13824818105</div>
								</div>
								
						</el-col>
						<el-col :span="7">
							
							<div class="notice_info">
								<div class="vipuserinfo">
									<div class="box">
										<img v-if="autoInfo['vc_img']" :src="autoInfo['vc_img']" alt="">
										<img v-else src="https://photo.zastatic.com/images/photo/479940/1919757993/24788310680142720.jpeg" alt="">
									</div>
									<div class="box">
											<div class="lac1">{{autoInfo['vc_nickname']}}</div>
											<div class="lac1" style="padding-top:4%;">
												<div class="icon_vip">
													<span :class="autoInfo['n_isstar']?'start active':'start'" @click="dolink('/start')"></span>
													<span :class="autoInfo['n_isvip']?'vip active':'vip'" @click="dolink('/vip')"></span>
													<span :class="autoInfo['n_issm']==3?'card active':'card'" @click="dolink('/idcard')"></span>
												</div>
											</div>
											<div class="lac1" style="padding-top:3%;">
												 <!-- <span>30%</span> -->
												 <span @click="dolink('/editinfo')">个人资料</span>
												 <span @click="dolink('/vip')">充值</span>
											</div>
									</div>
								</div>
								
							</div>
							
							<div class="perseon">
								<div class="xhfwtitle">金梦情缘相关服务</div>
								<div class="xhyw">
									<ul>
										<li>
											<div class="imgs">
												<img src="https://i.zhenai.com/pc/portal/myZhenai/images/zhenxin.67ffa14.png" alt="">
											</div>
											<div class="fwcontext">
													<div class="fwheader">寻婚会员</div>
													<div class="body">解锁消息发送，无限量免费查看，更多精准筛选条件</div>
											</div>
										</li>
										<li>
											<div class="imgs">
												<img src="https://i.zhenai.com/pc/portal/myZhenai/images/star.a6da2b1.png" alt="">
											</div>
											<div class="fwcontext">
													<div class="fwheader">星级特权</div>
													<div class="body">查看谁赞了我，谁关注我，搜索排名优先，更多展示机会</div>
											</div>
										</li>
										<li>
											<div class="imgs">
												<img src="https://i.zhenai.com/pc/portal/myZhenai/images/zhiying.b5112b6.png" alt="">
											</div>
											<div class="fwcontext">
													<div class="fwheader">寻婚会员</div>
													<div class="body">优质精选会员，红娘服务一对一，五步服务，六重保障！</div>
											</div>
										</li>
									</ul>
								</div>
								
							</div>
							
							
							
							<div class="perseon">
								<div class="xhfwtitle">金梦情缘相关</div>
								<div class="xhyw">
									<ul>
										<li>
											<div class="fwcontext ">
												<div class="connetp">金梦情缘红娘如果联系您，会使用如下号码</div>
												<div class="body connetp">湛江：13824818105</div>
												<div class="body connetp">湛江：13702889930</div>
											</div>
										</li>
									</ul>
								</div>
								
							</div>
							
						</el-col>
					</el-row>
			 </div>
		</div>
		<Shadow></Shadow>
  </div>
</template>

<script>
// @ is an alias to /src
import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
import mingzu from '../json/mz.json'
import https from "../utils/Https.js"
import { setInterval, clearInterval, setTimeout } from 'timers';
export default {
 data(){
	 return{
		 vip:"",
		 form:{
			 name:"",
			 idcard:"",
			 phone:"",
			 yzm:""
		 },
		 autoInfo:{vc_nickname:'',n_issm: 0,n_isstar: 0,n_isvip: 0},
		 isShowSlec:0,
		 renzheng:0,
		 isCode:60,
		 showCode:1,
		 shstatus:0
	 }
 },
 created() {
	 this.getInfos();
	 // this.vipInfo();
 },
 methods: {
 	goToVip() {
 		this.$router.push('./vip')
 	},
	gotfollw() {
 		this.$router.push('./follow')
 	},
	dolink(url) {
 		this.$router.push(url)
 	},
	toastip:function(str,type){
		this.$message({
		  message:str ,
		  type: type||'warning'
		});
	},
	GetYzm() {
		let data = {
			type:3,
			vc_userphone:this.form.phone
			
		}
		if(data.vc_userphone==""){
			this.toastip('手机号码不能为空');
			return false;
		}else{
			if(!regPhone(data.vc_userphone)){
				this.toastip('手机号码不正确');
				return false;
			}
		}
		var timer = null,that=this;
		if(this.showCode){
			timer = setInterval(function(){
				that.isCode--;
				if(that.isCode<=0){
					clearInterval(timer);
					that.isCode = 60;
					that.showCode = 1;
				
				}
			},1000)
		}
		that.showCode =0;
	
		connetAction.ajaxPost(https['getSmsCode'],data)
		.then((res)=>{
			if(res.status==1){
				
			}else{
				this.toastip(res.message)
			}	
			
		})
		.catch((res)=>{
			
		})
 	},
	showDetail(str) {
 		this.$router.push({
			name:"userinfo",
			params:{
				detailname:str
			}
		})
 	},
	goSearch(){
		this.isShowSlec = !this.isShowSlec;
	},
	getInfos:function(){
		let data = {id:localStorage.openid};
		
		connetAction.ajaxPost(https['getInfo'],data)
		.then((res)=>{
			if(res.status==1){
					 this.autoInfo = res.data;
					
			}else{
				this.toastip(res.message)
			}	
			
		})
		.catch((res)=>{
			
		})
	},
	// vipInfo:function(){
	// 	let data = {
	// 		page:1,
	// 		pageNum:20 
	// 	};
	// 	
	// 	connetAction.ajaxPost(https['showDsh'],data)
	// 	.then((res)=>{
	// 		if(res.status==1){
	// 				 console.log(res.data)
	// 				
	// 		}else{
	// 			this.toastip(res.message)
	// 		}	
	// 		
	// 	})
	// 	.catch((res)=>{
	// 		
	// 	})
	// },
	onSubmit(type){
		if(this.form['name']==""){
			this.toastip('请输入姓名，再操作');
			return false;
		}
		if(this.form['idcard']==""){
				this.toastip('请输入身份证，再操作');
			return false;
		}
		if(type!=2){
			this.renzheng = type;
		}
		if(type==2){
			let data1 = {
				id:localStorage.openid,
				vc_username:this.autoInfo['vc_nickname'],
				vc_userphone:this.form.phone,
				n_sfzh:this.form.idcard,
				code:this.form.yzm
			}
			var that  =this;
			
			if(data1.vc_userphone=='' && !data1.vc_userphone){
				this.toastip('手机号码');
					return false;
			}
			if(data1.code=='' && !data1.code){
				this.toastip('请填写验证码');
					return false;
			}
			connetAction.ajaxPost(https['setSm'],data1)
			.then((res)=>{
				if(res.status==1){
					this.toastip(res.message,'success');
					setTimeout(function(){
							that.renzheng = type;
							window.location.reload();
					},4000)
				}else{
				
					this.toastip(res.message)
				}	
				
			})
			.catch((res)=>{
				
			})
		}
		
	}
 },
}
</script>
<style scoped>
	.xunhun{
		width: 100%;
		background: #f5f5f5;
		padding-top: 80px;
	}
	.xh_main{
		width: 1200px;
		margin: auto;
		padding-top:2%;
	}
	.vip_notice{
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0,0,0,0.5);
	}
	.changeseach{
		margin-top: 2%;
		min-height: 26.5em;
	}
	.uerlistbg{
		border-radius: 10px;
		background: #fff;
		
	}
	.seachbox{
		padding-top: 2%;
		padding-bottom: 2%;
		border-bottom: 1px solid #ddd;
		margin-bottom: 2%;
		height:30px;
	}
	.slecdx{
		color: royalblue;
		cursor: pointer;
	}
	.smspan{
		color: red;
		font-size: 12px;
	}
	.userboxs{
		/* height: 500px; */
		width: 100%;
		/* overflow-y: scroll; */
		display: flex;
		flex-direction: row;
    flex-wrap: wrap;
	}
	.useritem{
		cursor: pointer;
    width:44%;
    height: 194px;
    padding:0 22px;
		text-align: left;
		padding-right: 1%;
	}
	.useritem:nth-child(2n-1){
		padding-right: 0;
	}
	.uiname,.uiinfo,.umakers{
		margin-bottom: 3.05%;
	}
	.umakers{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		height: 4em;
	}
	.umakers,.uiinfo{
		font-size: 0.8em;
	}
	.sayhellow{
		padding-top: 4%;
	}
	.sayhellow .el-button{
		width: 100%;
	}
	.notice_info{
		width: 100%;
		background: #fff;
		border-radius: 10px;
		padding-bottom: 5%;
		min-height: 30%;
		text-align: center;
	}
	.notice_info .el-col{
		cursor: pointer;
	}
	.perseon{
		margin-top: 1.5em;
		width: 100%;
		min-height: 4em;
		background: #fff;
		border-radius: 10px;
		text-align: left;
		margin-bottom: 2em;
	}
	.xhfwtitle{
		font-size: 1.2em;
		padding: 10px 10px 0;
	}
	.xhyw ul li{
		display: flex;
		padding: 10px;
		align-items: center;
	}
	.xhyw .imgs{
		flex: 0 0 13%;
	}
	.imgs img{
		width: 100%;
	}
	.xhyw .fwcontext{
		flex: 0 0 81%;
		padding-left: 10px;
	}
	.fwcontext .body{
		font-size: 0.8em;
	}
	.itemcontents{
		height:150px;
	}
	.notice_info img{
		width: 40%;
	}
	.ninfo_text{
		font-size:.8em;
	}
	.vipuserinfo{
		width: 100%;
		display: flex;
	}
	.vipuserinfo .box{
		flex: 0  0 50%;
		width: 100%;
		box-sizing: border-box;
		padding: 10px 0;
		overflow: hidden;
		padding-right: 0;
	}
	.box img{
		width: 110px;
		height: 110px;
	}
	.box:last-child{
		padding: 0;
	}
	.lac1{
		padding-top: 30px;
		text-align: left;
		font-size: 14px;
		color: #999;
	}
	.icon_vip{
		padding-top: 15px;
	}
	.icon_vip span{
		width: 20px;
		height: 20px;
		display: inline-block;
		margin-right: 10px;
		cursor: pointer;
	}
	.lac1 span{
		font-size: 0.8em;
		margin-right: 5%;
		cursor: pointer;
	}
	.start{
		background: url(../assets/img/start1.png) no-repeat;
	}
	.vip{
		background: url(../assets/img/vip1.png) no-repeat;
	}
	.card{
		background: url(../assets/img/card1.png) no-repeat;
	}
	.selrow{
		display: flex;
		align-items: center;
	}
	.selcinev{
		height: 30px;
		line-height: 30px;
	}
	.selcinev ul{
		display: flex;
		list-style: none;
	}
	.selcinev ul li{
		width: 11%;
		display: flex;
		margin-right: 1%;
	}
	.selcinev ul li button{
		height: 31px;
		line-height: 31px;
		padding: 0;
		text-align: center;
	}
	.slectxt{
		padding-top: 1%;
	}
	.el-select input{
		padding: 0 !important;
	}
	.connetp{
		font-size: 14px;
		color: #999;
		margin-top: 5px;
	}
	.bztxt{
		font-size: 14px;
		color: #999;
	}
	.aqbz{
		padding: 0px 0 30px;
	}
	
	.lcul{
		display: flex;
		justify-content: center;
	}
	.rzlist{
		width: 80px;
		text-align: center;
		
	}
	.xiayibu{
		width: 15%;
		height: 80px;
		display: flex;
		align-items: center;
		margin-left: 5%;
		margin-right: 5%;
		justify-content: space-between;
	}
	.xiayibu span{
		width: 20px;
		height: 20px;
		border-radius:100%;
		background: #f0d6a5;
	}
	.xiayibu span.bigs{
		width: 40px;
		height: 40px;
	}
	.rzlist .lcmshu{
		font-size: 14px;
		color: #ff8700;
	}
</style>
