<!-- 资料信息 -->
<template>
  <div class="module_informa">
		<Header :isHeader="1" :ative="0" style="posistion:relative;z-index: 1000;"></Header>
		<div class="followConten">
			<el-row class="selrow" :gutter="24" style="margin-left: 0;text-align: left;">
				<el-col :span="18" style="margin-left: 0;">
					<div class="letcontent">
						<div class="left_h1">
							<div class="left_h1_info">消息中心</div>
						</div>
						<ul class="selctul">
							<li :class="isShowMesages==1?'ative':''" @click="slectLi(1)">消息列表 <span class="tognum">{{wdxinxi.xtMessage.length+wdxinxi.yhMessage.length}}</span></li>
							<li :class="isShowMesages==2?'ative':''" @click="slectLi(2)">红娘来信</li>
						</ul>
						<div v-if="isShowMesages==1" class="slecmainshow1">
							<ul class="message_ul">
								<li v-for="(itmes,index) in wdxinxi.xtMessage" :key="index">
									<div class="mesage_li_left">
										<img src="https://photo.zastatic.com/images/photo/2223/8888888/163784965568714450.jpg?scrop=1&crop=1&cpos=north&w=80&h=80?scrop=1&crop=1&cpos=north&w=80&h=80" alt="">
										<div class="mesg_boxtxt">
											<div class="meboxh1">快速找对象 <span class="isguanfan">官方</span></div>
											<div class="meboxarea">无限制看信发信各项特权助你邂逅真爱</div>
											<div class="meboxarea">3月15日</div>
										</div>
										<div class="mesg_btnx">
										</div>
									</div>
									<div class="mesage_li_right">
										<!-- <div class="wdxinxi">3封未读</div> -->
										<el-button class="showinfo" type="primary">查看</el-button>	
									</div>
								</li>
								<li v-for="(itmes,index) in wdxinxi.yhMessage" :key="index" >
									<div class="mesage_li_left">
										<img src="https://photo.zastatic.com/images/photo/2223/8888888/163784965568714450.jpg?scrop=1&crop=1&cpos=north&w=80&h=80?scrop=1&crop=1&cpos=north&w=80&h=80" alt="">
										<div class="mesg_boxtxt">
											<div class="meboxh1">小小巧 <!-- <span class="isguanfan">官方</span> --></div>
											<div class="meboxarea">24岁 | 大学本科 | 5-8千 | 北京</div>
											<div class="meboxarea">3月7日</div>
										</div>
										<div class="mesg_btnx">
										</div>
									</div>
									<div class="mesage_li_right">
										<div class="wdxinxi">1封未读</div> 
										<el-button class="showinfo" type="primary">查看</el-button>	
										<div class="colmesagLi">x</div>
									</div>
								</li>
								<li v-show="wdxinxi.xtMessage?wdxinxi.xtMessage.length<=0?true:false:false">
									<div style="padding: 80px;">	暂无消息。。。</div>
								</li>
							</ul>
						</div>
						<div  v-if="isShowMesages==2" class="slecmainshow2">
							<div class="hn_img_box">
								<img src="https://i.zhenai.com/pc/portal/message/index/images/no-letter.764585b.png" alt="">
							</div>
							<div class="hn_infotext">服务流程五步走，六重保障觅金梦</div>
							<div class="hn_infotext">相亲无难事，金梦有红娘！</div>
							<div class="ljhn"><el-button class="showinfo" type="primary" @click="doLink('./hongniang')">了解红娘服务</el-button>	</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6" style="margin-left: 0;">
					<div class="right_mysel">
						<div class="headeicon">
							<img :src="showImgurl(userdata.vc_img,userdata.n_sex)" alt="">
						</div>
						<div class="user_name">
							{{userdata?userdata.vc_nickname:''}}
						</div>
						<div class="user_name iconbox">
							<span :class="userdata&&userdata.n_isstart==1?'start ative':'start'"></span>
							<span :class="userdata&&userdata.n_isvip==1?'vip ative':'vip'"></span>
							<span :class="userdata&&userdata.n_issm==3?'card ative':'card'"></span>
						</div>
						<ul class="myulitem">
							<li>
								<div class="liclickitem" @click="doLink('./follow')">
									<div class="liname">关注我的</div>
									<div class="lincount">{{gzsl.bgzList?gzsl.bgzList.length:0}}</div>
								</div>
							</li>
							<li>
								<div class="liclickitem">
									<div class="liname" @click="doLink('./Information')">消息</div>
									<div class="lincount">{{wdxinxi.xtMessage?wdxinxi.xtMessage.length:0}}</div>
								</div>
								
							</li>
							<li>
								<div class="liclickitem">
									<div class="liname"  @click="doLink('./browse')">浏览过我的</div>
									<div class="lincount">{{liulannum}}</div>
								</div>
								
							</li>
						
						</ul>
					</div>
				</el-col>
			</el-row>
		</div>
  </div>
