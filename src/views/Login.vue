<!-- 登陆 -->
<template>
  <div class="M_login">
			<Header :isShowIcon="0"></Header>
			<div class="l_content">
				<div class="l_conright">
					<div class="hd_txt">登陆金梦情缘</div>
					<div class="lo_input">
						<div class="lo_left_info">账号：</div>
						<input class="le_info_input" placeholder="请输入手机号码" type="text" v-model="user" value="" @keyup.enter="goLogin" />
					</div>
					
					<div class="lo_input">
						<div class="lo_left_info">密码：</div>
						<input class="le_info_input" type="password" placeholder="请输入密码" v-model="psw" value="" @keyup.enter="goLogin"/>
					</div>
					<div class="fogetpsw" @click="forgetPsw">
						忘记密码？
					</div>
					<div class="lobtnbox">
						<div class="lo_btn">
							<button @click="goLogin" >登陆</button>
						</div>
						<div class="lo_btn" @click="gotoreg">
							<button class="zhuc">注册</button>
						</div>
					</div>
					
				</div>
			</div>
			<div class="coopy_footer">
				<div class="l_content">
					<div class="xunaitip">寻婚网，在灯火阑珊处等你</div>
					<div class="fstype">
						<li>
							<div class="imglist">
								<img src="../assets/img/goutong.png" alt="">
							</div>
							<div class="ty_tile">心有灵犀</div>
							<div>剖析内心，让三观更匹配</div>
						</li>
						<li>
							<div class="imglist">
								<img src="../assets/img/friend.png" alt="">
							</div>
							<div  class="ty_tile">动态</div>
							<div>走进她（他）的生活圈</div>
						</li>
						
						<li>
							<div class="imglist">
								<img src="../assets/img/xin.png" alt="">
							</div>
							<div  class="ty_tile">情缘对对碰</div>
							<div>面对面交流，真诚高效</div>
						</li>
						<!-- <li>
							<div class="imglist">
								<img src="../assets/img/code.png" alt="">
							</div>
							<div  class="ty_tile">关注小程序</div>
							<div>婚恋帮助更方便</div>
						</li> -->
					</div>
				</div>
				
			</div>
  </div>
</template>

<script>
import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
import https from "../utils/Https.js"
export default {
	data(){
		return{
			user:"",
			psw:"",
			
		}
	},
	methods:{
		forgetPsw:function(){
			this.$router.push('./getPsw')
		},
		gotoreg:function(){
			let that = this;
			that.$router.push('./register')
			return false;
			connetAction.ajaxPost(https['register'],{sid:localStorage.sessionid})
			.then(rd=>{
				if(rd.status!=0){
					that.$router.push('./register')
					// message(that,{contxt:rd.message})
					setKey('sessionid',rd.data);
					//that.$router.push('./home');
				}else{
					message(that,{contxt:rd.message});
					setKey(rd.data);
				}
				
			})
			.catch(res=>{
				console.log(res,"res")
			})
		},
		goLogin:function(){
			if(this.user==""){
				message(this,{contxt:"用户名不能为空"})
				return false;
			}else{
				if(!regPhone(this.user)){
					message(this,{contxt:"账号错误"})
					return false;
				}
			}
			if(this.psw==""){
				message(this,{contxt:"密码不能为空"})
				return false;
			}
			let data = {
				vc_userphone:this.user,
				vc_password:this.psw
			};
			let that = this;
			connetAction.ajaxPost(https['login'],data)
			.then(rd=>{
				if(rd.status!=0){
					// message(that,{contxt:rd.message})
					///setKey('sessionid',rd.data);
					localStorage.openid = rd.data
					  that.$message({
						  showClose: true,
						  duration:1900,
						  message: rd.message,
						  type: 'success'
					  });
					setTimeout(function(){
						that.$router.push('./home');
					},2000);
					if(localStorage.exitid){
						localStorage.removeItem('exitid')
					}
				}else{
					//localStorage.sessionid = rd.data
					message(that,{contxt:rd.message});
					// setKey('sessionid',rd.data);
				}
				
			})
			.catch(res=>{
				console.log(res,"res")
			})
		}
	
	},
	mounted(){
		
	}
}
</script>
<style scoped>
	.M_login{
		padding-top: 80px;
		width: 100%;
		height: 100%;
		background: url(../assets/img/bg1.jpg) no-repeat;
	}
	
	.l_content{
		width: 1200px;
		height: 100%;
		margin: auto;
		text-align: left;
		position: relative;
	}
	
	.l_content{
		height: 68%;
		border: 0px transparent;
	}
	.l_conright{
		position: absolute;
		right: 0;
		width: 33%;
		height: 70%;
		border: 1px solid transparent;
		background: #fff;
		box-shadow: 0 0 20px rgba(0,0,0,.5);
		border-radius: 10px;
		top: 10%;
	}
	.hd_txt{
		font-size: 20px;
		text-align: center;
		padding-top:5%;
	}
	.lobtnbox{
		margin: auto;
		width: 68%;
		height: 3em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 8%;
		padding-left: 18%;
	}
	.lo_input{
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		height: 10%;
		margin-top:7%;
	}
	.lo_left_info{
		flex: 0 0 15%;
	}
	.le_info_input{
		flex: 0 0 50%;
		height: 100%;
		padding: 0 1%;
	}
	.lo_btn{
		width: 100%;
		box-sizing: border-box;
		text-align: left;
	}
	.lo_btn button{
		width: 76%;
		height: 3em;
		outline: 0;
		border: 0;
		background: -webkit-linear-gradient(224.2deg,#f11197,#e175a5);
		background: -moz-linear-gradient(224.2deg,#f11197,#e175a5);
		background: linear-gradient(-134.2deg,#f11197,#e175a5);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffb06cef",endColorstr="#ff8070f1",GradientType=1);
		cursor: pointer;
		color: #fff;
		font-weight: 500;
		border-radius: 5px;
	}
	.lo_btn .zhuc{
		background: linear-gradient(-134.2deg,#73a8ea,#638eed);
		background: -moz-linear-gradient(224.2deg,#73a8ea,#638eed);
		background: linear-gradient(-134.2deg,#73a8ea,#638eed);
	}
	.fogetpsw{
		text-align: right;
		padding-right: 17%;
		padding-top: 3%;
		color: red;
		cursor: pointer;
	}
	.coopy_footer{
		/* height: 25%; */
		/* background: rgba(195,188,216,.1); */
		padding-bottom: 2%;
	}
	.imglist{
		text-align: center;
	}
	.imglist img{
		width: 50%;
		border-radius: 50%;
	}
	.xunaitip{
		text-align: left;
		font-size: 20px;
		padding: 2% 0;
	}
	.fstype{
		display: flex;
	}
	.fstype li{
		list-style: none;
		flex: 0 0 20%;
		margin-right: 5%;
	}
	.fstype li div{
		text-align: center;
	}
</style>
