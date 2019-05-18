<!-- vip 充值 -->
<template>
	<div class="vipModule">
		<Header :isHeader="1" :ative="3"></Header>
		<div class="vipConten flex">
			<div class="vipclfet">
				<div class="h_th1">会员充值</div>
				<div class="bigBoxvip" :style="userData?(userData['n_sex']!=1?'padding-left:0;':''):''">
					<div class="recharG" >
						<li v-for="(items,index) in vipList" :key="index" class="threemonth slider">
							<div class="li_box">
								<div class="vip_h1">购买会员{{items.n_time}}个月</div>
								<div class="vip_h2">{{items.vc_daymoney}}元/天</div>
								<div class="vip_content">会员价{{items['n_money']}}元</div>
								<div class="vip_ktbtn">
									<el-button type="primary" plain @click="ktvip(index,items.id)">立即开通</el-button>
								</div>
							</div>
						</li>
						<!-- <li class="threemonth slider">
							<div class="li_box">
								<div class="vip_h1">购买会员6个月</div>
								<div class="vip_h2">1.06元/天</div>
								<div class="vip_content">会员价368元</div>
								<div class="vip_ktbtn">
									<el-button type="primary" plain @click="ktvip(2)">立即开通</el-button>
								</div>
							</div>
						</li>
						<li class="threemonth slider">
							<div class="li_box">
								<div class="vip_h1">购买会员12个月</div>
								<div class="vip_h2">1.06元/天</div>
								<div class="vip_content">会员价388元</div>
								<div class="vip_ktbtn">
									<el-button type="primary" plain @click="ktvip(3)">立即开通</el-button>
								</div>
							</div>
						</li> -->
					</div>
					<!-- <div v-else class="recharG" >
						<img style="width:100%;height:250px;" src="../assets/img/womanvip.png" alt="">
						{{vipList[2]?vipList[2]['n_money']:''}}
					</div> -->
				</div>
				<div class="vipqaunyi">
					<div class="qyh1">
						<div class="borline left"></div>
						<div class="qyh1txt">会员权益</div>
						<div class="borline right"></div>
					</div>
					<div class="jiesuo">
						<li>
							<div class="img youxiang"></div>
							<span class="txt">解锁你的收件箱</span>
						</li>
						<li>
							<div class="img xinxi"></div> <span class="txt">解锁消息发送</span>
						</li>
						<li>
							<div class="img xunzhang"></div><span class="txt">尊贵会员勋章</span>
						</li>
						<li>
							<div class="img shaixuan"></div><span class="txt">更多精准筛选条件</span>
						</li>
						<li>
							<div class="img zhaopian"></div><span class="txt">无限制上传照片</span>
						</li>
					</div>
					<div class="nfeibtn">
						<el-button v-if="userData['n_sex']==1" @click="ktvip(viplen,vipList[viplen].id)">立即开通 <span>{{vipList[viplen]?vipList[viplen]['n_money']:''}}元/{{vipList[viplen]?vipList[viplen]['n_time']:''}}个月</span></el-button>
						<el-button v-else @click="ktvip(viplen,vipList[viplen].id)">立即开通 <span>{{vipList[viplen]?vipList[viplen]['n_money']:''}}元{{vipList[viplen]?vipList[viplen]['n_time']:''}}个月</span></el-button>
					</div>
					<div class="des" >
						<p class="title">服务说明</p>
						<p>1、购买的服务仅限本账号使用，不能转移到其他账号；</p>
						<p>2、在使用本服务期间，若从事不恰当或不合法的行为， 金梦情缘保留进行调查并立即终止服务的权利；</p>
						<p>3、对于本服务和以上条款，在法律允许范围内 金梦情缘拥有最终解释权。</p>
						<p class="title safe" >安全征婚提示</p>
						<p>在以下情况下请不要轻易透露你的联系方式（如电话、手机号码、邮箱、即时通信、通信地址等） </p>
						<p>1、在未充分了解对方前，请不要轻易透露你的联系方式。</p>
						<p>2、当对方无相片或资料不完整时，请不要轻易透露你的联系方式。</p>
						<p>3、相亲过程中，如遇对方提及借款、投资或索要等行为，请务必提高警惕，谨防受骗，并及时举报。</p>
					</div>
				</div>
			</div>
			<div class="shadows" v-show="isShowVip==1"></div>
			<div class="showPay" v-show="isShowVip==1">
				<div class="showPhead">会员充值 <div class="closePay" @click="closeVip"><span>X</span></div>
				</div>
				<div class="showPcontext">
					<div class="hellowVip">尊敬的<span class="fontbold" style="color:blue;"> {{userData['vc_nickname']}}</span>用户,你好</div>
					<div class="nowpay">立即充值：<span class="fontbold">会员{{vipMoneth}}个月</span>
						<div class="Paymoney">应支付：<span class="moeyred">{{vipMoney}}元</span></div>
					</div>
					<div class="zffs">支付方式：</div>
					<ul class="paytype">
						<!-- <li @click="palypost(2)" :class="payType==2?'ative':''">微信</li> -->
						<li @click="palypost(1)" class="ative">微信</li>
						<li @click="palypost(2)" :class="payType!=1?'ative':''">支付宝</li>
					</ul>
					<div class="payCode">
						<div class="left_qrcode">
							<!-- 支付宝的扫码 -->
							<!-- <img v-show="payType!=1" src="https://mobilecodec.alipay.com/show.htm?code=gdxox0xozdovjgkxa2&picSize=S" alt=""> -->
							<div id="qrcode"  ref="qrcode"></div>
						</div>
						<div class="right_cordeMeta" v-if="payType!=1">
							<div>使用支付宝扫码支付</div>
							<div>
								<ul>
									暂未开通
									<li>可支持：</li>
									<li>1:支付宝余额支付</li>
									<li>2.支持二十多家主流银行的储蓄卡（即借记卡）和信用卡，无需开通网银，没有支付宝也可支付。</li>
								</ul>
							</div>
						</div>
						<div v-show="payType==1" class="right_cordeMeta">
							<div>请使用微信扫一扫</div>
							<div>扫描图中二维码支付</div>
						</div>
					</div>
					<!-- 
						支付宝启用再打开
					<div style="margin-top: 20px;text-align: center;">
						<el-button v-if="payType==1" type="primary" plain @click="goPay" style="width:200px;">前往支付</el-button>
					</div> -->
				</div>
			</div>
			<div class="vipcright">
					<div class="rightcontent2">
						<div class="h2">开通金梦情缘会员，联系TA们吧 <span  style="float: right;font-size: 20px;cursor: pointer;" class="el-icon-refresh"></span></div>
						<div class="ranguser">
							<div v-if="tjUser['tjList'].length>0"  v-for="(items,index) in tjUser['tjList']" :key="index" class="useritem" @click="goChat">
								<div class="user_left">
									<img :src="items['vc_img']&&items['vc_img']!=''?items['vc_img']:'https://photo.zastatic.com/images/photo/426830/1707319317/23549166602228029.jpg?scrop=1&crop=1&cpos=north&w=100&h=100'" alt="">
								</div>
								<div class="user_right">
									<div class="u_name">{{items['vc_nickname']}}</div>
									<div class="u_tallorage">
										<span>{{items['n_age']}}岁</span><span>161cm</span>
									</div>
									<div class="u_mark">
										我正在{{diliArray[Number(items['vc_city'])-2]?diliArray[Number(items['vc_city'])-2].name:''}}，寻找年龄在{{items['n_age']}}岁-{{items['n_age']+5}}岁的...
									</div>
								</div>
							</div>
							<div v-show="tjUser['tjList']?tjUser['tjList'].length==0:false" style="text-align: center;padding-top: 100px;">
								暂无发现更多推荐会员消息
							</div>
							
						</div>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
	import https from "../utils/Https.js"
	import QRCode from 'qrcodejs2'
	// console.log(QRCode,333)
	export default {
		data() {
			return {
				isShowVip: 0,
				vipMoney: 360,
				vipMoneth: 3,
				payType: 2,    //支付宝和微信切换
				vipList:[],
				userData:[],
				tjUser:[],
				diliArray:"",
				isNew:0,
				vipId:"",
				processCode:null,
				orderStatus:1,
				timer:null,
				viplen:0
			}
		},
		methods: {
			// 生成二维码
			qrcode:function(data){
				this.processCode = new QRCode(this.$refs.qrcode,{
					width:100,
					height:100//高度
				})
			},
			//更新二维码
			updateCode:function(data,type){
				this.processCode.makeCode(data['code_url']);
				this.getOrder(data.vc_order_sn,type);
			},
			ktvip: function(i,id) {
				this.isShowVip = 1;
				// 支付类型
				this.payType = 1;
				// 金额
				this.vipMoney = this.vipList[i].n_money;
				// 月份
				this.vipMoneth = this.vipList[i].n_time;
				// vip id
				this.vipId = id;
				this.setOrder(this.vipId);
				
				// this.orderStatus = 0;
				
			},
			closeVip: function() {
				// 关闭弹窗
				this.isShowVip = 0;
				this.orderStatus = 1;
				if(this.timer){
					clearInterval(this.timer);
				}
			},
			toastip:function(str,type){
				this.$message({
				  message:str ,
				  type: type||'warning'
				});
			},
			palypost: function(i) {
				this.payType = i;
				if(i!=1){
					if(this.timer){
						clearInterval(this.timer)
					}
					this.alipaySetOrder(this.vipId)
				}else{
					if(this.timer){
						clearInterval(this.timer)
					}
					this.setOrder(this.vipId);
				}
// 				
// 				if(i==2){
// 					if(this.orderStatus==1){
// 						this.setOrder(this.vipId)
// 					}
					
// 					this.$nextTick(()=>{
// 						setTimeout(()=> {
// 							this.qrcode()
// 						})
// 						
// 					})
				// }
			},
			goPay: function() {
				message(this,{
					title:'支付成功',
					contxt:"",
					center:true
				})
				this.isShowVip = 0;
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
			//用户信息
			getInfos:function(){
				let data = {id:localStorage.openid};
				if(!data.id){
					return false;
				}
				
				connetAction.ajaxPost(https['getInfo'],data)
				.then((res)=>{
					if(res.status==1){
							 this.userData = res.data;
							 this.huiyuanInfo();
							// 初始化基本数据
							
					}else{
						// this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			//用户信息
			getuerList:function(){
				let data = {
					oc_usercode:localStorage.openid
				}
				connetAction.ajaxPost(https['index'], data)
					.then(rd => {
						if(rd.status==1){
							this.tjUser = rd.data;
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			setOrder:function(id){
				let data = {
					id:id,
					oc_usercode:localStorage.openid
				}
				connetAction.ajaxPost(https['setOrder'], data)
					.then(rd => {
						if(rd.status==1){
							this.updateCode(rd.data);
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			alipaySetOrder:function(id){
				let data = {
					id:id,
					oc_usercode:localStorage.openid
				}
				connetAction.ajaxPost(https['setaliOrder'], data)
					.then(rd => {
						if(rd.status==1){
							this.updateCode(rd.data,1);
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			getOrder:function(id,type){
				let data = {
					vc_order_sn:id
				}
				
				var that = this;
				var targe = false;
				let url = https['getOrderStatus'];
				// 支付宝查询支付状态
				if(type){
					url = https['getAliPayStatus'];
				}
				this.timer = setInterval(function(){
					connetAction.ajaxPost(url, {vc_order_sn:id})
						.then(rd => {
							// console.log(rd.data,66666)
							if(rd.data=="支付成功" || rd.data=="付款成功"){
								if(rd.data=="付款成功"){
									that.toastip("支付宝付款成功，你已升级为会员赶紧体验下吧",'success');
								}else{
									that.toastip("微信支付成功，你已升级为会员赶紧体验下吧",'success');
								}
								
								clearInterval(that.timer);
								setTimeout(function(){
									that.$router.push('./home');
								},3000)
							}
						})
						.catch(res => {
							// console.log(res,"res")
						})
					
				},3000)
				
				
			},
			huiyuanInfo(){
				connetAction.ajaxPost(https['huiyuan'], {id:localStorage.openid})
				.then(rd => {
					let mydata = rd.data.filter((item,index,arr)=>(item.n_type==1));
					this.vipList =mydata;
					
					if(rd.data.length<=1){
						this.viplen = 0
					}else{
						this.viplen = rd.data.length -2;
					}
					this.getFuWu(mydata);
					
				})
				.catch(res => {
					this.getFuWu()
					// console.log(res,"res")
				})
			},
			//获取特殊服务和vip服务合并
			getFuWu:function(dataarr){
				let that = this;
				connetAction.ajaxPost(https['nvIndex'], {type:3})
				.then(rd => {
					
					let datas =  rd.data.filter((item,index,arr)=>item.n_sex==that.userData['n_sex']);
					this.vipList=this.vipList.concat(...datas);
					if(this.$route.query.hasOwnProperty('vipMoney')){
						for(var i=0;i<this.vipList.length;i++){
							if(rd.data[i]['id']==this.$route.query.vipMoney){
								this.ktvip(i,this.$route.query.vipMoney);
							}
						}
					}
					
				})
				.catch(res => {
					// console.log(res,"res")
				})
			}
		},
		created() {
			this.getuerList();
			this.getInfos();
			this.diliArray = JSON.parse(localStorage.posPAC);
		},
		mounted() {
			// this.huiyuanInfo();
			
			// 初始化二维码
			this.qrcode();
			
		}
	}
</script>
<style scoped>
	ul,
	li {
		list-style: none;
	}

	.vipModule {
		width: 100%;
		min-height: 100%;
		 background: url(../assets/img/vipbg.jpg) repeat-x;
		 
		/* background: linear-gradient(-134.2deg,#f11197,#e175a5); */
		/* background: #fff; */
		background-size: cover;
		padding-top: 80px;
	}

	.vipConten {
		width: 1200px;
		margin: auto;
		padding-top: 2%;
		border-radius:10px ;
	}

	.shadows {
		position: fixed;
		z-index: 10;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		margin: auto;
		background: rgba(0, 0, 0, .5);
	}

	.bigBoxvip {
		overflow: hidden;
		/* box-shadow: 0 0 5px rgba(0,0,0,.5);
		background: #fff; */
	}

	.recharG {
		width: 100%;
		height: 200px;
		display: flex;
		justify-content: center;
		justify-content: flex-start;
		padding-left: 20px;
		background: #f3f3f3;
		margin-top: 100px;
	}

	.recharG li {
		width: 30%;
		height: 300px;
		margin-right: 10px;
		list-style: none;
	}

	.h_th1 {
		font-size: 30px;
		padding: 10px;
		color: red;
	}

	.threemonth {
		width: 100%;
		background: url(../assets/img/vipitem1.png) no-repeat;
	}

	.sixmonth {
		background: url(../assets/img/vipitem2.png) no-repeat;
	}

	.oneyear {
		background: url(../assets/img/vipitem3.png) no-repeat;

	}

	.threemonth,
	.sixmonth,
	.oneyear {
		background-size: cover;
	}

	.slider {
		transform: translateY(-70px);
		transition: 0.5s ease-out;
		cursor: pointer;
		box-shadow: inset 0 0 50px rgba(247, 17, 81, 0.5);
	}

	.recharG .slider:hover {
		transform: translateY(-100px);
		transition: 0.1s ease-out;
	}

	.li_box {
		width: 80%;
		height: 80%;
		transform: translateY(12%);
		background: rgba(255, 255, 255, .8);
		margin: auto;
	}

	.li_box .vip_h1 {
		font-size: 23px;
		text-align: center;
		padding: 20px 0 10px;
		color: crimson;
	}

	.li_box {
		text-align: center;
	}

	.vip_h2 {
		padding: 10px;
		font-size: 18px;
	}

	.vip_content {
		padding-top: 5%;
		font-size: 20px;
		color: red;
	}

	.vip_ktbtn {
		margin-top: 28%;
	}

	.showPay {
		position: fixed;
		z-index: 99;
		width: 40%;
		min-height: 60%;
		background: #fff;
		border-radius: 10px;
		left: 0;
		right: 0;
		top: 20%;
		margin: auto;
	}

	.showPhead {
		position: relative;
		height: 3em;
		line-height: 3em;
		text-align: center;
		background: #f3f3f3;
		border-radius: 10px 10px 0px 0px;
		color: #999;
	}

	.closePay {
		position: absolute;
		right: 1em;
		top: .5em;
		width: 2em;
		height: 2em;
		line-height: 2em;
		cursor: pointer;
		font-size: 16px;
	}

	.fontbold,
	.moeyred {
		font-weight: bold;
	}

	.moeyred {
		font-size: 24px;
		color: red;
	}

	.closePay span {
		font-size: 18px;
	}

	.showPcontext {
		padding: 5px 20px;
	}

	.paytype {
		display: flex;
		margin-top: 2%;
	}

	.paytype li {
		text-align: center;
		width: 100px;
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		margin-right: 10px;
		cursor: pointer;
	}

	.paytype li.ative {
		border: 2px solid #4887e7;
	}

	.payCode {
		display: flex;
		margin-top: 5%;
	}

	.zffs {
		margin-top: 1%;
	}
	#qrcode{
		transform: translateY(-20px);
	}
	.left_qrcode {
		width: 100px;
		margin-right: 5%;
	}

	.left_qrcode img {
		width: 100px;
	}

	.nowpay,
	.Paymoney {
		display: flex;
		height: 40px;
		align-items: center;
	}

	.Paymoney {
		margin-left: 15%;
	}

	.hellowVip {
		margin-top: 3%;
	}

	.flex {
		display: flex;
	}

	.vipclfet {
		flex: 0 0 75%;
	}
	.vipcright{
		flex: 0 0 25%;
		min-height: 400px;
		margin-left: 4%;
		margin-top:150px;
	}

	.vipqaunyi {
		width: 100%;
		background: #fff;
		padding-bottom: 1px;
		margin-bottom: 30px;
	}

	.qyh1 {
		padding: 20px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.borline {
		position: absolute;
		width: 38%;
		height: 2px;
		background: #ff8400;
		top: calc(50% - 1px);
	}

	.borline.left {
		left: 3%;
	}

	.borline.right {
		right: 3%;
	}

	.qyh1txt {
		position: relative;
		font-size: 18px;
		font-weight: bold;
		color: red;
	}

	.qyh1txt:after,
	.qyh1txt:before {
		position: absolute;
		content: "";
		top: calc(50% - 5px);
		display: block;
		width: 10px;
		height: 10px;
		background: red;
		transform: rotate(45deg);
	}

	.qyh1txt:before {
		left: -30px;
	}

	.qyh1txt:after {
		right: -30px;
	}

	.jiesuo {
		display: flex;
	}

	.jiesuo li {
		flex: 1;
		margin: 0 10px;
		text-align: center;
	}

	.jiesuo .img {
		width: 79px;
		height: 79px;
		margin: auto;
		margin-bottom: 15px;
	}

	.jiesuo .txt {
		display: block;
		padding-bottom: 10px;
		font-weight: 700;
		color: #666;
		font-size: 12px;
	}

	.youxiang {
		background: url(../assets/img/vip/vip1.jpg) no-repeat;
		background-size: contain;
	}

	.xinxi {
		background: url(../assets/img/vip/vip2.jpg) no-repeat;
		background-size: contain;
	}

	.xunzhang {
		background: url(../assets/img/vip/vip4.jpg) no-repeat;
		background-size: contain;
	}

	.shaixuan {
		background: url(../assets/img/vip/vip5.jpg) no-repeat;
		background-size: contain;
	}

	.zhaopian {
		background: url(../assets/img/vip/vip6.jpg) no-repeat;
		background-size: contain;
	}

	.nfeibtn {
		height: 120px;
		text-align: center;
		line-height: 120px;
	}
	.des{
		 padding: 15px 22px;
		margin: 41px 18px 30px;
		border-radius: 4px;
		border: 1px solid #ebebeb;
		color: #747478;
		font-size: 14px;
		line-height: 20px;
		background: #fff;
	}
	.des .title{
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 8px;
	}
	.safe{
		margin-top: 23px;
	}
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
		cursor: pointer;
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
