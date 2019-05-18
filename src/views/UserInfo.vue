<!-- 用户资料 -->
<template>
  <div class="module_UserInfo">
		<Header :isHeader="1" :ative="0"></Header>
		<div class="user_info_banner">
			
		</div>
		<div class="followConten mtf300">
			<el-row class="selrow" :gutter="24" style="margin-left: 0;text-align: left;">
				<el-col :span="18" style="margin-left: 0;">
					<div class="letcontent">
						<div class="lef_con_top">
							<div class="userheader">
								<div class="myheaderlogo" :style="`background:url(${userData.vc_img?userData.vc_img:(myn_sex==1?manimg:womanimg)}) 0% 0% / cover no-repeat;`"></div>
								<div class="infoworks">
									<div class="name" style="margin-top:25px;">{{userData&&userData['vc_nickname']?userData['vc_nickname']:''}}
										<span :class="userData&&userData['n_isstar']?'card_type start active':'card_type start'"></span>
										<span :class="userData&&userData['n_issm']==2?'card_type card active':'card_type card'"></span>
										<span :class="userData&&userData['n_isvip']?'card_type vip active':'card_type vip'"></span>
									 <span class="userfollow" @click.stop="addGuanzhu">关注</span>
									</div>
									<!-- ID：1761685425 -->
									<div class="user_id mt10"></div>
									<div class="workesage mt10" style="color: #fff;">
										{{userData['vc_city']?userData['vc_city']+'|':''}} 
										{{userData['n_age']?userData['n_age']+' 岁 |':''}} 
										{{userData['n_xueli']?strMoney(userData['n_xueli'],"1")+' |':''}} 
										{{userData['n_huntype']?huntext(userData['n_huntype'])+' |':''}} 
										{{userData['n_sg']?userData['n_sg']+'cm |':''}}  
										{{userData&&userData['n_money']?strMoney(userData['n_money']) +' 元':''}}
									</div>
										
									<div class="phoneto">
										<div class="ctrl prve" v-if="userData&&userData['album'].length>0"></div>
										<div class="photoWrapper">
											<ul v-if="userData&&userData['album'].length>0">
												<li v-for="(items,index) in userData['album']" :key="index">
													<img preview="1" preview-text="..." :src="items.vc_img" alt="">
												</li>
											</ul>
											<!-- <div v-else class="noImgs">
												她没有上传更多的照片
											</div> -->
											
										</div>
										<div class="ctrl next" v-if="userData['album'].length>0"></div>
										<!-- 她没有更多照片了 -->
									</div>
								</div>
							</div>
							<div class="user_bottom">
								<div class="hellow" @click="dzh">打招呼</div>
								<div class="messages" @click="fxx">发信息</div>
								<div class="hongniang" @click="lxHn">红娘牵线</div>
							</div>
						</div>
						<div class="pepole_details">
							<div class="details_header">
								<span>内心独白</span>
							</div>
							<div class="planemsg">
								<!-- 我个子不高，但是我身材凹凸有致，平时喜欢健身看书听音乐唱歌，我会说英语略懂法语，生活中朋友们对我的评价是可爱又迷人的小傻瓜，我希望能遇见一个共同追求幸福生活的他，一起去网吧偷耳机，追随他到天涯海角... -->
								{{!userData['vc_descript']||userData['vc_descript']==""?'暂无任何描述':userData['vc_descript']}}
							</div>
							<div class="details_header">
								<span>个人兴趣</span>
							</div>
							<div class="planemsg">
								<el-tag>
									<!-- 喜欢看书，喜欢大海，喜欢美食 -->
									{{!userData['vc_loveplay']||userData['vc_loveplay']==""?'暂无任何描述':userData['vc_loveplay']}}
								</el-tag>
								<!-- <el-tag type="success">籍贯:四川泸州</el-tag>
								<el-tag type="info">体型:苗条</el-tag>
								<el-tag type="warning">不吸烟社交场合会喝酒</el-tag>
								<el-tag type="danger">租房未买车</el-tag>
								<el-tag type="danger">是否想要孩子:视情况而定</el-tag>
								<el-tag type="danger">何时结婚:时机成熟就结婚</el-tag>
								<el-tag type="danger">没有小孩</el-tag> -->
							</div>
							<div class="details_header">
								<span>个人资料</span>
							</div>
							<div class="planemsg">
								<!-- {{userData}} -->
								<el-tag v-if="userData['vc_mz']">民族：{{userData['vc_mz']?slectJsontext(userData['vc_mz']):''}}</el-tag>
								<el-tag type="success">籍贯:{{userData['vc_province']?userData['vc_province']:''}}</el-tag>
								<el-tag type="info" v-if="userData['n_tz']">体重: {{userData['n_tz']}} kg</el-tag>
								<el-tag type="warning" >是否吸烟:{{userData['n_smoke']?issmoke(userData['n_smoke'],'吸烟'):'该信息未填写'}}</el-tag>
								<el-tag type="danger">是否喝酒:{{userData['n_alcohol']?issmoke(userData['n_alcohol'],"喝酒"):'该信息未填写'}}</el-tag>
								<el-tag type="info"  v-if="userData['n_iscar']!=''||userData['n_iscar']">{{userData['n_iscar']?userData['n_iscar']==1?'已购车':'未购车':'该信息未填写'}}</el-tag>
								<el-tag type="danger" >是否想要孩子:{{userData['n_ischild']?strMoney(userData['n_ischild'],'5'):'该信息未填写'}}</el-tag>
								<el-tag type="info" >何时结婚:{{userData['n_huntype']?strMoney(userData['n_huntype'],'4'):'该信息未填写'}}</el-tag>
								<el-tag type="danger">小孩情况：{{userData['n_child']?strMoney(userData['n_child'],'3'):'该信息未填写'}}</el-tag>
							</div>
							<div class="details_header">
								<span>择偶条件</span>
							</div>
							<div class="planemsg">
								<!-- {{tjUser.tiaoJian}} -->
								<el-tag type="warning" v-show="!tjUser.tiaoJian">暂无描述</el-tag>
								<!-- <el-tag   type="success" v-show="tjUser.tiaoJian">籍贯:{{tjUser.tiaoJian['vc_province']?tjUser.tiaoJian['vc_province']:'该信息未填写'}}</el-tag> -->
								<!-- <el-tag type="warning" v-show="tjUser.tiaoJian">年龄:{{tjUser.tiaoJian['n_min_age']&&tjUser.tiaoJian['n_min_age']!=""?tjUser.tiaoJian['n_min_age']+' ~ ':''}}{{tjUser.tiaoJian['n_max_age']?tjUser.tiaoJian['n_max_age']:''}} 岁</el-tag> -->
								<el-tag v-if="tjUser.tiaoJian">学历：{{tjUser.tiaoJian['n_xueli']?strMoney(tjUser.tiaoJian['n_xueli'],'1'):'该信息未填写'}}</el-tag>
								<el-tag v-if="tjUser.tiaoJian">身高: {{tjUser['tiaoJian']?tjUser['tiaoJian']['n_min_sg']+'cm ~ ':''}}{{tjUser['tiaoJian']?tjUser['tiaoJian']['n_max_sg']+'cm ':''}}</el-tag>
								<el-tag v-if="tjUser.tiaoJian" type="info" >体重:{{tjUser.tiaoJian['n_min_tz']?tjUser.tiaoJian['n_min_tz']+'kg ~ ':''}}{{tjUser.tiaoJian['n_max_tz']?tjUser.tiaoJian['n_max_tz']+'kg':''}}</el-tag>
								<el-tag v-if="tjUser.tiaoJian">{{tjUser['tiaoJian']['n_money']?'薪资: '+strMoney(tjUser['tiaoJian']['n_money'],'2'):''}}</el-tag>
								<el-tag v-if="tjUser.tiaoJian">{{tjUser['tiaoJian']['n_smoke']?'是否吸烟: '+issmoke(tjUser['tiaoJian']['n_smoke']):''}}</el-tag>
								<el-tag v-if="tjUser.tiaoJian">{{tjUser['tiaoJian']['n_alcohol']?'是否喝酒: '+issmoke(tjUser['tiaoJian']['n_alcohol'],'喝酒'):''}}</el-tag>
							
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6" style="margin-left: 0;">
					<div class="right_mysel">
						<div class="rightcontent1">
							<div class="jmqy_box">
							</div>
							
							<div v-for="(items,index) in vipList" :key="index" :class="GMative==items['id']?'product_item ative':'product_item'">
							 <div class="produc_month cf84">{{items['n_time']}}个月</div> 
							 <div class="produc_day cf84">日均{{items['vc_daymoney']}}元</div>
							 <div class="produc_money cf84"><span>热卖</span> ￥{{items['n_money']}}</div> 
							 <div :class="GMative==items['id']?'produc_check el-icon-circle-check ative':'produc_check el-icon-circle-check'" @click="checkVip(items['id'])"></div>
							</div>
							<div style="text-align: center;">
								<el-button @click="doLink({name:'vip',query:{vipMoney:GMative}})">立即购买</el-button>
							</div>
						</div>
						
						<div class="rightcontent2">
							<div class="h2">猜你喜欢 
								<!-- <span  style="float: right;font-size: 20px;cursor: pointer;" class="el-icon-refresh"></span> -->
								</div>
							<div class="ranguser">
								<div v-if="tjUser['tjList'].length>0"  v-for="(items,index) in tjUser['tjList']" :key="index" class="useritem" @click="goChat">
									<div class="user_left">
										<img :src="items['vc_img']&&items['vc_img']!=''?items['vc_img']:'https://photo.zastatic.com/images/photo/426830/1707319317/23549166602228029.jpg?scrop=1&crop=1&cpos=north&w=100&h=100'" alt="">
									</div>
									<div class="user_right">
										<div class="u_name">{{items?items['vc_nickname']:''}}</div>
										<div class="u_tallorage">
											<span>{{items['n_age']}}岁</span>
											<!-- <span>161cm</span> -->
										</div>
										<div class="u_mark">
											我正在
											<!-- {{diliArray[Number(items['vc_city'])-2]?diliArray[Number(items['vc_city'])-2].name:''}}， -->
											寻找年龄在{{items['n_age']}}岁-{{items['n_age']+5}}岁的...
										</div>
									</div>
								</div>
								<div v-else>
									暂无发现更多的消息
								</div>
							</div>
						</div>
						
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 聊天窗口 -->
		<chatPan 
			:showChat = "isShowChat"
			:chartDate="liaotainarray"
			:username="userData['vc_nickname']" 
			:usertmeta="'  '"
			:input_state="isline"
			:closeFn="fnfn1"
			:enterFn="enterFn"
			:Mofan="fnfn1 "
			:ohterHeadUrl="userData['vc_img']&&userData['vc_img']!=''?userData.vc_img:''"
			:headUrl="tjUser['userlist']&&tjUser['userlist']['vc_img']!=''?tjUser['userlist']['vc_img']:'暂无头像'"
			ref="chatPlane"
		>
		</chatPan>
  </div>
