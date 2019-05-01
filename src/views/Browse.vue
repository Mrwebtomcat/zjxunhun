<!-- 浏览 -->
<template>
  <div class="module_follow">
		<Header :isHeader="1" :ative="0" style="posistion:relative;z-index: 1000;"></Header>
		<div class="followConten">
			<el-row class="selrow" :gutter="24" style="margin-left: 0;text-align: left;">
				<el-col :span="18" style="margin-left: 0;">
					<div class="letcontent">
						<div class="left_h1">
							<div class="left_h1_info">我的浏览</div>
						</div>
						<ul class="selctul">
							<li :class="isShowMesages==1?'ative':''" @click="slectLi(1)">我看过谁 <span class="tognum">{{LLArr.length}}</span></li>
							<li :class="isShowMesages==2?'ative':''" @click="slectLi(2)">谁看过我 <span class="tognum">{{BLLArr.length}}</span></li>
						</ul>
						<div v-if="isShowMesages==1" class="slecmainshow1">
							<ul >
								<li v-for="(items,index) in LLArr" :key="index">
									<div class="mesage_li_left">
										<img :src="showImgurl(items.vc_img,items.n_sex)" alt="">
										
										<div class="mesg_boxtxt">
											<div class="meboxh1">{{items.vc_nickname}} 
											<!-- <span class="isguanfan">官方</span> -->
											</div>
											<div class="meboxarea infoarea">
												{{items.n_age}}岁 | {{items.vc_city}} | {{items.vc_worke?items.vc_worke:''}}  | {{autoCode["4"][Number(items.n_huntype)-1]?autoCode["4"][Number(items.n_huntype)-1]['value']:''}}
												| {{items.n_sg}}cm | 
												{{autoCode["1"][Number(items.n_xueli)-1]?autoCode["1"][Number(items.n_xueli)-1]['value']:''}}
											</div>
											<div class="looknum">
												第1次查看你的资料
											</div>
											<div class="meboxarea dtime">{{items.dt_addtime}}</div>
										</div>
										<div class="mesg_btnx">
										</div>
									</div>
									<div class="mesage_li_right">
										<!-- <div class="wdxinxi">3封未读</div> -->
										<el-button class="showinfo" type="primary">打招呼</el-button>	
										<el-button class="showinfo" type="primary">关注</el-button>	
										<el-button class="showinfo" type="primary">发消息</el-button>	
									</div>
								</li>
								<li v-if="LLArr.length<=0">
									<div style="padding: 80px;">	暂无浏览信息。。。。。。。。</div>
								</li>
							</ul>
						</div>
						<div  v-if="isShowMesages==2" class="slecmainshow2">
							<ul class="message_ul">
								<li v-for="(items,index) in BLLArr" :key="index">
									<div class="mesage_li_left">
										<img v-if="items.vc_img&&items.vc_img!=''" :src="items.vc_img" alt="">
										<img v-else-if="items.n_sex==1&&(!items.vc_img||items.vc_img=='')" src="../assets/img/main.jpg" alt="">
										<img v-else src="../assets/img/woman.jpg" alt="">
										<div class="mesg_boxtxt">
											<div class="meboxh1">{{items.vc_nickname}}  <!-- <span class="isguanfan">官方</span> --></div>
											<div class="meboxarea infoarea mt14">
												{{items.n_age}}岁 | {{items.vc_city}} | {{items.vc_worke?items.vc_worke:''}}  | {{autoCode["4"][Number(items.n_huntype)-1]?autoCode["4"][Number(items.n_huntype)-1]['value']:''}}
												| {{items.n_sg}}cm | 
												{{autoCode["1"][Number(items.n_xueli)-1]?autoCode["1"][Number(items.n_xueli)-1]['value']:''}}
											</div>
											<div class="meboxarea dtime mt14">{{items.dt_addtime}}</div>
										</div>
										<div class="mesg_btnx">
										</div>
									</div>
									<div class="mesage_li_right">
										<!-- <div class="wdxinxi">3封未读</div> -->
										<el-button class="showinfo" type="primary" @click="dzh(items.vc_nickname)">打招呼</el-button>	
										<el-button class="showinfo" type="primary" @click="addgz(items.oc_usercode)">关注</el-button>	
										<el-button class="showinfo" type="primary" @click="message(items.oc_usercode)">发消息</el-button>	
									</div>
								</li>
								<li v-if="BLLArr.length<=0">
									<div style="padding: 80px;">	暂被浏览信息。。。。。。。。</div>
								</li>
							</ul>
							<!-- <div class="hn_img_box">
								<img src="https://i.zhenai.com/pc/portal/message/index/images/no-letter.764585b.png" alt="">
							</div>
							<div class="hn_infotext">服务流程五步走，六重保障觅珍爱</div>
							<div class="hn_infotext">相亲无难事，珍爱有红娘！</div>
							<div class="ljhn"><el-button class="showinfo" type="primary">了解红娘服务</el-button>	</div> -->
						</div>
					</div>
				</el-col>
				<el-col :span="6" style="margin-left: 0;">
					<div class="right_mysel">
						<div class="headeicon">
							<img v-if="userdata.vc_img&&userdata.vc_img!=''" :src="userdata.vc_img" alt="">
							<img v-else-if="userdata.n_sex==1" src="../assets/img/main.jpg" alt="">
							<img v-else src="../assets/img/woman.jpg" alt="">
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
									<div class="lincount">{{gzsl}}</div>
								</div>
							</li>
							<li>
								<div class="liclickitem">
									<div class="liname" @click="doLink('./Information')">消息</div>
									<div class="lincount">{{wdxinxi}}</div>
								</div>
								
							</li>
							<li>
								<div class="liclickitem">
									<div class="liname"  @click="doLink('./browse')">浏览过我的</div>
									<div class="lincount">{{BLLArr?BLLArr.length:0}}</div>
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
				wdxinxi:0,
				liulannum:0,
				bllnum:0,
				gzsl:0,
				isShowVip:0,
				isShowMesages:1,
				LLArr:[],
				BLLArr:[]
			}
		},
		methods:{
			ktvip:function(){
				this.isShowVip = 1;
			},
			toastip:function(str,type){
				this.$message({
				  message:str ,
				  type: type||'warning'
				});
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
			//添加关注
			addgz:function(id){
				let data = {
					startid:localStorage.openid,
					endid:id
				};
							
				
				connetAction.ajaxPost(https['addGuanzu'],data)
				.then((res)=>{
					if(res.status==1){
							// 初始化基本数据
							
					}else{
						this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			// 关注
			getGuanzhu:function(){
				let data = {
					id:localStorage.openid
				};
			
				connetAction.ajaxPost(https['getGz'],data)
				.then((res)=>{
					if(res.status==1){
							// 初始化基本数据 gzList: [], bgzLis
							
							this.gzsl = res.data.gzList.length+res.data.bgzList.length;
							
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
				.then(data=>{
					this.wdxinxi = data.xtMessage.length;
				})
				.catch(rd=>{
					
				})
			},
			// 浏览
			getLl:function(){
				connetAction.ajaxPost(https['getLl'],{id:localStorage.openid})
				.then(rd=>{
					this.LLArr = rd.data.lList;
					this.BLLArr = rd.data.blList;
				})
				.catch(rd=>{
					
				})
			},
			//user信息
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
				if(url&&url!=""){
					return url;
				}else{
					if(sex!=1){
						url = "../assets/main.jpg"
					}else{
						url = "../assets/woman.jpg"
					}
					return url;
				}
			}
		},
		created(){
			this.getLl(); 
			this.getuerList();
			this.getGuanzhu();
			this.getWdxx();
			this.autoCode = JSON.parse(localStorage.autoCode);
		},
		mounted(){
			
		},
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.module_follow{
		width: 100%;
		height: 100%;
		background: #f3f3f3;
		padding-top: 80px;
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
	.dtime{
		color: #999;
	}
	.infoarea{
		font-size: 14px;
		color: #666;
	}
	.looknum{
		font-size: 14px;
		color: #999;
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
	.slecmainshow1 ul li,.message_ul li{
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
	.mesage_li_left img{
		width:80px;
		height: 80px;
	}
	.mesg_boxtxt{
		padding-left: 0.5em;
	}
	.meboxh1{
		font-weight: bold;
	}
	.meboxarea{
		/* margin-top: 10px; */
		font-size: 14px;
	}
	.mt14{
		 margin-top: 10px;
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