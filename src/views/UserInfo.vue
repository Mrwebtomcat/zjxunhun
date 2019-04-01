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
								<div class="myheaderlogo"></div>
								<div class="infoworks">
									<div class="name">小小鱼 
										<span class="card_type start"></span>
										<span class="card_type card"></span>
										<span class="card_type vip"></span>
									 <span class="userfollow">关注</span>
									</div>
									<div class="user_id mt10">ID：1761685425</div>
									<div class="workesage mt10">湛江 | 22岁 | 高中及以下 | 未婚 | 160cm | 3001-5000元</div>
									<div class="phoneto">
										<div class="ctrl prve"></div>
										<div class="photoWrapper">
											<ul>
												<li>
													<img preview="1" preview-text="描述文字1" src="https://photo.zastatic.com/images/photo/448999/1795993224/23076152760215462.png?scrop=1&crop=1&cpos=north&w=110&h=110" alt="">
												</li>
												<li>
													<img preview="1" preview-text="描述文字2"  src="https://photo.zastatic.com/images/photo/448999/1795993224/23076152760215462.png?scrop=1&crop=1&cpos=north&w=110&h=110" alt="">
												</li>
											</ul>
											
										</div>
										<div class="ctrl next"></div>
										<!-- 她没有更多照片了 -->
									</div>
								</div>
							</div>
							<div class="user_bottom">
								<div class="hellow">打招呼</div>
								<div class="messages">发信息</div>
								<div class="hongniang" @click="doLink('./hongniang')">红娘牵线</div>
							</div>
						</div>
						<div class="pepole_details">
							<div class="details_header">
								<span>内心独白</span>
							</div>
							<div class="planemsg">
								我个子不高，但是我身材凹凸有致，平时喜欢健身看书听音乐唱歌，我会说英语略懂法语，生活中朋友们对我的评价是可爱又迷人的小傻瓜，我希望能遇见一个共同追求幸福生活的他，一起去网吧偷耳机，追随他到天涯海角...
							</div>
							<div class="details_header">
								<span>个人兴趣</span>
							</div>
							<div class="planemsg">
								<el-tag>
									喜欢看书，喜欢大海，喜欢美食
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
								<el-tag>汉族</el-tag>
								<el-tag type="success">籍贯:四川泸州</el-tag>
								<el-tag type="info">体型:苗条</el-tag>
								<el-tag type="warning">不吸烟社交场合会喝酒</el-tag>
								<el-tag type="danger">租房未买车</el-tag>
								<el-tag type="danger">是否想要孩子:视情况而定</el-tag>
								<el-tag type="danger">何时结婚:时机成熟就结婚</el-tag>
								<el-tag type="danger">没有小孩</el-tag>
							</div>
							<div class="details_header">
								<span>择偶条件</span>
							</div>
							<div class="planemsg">
								<el-tag>汉族</el-tag>
								<el-tag type="success">籍贯:四川泸州</el-tag>
								<el-tag type="info">体型:苗条</el-tag>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6" style="margin-left: 0;">
					<div class="right_mysel">
						<div class="rightcontent1">
							<div class="jmqy_box">
							</div>
							<div :class="GMative==3?'product_item ative':'product_item'">
							 <div class="produc_month cf84">12个月</div> 
							 <div class="produc_day cf84">日均1.1元</div>
							 <div class="produc_money cf84"><span>热卖</span> ￥388</div> 
							 <div :class="GMative==3?'produc_check el-icon-circle-check ative':'produc_check el-icon-circle-check'" @click="checkVip(3)"></div>
							</div>
							<div :class="GMative==2?'product_item ative':'product_item'">
							 <div class="produc_month cf84">6个月</div> 
							 <div class="produc_day cf84">日均1.1元</div>
							 <div class="produc_money cf84"><span>热卖</span> ￥388</div> 
							 <div :class="GMative==2?'produc_check el-icon-circle-check ative':'produc_check el-icon-circle-check'" @click="checkVip(2)"></div>
							</div>
							<div :class="GMative==1?'product_item ative':'product_item'">
							 <div class="produc_month cf84">3个月</div> 
							 <div class="produc_day cf84">日均1.1元</div>
							 <div class="produc_money cf84"><span>热卖</span> ￥388</div> 
							 <div :class="GMative==1?'produc_check el-icon-circle-check ative':'produc_check el-icon-circle-check'" @click="checkVip(1)"></div>
							</div>
							<div style="text-align: center;">
								<el-button @click="doLink({name:'vip',query:{vipMoney:GMative}})">立即购买</el-button>
							</div>
						</div>
						
						<div class="rightcontent2">
							<div class="h2">猜你喜欢 <span  style="float: right;font-size: 20px;cursor: pointer;" class="el-icon-refresh"></span></div>
							<div class="ranguser">
								<div class="useritem">
									<div class="user_left">
										<img src="https://photo.zastatic.com/images/photo/426830/1707319317/23549166602228029.jpg?scrop=1&crop=1&cpos=north&w=100&h=100" alt="">
									</div>
									<div class="user_right">
										<div class="u_name">beenle</div>
										<div class="u_tallorage">
											<span>24岁</span><span>161cm</span>
										</div>
										<div class="u_mark">
											我正在寻找广东湛江霞山区,年龄在26-31岁...
										</div>
									</div>
								</div>
								<div class="useritem">
									<div class="user_left">
										<img src="https://photo.zastatic.com/images/photo/426830/1707319317/23549166602228029.jpg?scrop=1&crop=1&cpos=north&w=100&h=100" alt="">
									</div>
									<div class="user_right">
										<div class="u_name">beenle</div>
										<div class="u_tallorage">
											<span>24岁</span><span>161cm</span>
										</div>
										<div class="u_mark">
											我正在寻找广东湛江霞山区,年龄在26-31岁...
										</div>
									</div>
								</div>
								<div class="useritem">
									<div class="user_left">
										<img src="https://photo.zastatic.com/images/photo/426830/1707319317/23549166602228029.jpg?scrop=1&crop=1&cpos=north&w=100&h=100" alt="">
									</div>
									<div class="user_right">
										<div class="u_name">beenle</div>
										<div class="u_tallorage">
											<span>24岁</span><span>161cm</span>
										</div>
										<div class="u_mark">
											我正在寻找广东湛江霞山区,年龄在26-31岁...
										</div>
									</div>
								</div>
								<div class="useritem">
									<div class="user_left">
										<img src="https://photo.zastatic.com/images/photo/426830/1707319317/23549166602228029.jpg?scrop=1&crop=1&cpos=north&w=100&h=100" alt="">
									</div>
									<div class="user_right">
										<div class="u_name">beenle</div>
										<div class="u_tallorage">
											<span>24岁</span><span>161cm</span>
										</div>
										<div class="u_mark">
											我正在寻找广东湛江霞山区,年龄在26-31岁...
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</el-col>
			</el-row>
		</div>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				isShowVip:0,
				isShowMesages:1,
				GMative:1
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
		background: url(https://photo.zastatic.com/images/photo/448999/1795993224/2066493103885016.png?scrop=1&crop=1&cpos=north&w=200&h=200) no-repeat;
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