</template>
<script>
import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
import mingzu from '../json/mz.json'
import https from "../utils/Https.js"
import womanimg from '../assets/img/woman.jpg'
import manimg from '../assets/img/main.jpg'
var sokect = null;
	export default{
		data(){
			return{
				isShowVip:0,
				isShowMesages:1,
				isline:'离线中....',
				isShowChat:0, //聊天窗口
				liaotainarray:[],//聊天容器
				GMative:1,
				myn_sex:1,
				sokect:null,
				tjUser:[],//推荐会员
				mingzu:mingzu, //名族
				bigAreaData:[], //地区bigjson
				vipList:[], //会员充值列表
				isguanzu:0,
				womanimg:womanimg,
				manimg:manimg,
				userData:{
					album: [],
					dt_addtime: "2019-02-14 07:02:52",
					dt_updatetime: "2019-03-22 07:03:12",
					id: 3,
					n_age: 18,
					n_alcohol: 0,
					n_child: 0,
					n_huntype: 1,
					n_info: 30,
					n_iscar: 0,
					n_ischild: 0,
					n_ishouse: 0,
					n_issm: 0,
					n_isstar: 0,
					n_isvip: 0,
					n_jiehuntime: 0,
					n_money: 2,
					n_sex: 2,
					n_sfzh: 0,
					n_sg: 0,
					n_smoke: 0,
					n_tz: 0,
					n_xueli: 1,
					oc_usercode: "3",
					tiaojian: null,
					vc_area: 690,
					vc_city: 75,
					vc_descript: "",
					vc_img: "",
					vc_loveplay: "",
					vc_mz: null,
					vc_nickname: "丽梓",
					vc_province: 5,
					vc_username: null,
					vc_userphone: "13702889930",
					vc_worke: null,
					vc_xinzuo: null
					
				}
			}
		},
		computed:{
			autoCode(){
				return this.$store.state.getpCode
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
			checkVip:function(i){
				this.GMative = i;
			},
			// 提示语封装
			toastip:function(str,type){
				this.$message({
				  message:str ,
				  type: type||'warning'
				});
			},
			// 打招呼
			dzh:function(){
				let param = {
					startid:localStorage.openid,
					vc_nick_name:this.userData.vc_nickname,
					endid:this.userData.id
				}
				
				connetAction.ajaxPost(https['dzh'],param)
				.then((res)=>{
					if(res.status==1){
							this.$message({
							  message:res.message ,
							  type:'succeess'
							});
					}else{
						this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			fnfn1:function(){ //关闭聊天
				if(sokect){
					sokect.send(JSON.stringify({'type':'close','uid':this.tjUser['userlist']['id']}))
				}
				this.isShowChat = 0;
			},
			Mofan:function(str){//模仿第二人
				this.liaotainarray.push({state:1,chatTxt:str})
			},
			enterFn:function(str){//回车聊天发送
				if(!sokect){
					console.log("sokect不存在",sokect)
				}
				sokect.send(JSON.stringify({'type':'liaotian','startid':this.tjUser['userlist']['id'],'endid':this.$route.query.id,'content':str}));
				// state:0 代表自己发出的消息,state:1聊天对象发出的信息
				this.liaotainarray.push({state:0,chatTxt:str});
				//console.log({'type':'liaotian','startid':this.tjUser['userlist']['id'],'endid':this.$route.query.id,'content':str});
			},
			// 发信息
			fxx:function(){
				if(!this.tjUser['userlist']['n_isvip']){
					this.toastip("金梦情缘会员能发起信息聊天哦");
					return false;
				}
				// 建立通信
				sokect = new WebSocket("ws://47.105.35.82:1688");
				// 通信建立
				sokect.onopen = (e)=>{
					//this.isline = "对方上线了";
					 // 发送一条信息
					// console.log('WS客户端已经重新成功连接到服务器上');
					// sokect.send(JSON.stringify({'uid':this.tjUser['userlist']['id']}));
				}
				sokect.onmessage = (e)=>{
					console.log('WS客户端接收到一个服务器的消息', e);
					var data = JSON.parse(e.data);
					if(data.status==1){
						this.isline = "对方上线了";
						sokect.send(JSON.stringify({'uid':this.tjUser['userlist']['id']}));
						localStorage.ulistid = this.$route.query.id;
						console.log("this.tjUser['userlist']['id']",this.tjUser['userlist']['id'])
					}
					if(data.status==2){ //系统消息
						this.isline = "下线了...";
						var str  =data.message?data.message:'该用户不在线';
						//this.liaotainarray.push({state:1,chatTxt:e.data})
					}
					if(data.status==3){
						// state:0 代表自己发出的消息,state:1聊天对象发出的信息
						this.liaotainarray.push({state:1,chatTxt:data.message});
						this.$refs.chatPlane.autoScroll();
					}
					console.log(data,"data")
					
				}
				this.isShowChat = 1;
				return false;
				document.addEventListener('visibilitychange', function () {
				  // 用户离开了当前页面
					if (document.visibilityState === 'hidden') {
						console.log(0)
						sokect.onmessage = function(e){
								//sokect.send(JSON.stringify({'type':'close','uid':this.tjUser['userlist']['id']}));
						 }
						
					}
					// 用户打开或回到页面
					if (document.visibilityState === 'visible') {
						console.log(1)
						console.log(this.tjUser)
						//sokect = new WebSocket("ws://47.105.35.82:1688");
						sokect.onmessage = (e)=>{
							console.log('WS客户端接收到一个服务器的消息', e);
							var data = JSON.parse(e.data);
							if(data.status==1){
								this.isline = "对方上线了";
								sokect.send(JSON.stringify({'uid':localStorage.openid}));
								console.log("this.tjUser['userlist']['id']",this.tjUser['userlist']['id'])
							}
							if(data.status==2){ //系统消息
								var str  =data.message?data.message:'该用户不在线';
								this.isline = "对方已离线了.....";
								//this.liaotainarray.push({state:1,chatTxt:e.data})
							}
							if(data.status==3){
								// state:0 代表自己发出的消息,state:1聊天对象发出的信息
								this.liaotainarray.push({state:1,chatTxt:data.message});
								this.$refs.chatPlane.autoScroll();
							}
							// console.log(data,"data")
							
						}
					}
					
				})
				this.isShowChat = 1;
			},
			//筛选默认code类型
			strMoney:function(id,arrnum="2",js=1,){
				let str = "";
				
				try{
					if(id!="" || id!=undefined || id!=null){
						var autoCode = JSON.parse(localStorage.autoCode);
						if(autoCode[arrnum][Number(id)-js].value){
							str = autoCode[arrnum][Number(id)-js].value;
						}
					}
					
				}catch(e){
					//TODO handle the exception
				   console.log(id,'输出报错')
				}
			
				// 
				// console.log(str)
				return str;
			},
			//筛选结婚类型
			huntext:function(type){
				let str = "";
				type==1?str="未婚":str =(type==2?'离异':'丧偶');
				return str;
			},
			issmoke:function(type,val="吸烟"){
				let str = "";
				type!=0?str =(type==1?'可以'+val:'不要'+val):str="不限";
				return str;
			},
			slectJsontext:function(val){
				let str = "";
				str = mingzu.mz.filter((item,index,arr)=>item.val==val)
				return str[0].name;
			},
			// 会员列表
			huiyuanInfo(){
				connetAction.ajaxPost(https['huiyuan'], {id:localStorage.openid})
				.then(rd => {
					// console.log( this.myn_sex,'xingbie')
					var n_sex = this.myn_sex?1:2;
					
					let mydata = rd.data.filter((item,index,arr)=>(item.n_type==1&&item.n_sex==n_sex));
					this.$nextTick(function(){
						this.vipList = mydata;
					})
					
					this.getFuWu()
				})
				.catch(res => {
					this.getFuWu()
				})
			},
			//特殊服务和会员列表合并
			getFuWu:function(){
				let that = this;
				connetAction.ajaxPost(https['nvIndex'], {type:3})
				.then(rd => {
					var n_sex = this.myn_sex?2:1;
					let datas =  rd.data.filter((item,index,arr)=>item.n_sex==n_sex);
					this.vipList=this.vipList.concat(...datas);
					
				})
				.catch(res => {
					// console.log(res,"res")
				})
			},
			//用户信息
			getInfos:function(){
				let data = {id:this.$route.query.id};
				if(!data.id){
					return false;
				}
				
				connetAction.ajaxPost(https['getInfo'],data)
				.then((res)=>{
					if(res.status==1){
							 this.userData = res.data;
							 this.myn_sex =  this.userData.n_sex;
							 // alert(this.myn_sex)
							// 初始化基本数据
							
					}else{
						this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			addGuanzhu:function(){
				let data = {
					startid:localStorage.openid,
					endid:this.$route.query.id
				};
			
				
				connetAction.ajaxPost(https['addGuanzu'],data)
				.then((res)=>{
					if(res.status==1){
							this.toastip(res.message,'suceess');
							 this.userData = res.data;
							// 初始化基本数据
							
					}else{
						this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			lxHn:function(){
				
				let data = {
					oc_usercode:localStorage.openid
				};
				
				connetAction.ajaxPost(https['getHN'],data)
				.then((res)=>{
					if(res.status==1){
							this.toastip('已成功联系红娘','success')
							
					}else{
						this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			getGuanzhu:function(){
				let data = {
					id:this.$route.query.id
				};
			
				
				connetAction.ajaxPost(https['getGz'],data)
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
			//推荐用户
			getuerList:function(){
				let data = {
					oc_usercode:localStorage.openid
				}
				connetAction.ajaxPost(https['index'], data)
					.then(rd => {
						if(rd.status==1){
							this.tjUser = rd.data;
							// console.log(this.tjUser,333)
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			//
			addLl:function(){
				let data = {
					startid:localStorage.openid,
					endid:this.$route.query.id
				}
				connetAction.ajaxPost(https['addLiulan'], data)
					.then(rd => {
						if(rd.status==1){
							// this.tjUser = rd.data;
							// console.log(this.tjUser,333)
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			goChat: function() {
				if(!this.userData['n_isvip']){
					message(this,{
						title:`不是会员暂时不能与${this.userData['n_sex']==1?'她':'他'}发起消息`,
						contxt:"",
						center:true
					})
				}
				
			},
			
		},
		created(){
			this.huiyuanInfo();
			this.getuerList();
			if(localStorage.posPAC){
				this.bigAreaData = JSON.parse(localStorage.posPAC);
			}
			this.addLl(); 
		},
		mounted(){
			this.getInfos();
			// this.getGuanzhu();
			if(sokect){
				window.onbeforeunload=function(e){     
				　　var e = window.event||e;  
					/*if(sokect&&document.visibilityState=="visible"){
						
						sokect.send('我要关闭了哦');
					}*/
				　　e.returnValue=("确定离开当前页面吗？");
				}
			}
			
			
		}
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.user_info_banner{
		position: relative;
		height: 282px;
		background: linear-gradient(-134.2deg,#f11197,#e175a5);
	}
	.module_UserInfo{
		width: 100%;
		padding-top: 80px;
		background: #f3f3f3;
	}
	.followConten{
		width: 1200px;
		margin: auto;
		padding-top:1em;
	}
	.mtf300{
		margin-top: -142px;
	}
	.letcontent{
		width: 100%;
		min-height: 400px;
		border-radius: 10px;
	}
	
	.right_mysel{
		width: 100%;
		border: 1px solid  transparent;
		padding-bottom: 10px;
	}
	.rightcontent1{
		background: #fff;
		border-radius: 10px;
		padding-bottom: 10px;
	}
	.lef_con_top{
		height: 194px;
		background: #fff;
	}
	.myheaderlogo{
		width: 200px;
		height: 200px;
		margin-left: 32px;
		border-radius: 10px;
	}
	.userheader{
		height: 200px;
		border-radius: 10px;
		display: flex;
		transform: translateY(-100px);
	}
	.infoworks{
		flex: 1;
		padding-left: 32px;
		height: 100px;
	}
	.name{
		display: flex;
		align-items: center;
	}
	.userfollow{
		display: inline-block;
		width: 80px;
		height: 30px;
		margin-left: 10px;
		line-height: 30px;
		font-size: 14px;
		background: #fff;
		border-radius: 17px;
		color: #a187f9;
		text-align: center;
		cursor: pointer;
		vertical-align: text-bottom;
	}
	.userfollow:before{
		content: "";
		display: inline-block;
		margin-right: 4px;
		width: 14px;
		height: 12px;
		vertical-align: middle;
		background: 0 0 no-repeat url(../assets/img/follow.58b970b.png);
		background-size: 100% 100%;
	}
	.card_type{
		width: 20px;
		height: 20px;
		display: inline-block;
		margin-left: 10px;
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
	.start.active{
		background: url(../assets/img/start2.png) no-repeat;
	}
	.vip.active{
		background: url(../assets/img/vip2.png) no-repeat;
	}
	.card.active{
		background: url(../assets/img/card2.png) no-repeat;
	}
	.noImgs{
		height: 100%;
		display: flex;
		align-items: center;
	}
	.phoneto{
		height: 100px;
		display: flex;
		align-items: center;
		position: relative;
		top: 20px;
	}
	.mt10{
		margin-top: 10px;
	}
	.photoWrapper{
		position: relative;
		height: 100px;
		width: 562px;
		margin-left: 30px;
		overflow: hidden;
	}
	.ctrl {
		position: absolute;
		top: 0;
		width: 30px;
		height: 100px;
		background: 50% no-repeat url(../assets/img/photo_arrow.076ea61.png);
		background-size: 14px 14px;
		cursor: pointer;
		opacity: .5;
		-webkit-transition: opacity .3s;
		-moz-transition: opacity .3s;
		transition: opacity .3s;
	}
	.prve{
		transform: rotate(180deg);
	}
	.next{
		right: 0;
	}
	.photoWrapper ul{
		display: flex;
	}
	.photoWrapper ul li{
		margin-right: 10px;
	}
	.photoWrapper ul li img{
		width: 80px;
		height: 80px;
		/* cursor: pointer; */
	}
	.user_bottom{
		display: flex;
		/* padding:0 28px; */
		height: 75px;
		transform: translateY(-80px);
		box-sizing: border-box;
		background: rgba(145,110,240,.07);
	}
	.user_bottom div{
		position: relative;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.user_bottom div:before{
		content: "";
		display: inline-block;
		margin-right: 3px;
		width: 30px;
		height: 30px;
		background: 0 0 no-repeat;
		background-size: 100% 100%;
		vertical-align: middle;
	}
	.user_bottom div:after{
		content: "";
		position: absolute;
		right: 0;
		top: 26px;
		width: 1px;
		height: 34px;
		background: #d2d2d2;
	}
	.user_bottom .hellow:before{
		background:url(../assets/img/say_hi.e3267a0.png) no-repeat;
	}
	.user_bottom .messages:before{
		background:url(../assets/img/send_msg.9e21c34.png) no-repeat;
	}
	.user_bottom .hongniang:before{
		background:url(../assets/img/hongliang.f74367d.png) no-repeat;
	}
	.user_bottom .hongniang:after{
		display: none;
	}
	.pepole_details{
		background: #fff;
		margin-bottom: 100px;
		margin-top: 30px;
		padding-bottom: 20px;
	}
	.details_header{
		font-size: 16px;
		height: 50px;
		line-height: 50px;
		padding:0 50px ;
		/* border-bottom: 1px solid #F3F3F3; */
	}
	.details_header span{
	    position: relative;
		display: inline-block;
		line-height: 50px;
		font-weight: bold;
	}
	.details_header span:after{
		display: inline-block;
		content: "";
		width:2px;
		height: 18px;
		background: #000;
		vertical-align: middle;
		margin-left: 1em;
	}
	.planemsg{
		padding: 0 50px;
	}
	.planemsg .el-tag{
		margin-top: 10px;
		margin-right: 13px;
	}
	.jmqy_box{
		width: 100%;
		height: 102px;
		background: url(../assets/img/banner_zhenxin.jpg) no-repeat;
		background-size: contain;
		border-radius: 10px 10px 0;
	}
	.product_item{
		display: flex;
		justify-content: space-between;
		padding:10px;
		box-sizing: border-box;
	}
	.product_item.ative .cf84{
		color: #ff8400;
	}
	.product_item div{
		line-height: 20px;
	}
	.produc_month{
		font-size: 14px;
	}
	.produc_day{
		width: 66px;
		font-size: 12px;
	}
	.produc_money{
		font-size: 14px;
		font-weight: bold;
	}
	.produc_money span{
		font-size: 12px;
	}
	.produc_check{
		color: #999;
		font-size: 20px;
		cursor: pointer;
	}
	.produc_check.ative{
		color: #17cb17;
	}
	
	
	/* 用户随机显示 */
	.rightcontent2{
		margin-top: 30px;
		border-radius: 10px;
		background: #fff;
	}
	.rightcontent2 .h2{
		font-size: 16px;
		font-weight: 600;
		padding:10px 20px;
		border-bottom: 1px solid #f3f3f3;
	}
	.ranguser{
		min-height: 300px;
		padding-bottom: 20px;
	}
	.useritem{
		display: flex;
		padding-left: 20px;
		padding-right: 10px;
		padding-top: 20px;
		box-sizing: border-box;
	}
	.useritem .user_left{
		flex: 0 0 75px;
		height: 75px;
		border-radius: 10px;
		margin-right: 10px;
		overflow: hidden;
	}
	.user_left img{
		width: 100%;
	}
	.user_right{
		flex: 1;
	}
	.u_name{
		font-size: 14px;
	}
	.u_tallorage{
		margin-top: 4px;
		font-size: 12px;
	}
	.u_tallorage span{
		font-size: 12px;
	}
	.u_mark{
		margin-top: 4px;
		font-size: 12px;
	}
</style>