</template>
<script>
	import {connetAction,regPhone} from "../utils/index.js"
	import https from "../utils/Https.js"
	export default{
		data(){
			return{
				userdata:{},
				gzsl:{},
				LLArr:[],
				liulannum:0,
				wdxinxi:{xtMessage:[],yhMessage:[]},
				isShowVip:0,
				isShowMesages:1
			}
		},
		methods:{
			ktvip:function(){
				this.isShowVip = 1;
			},
			closeVip:function(){
				this.isShowVip = 0;
			},
			slectLi:function(ints){
				this.isShowMesages = ints;
			},
			doLink:function(url){
				this.$router.push(url)
			},
			dzh:function(str){
				this.toastip(`与${str}打招呼成功`,'success')
			},
			message:function(str){
				if(this.userdata.n_isvip!=1){
					this.toastip('开通会员立即享受，立即与心仪的人一对一聊天哦')
					return false;
				}
				this.$router.push({name:'userinfo',query:{id:str}})
			},
			// 关注
			getGuanzhu:function(){
				let data = {
					id:localStorage.openid
				};
			
				connetAction.ajaxPost(https['getGz'],data)
				.then((res)=>{
					if(res.status==1){
							// 初始化基本数据
							this.gzsl = res.data
							console.log(this.gzsl)
							
					}else{
						this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			// 未读
			getWdxx:function(){
				connetAction.ajaxPost(https['getWdxx'],{id:localStorage.openid})
				.then((res)=>{
					if(res.status==1){
						this.wdxinxi = data.xtMessage;
					}
				})
				.catch(function(rd){
					
				})
			},
			// 浏览
			getLl:function(){
				connetAction.ajaxPost(https['getLl'],{id:localStorage.openid})
				.then((res)=>{
					if(res.status==1){
						this.LLArr = res.data.lList.length;
						this.liulannum = res.data.blList.length;
					}
				})
				.catch((rd)=>{
					
				})
			},
			getuerList:function(){
				let data = {
					oc_usercode:localStorage.openid
				}
				connetAction.ajaxPost(https['index'], data)
					.then(rd => {
						if(rd.status==1){
							this.userdata = rd.data.userlist;
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			showImgurl(url,sex){
				if(url!=""){
					return url;
				}else{
					if(sex!=1){
						url = "../assets/main.jpg"
					}else{
						url = "../assets/woman.jpg"
					}
					return false;
				}
			}
		},
		created(){
			this.getuerList();
			this.getLl();
			this.getWdxx();
			this.getGuanzhu();
		},
		mounted(){
			
		}
		
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.module_informa{
		width: 100%;
		height: 100%;
		padding-top: 80px;
		background: #f3f3f3;
	}
	.followConten{
		width: 1200px;
		margin: auto;
		padding-top:1em;
	}
	.letcontent{
		width: 100%;
		min-height: 400px;
		background: #fff;
		border-radius: 10px;
		border: 1px solid #ddd;
	}
	.left_h1{
		height:60px;
		line-height: 60px;
		border-bottom: 1px solid #ddd;
	}
	.left_h1_info{
		position: relative;
		font-weight: bold;
		font-size: 18px;
		padding-left: 1%;
		margin-left: 5%;
	}
	.left_h1_info:before{
		position: absolute;
		display: block;
		content: "";
		height: 31%;
		left: 0;
		top: 35%;
		width: 2px;
		background: #a187f9;
	}
	.selctul{
		display: flex;
		padding-left: 4%;
	}
	.selctul li{
		margin-right: 2em;
		padding: 1em 0.5em;
		cursor: pointer;
	}
	.selctul li.ative{
		position: relative;
	}
	.selctul li.ative:after{
		position: absolute;
		bottom: 0;
		left: 5%;
		display: block;
		content: "";
		width: 90%;
		height: 2px;
		background: #4169E1;
	}
	.slecmainshow1,.slecmainshow2{
		width: 100%;
		height: 400px;
		background: #fff;
		box-sizing: border-box;
	}
	.tognum{
		display: inline-block;
		height: 1.2em;
		line-height: 1.2em;
		width: 1em;
		text-align: center;
		color: #fff;
		background: #ff7351;
		padding:0  0.2em;
		border-radius: 0.2em;
	}
	.message_ul li{
		display: flex;
		padding-left: 4%;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
	}
	.mesage_li_left{
		display: flex;
		padding: 1em 0;
		flex: .7;
	}
	.mesg_boxtxt{
		padding-left: 0.5em;
	}
	.meboxh1{
		font-weight: bold;
	}
	.meboxarea{
		margin-top: 10px;
		font-size: 14px;
	}
	.isguanfan{
		display: inline-block;
		vertical-align: bottom;
		width: 32px;
		height: 18px;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		margin-left: 5px;
		color: #fff;
		border-radius: 4px;
		background: -webkit-linear-gradient(135deg,#c07bff,#8d7dff);
		background: -moz-linear-gradient(135deg,#c07bff 0,#8d7dff 100%);
		background: linear-gradient(315deg,#c07bff,#8d7dff);
	}
	.mesage_li_right{
		flex: .3;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 4em;
		position: relative;
	}
	.showinfo{
		height: 35px;
	}
	.wdxinxi{
		font-size: 12px;
		margin-right: 5%;
	}
	.message_ul li:hover{
		background: #f3f1fe;
	}
	.colmesagLi{
		position: absolute;
		right: 3%;
		top: -4px;
		font-size: 18px;
		color: #999;
		padding: 10px;
		cursor: pointer;
		display: none;
	}
	.message_ul li:hover .colmesagLi{
		display: block;
	}
	.hn_img_box{
		width: 142px;
		height: 142px;
		margin: 0 auto;
		margin-top: 84px;
	}
	.hn_img_box img{
		width: 100%;
		height: 100%;
	}
	.hn_infotext{
		text-align: center;
		font-size: 14px;
		color: #999;
	}
	.ljhn{
		margin-top: 10%;
		text-align: center;
	}
	.right_mysel{
		width: 100%;
		height: 400px;
		background: #fff;
		border-radius: 10px;
		border: 1px solid  transparent;
	}
	.headeicon{
		width: 80px;
		height: 80px;
		margin:30px auto 10px;
	}
	.headeicon img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.user_name{
		text-align: center;
	}
	.user_name span{
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
		margin-right: 1em;
		cursor: pointer;
	}
	.iconbox{
		padding-top: 0.2em;
	}
	.user_name span:last-child{
		margin-right: 0;
	}
	.user_name .start{
		background: url(../assets/img/start1.png) no-repeat;
	}
	.user_name .vip{
		background: url(../assets/img/vip1.png) no-repeat;
	}
	.user_name .card{
		background: url(../assets/img/card1.png) no-repeat;
	}
	.user_name .start.ative{
		background: url(../assets/img/start2.png) no-repeat;
	}
	.user_name .vip.ative{
		background: url(../assets/img/vip2.png) no-repeat;
	}
	.user_name .card.ative{
		background: url(../assets/img/card2.png) no-repeat;
	}
	.myulitem{
		padding-top: 1em;
	}
	.myulitem li{
		height:60px;
		padding:1em 2em;
		box-sizing: border-box;
	}
	.liclickitem{
		display: flex;
		height: 100%;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
</style>