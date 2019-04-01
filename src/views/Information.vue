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
							<li :class="isShowMesages==1?'ative':''" @click="slectLi(1)">消息列表 <span class="tognum">4</span></li>
							<li :class="isShowMesages==2?'ative':''" @click="slectLi(2)">红娘来信</li>
						</ul>
						<div v-if="isShowMesages==1" class="slecmainshow1">
							<ul class="message_ul">
								<li>
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
										<div class="wdxinxi">3封未读</div> 
										<el-button class="showinfo" type="primary">查看</el-button>	
									</div>
								</li>
								<li>
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
							</ul>
						</div>
						<div  v-if="isShowMesages==2" class="slecmainshow2">
							<div class="hn_img_box">
								<img src="https://i.zhenai.com/pc/portal/message/index/images/no-letter.764585b.png" alt="">
							</div>
							<div class="hn_infotext">服务流程五步走，六重保障觅珍爱</div>
							<div class="hn_infotext">相亲无难事，珍爱有红娘！</div>
							<div class="ljhn"><el-button class="showinfo" type="primary" @click="doLink('./hongniang')">了解红娘服务</el-button>	</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6" style="margin-left: 0;">
					<div class="right_mysel">
						<div class="headeicon">
							<img src="https://photo.zastatic.com/images/cms/banner/20181121/8311191311554389.png?scrop=1&crop=1&cpos=north&w=80&h=80" alt="">
						</div>
						<div class="user_name">
							按时大撒大撒
						</div>
						<div class="user_name iconbox">
							<span class="start"></span>
							<span class="vip"></span>
							<span class="card"></span>
						</div>
						<ul class="myulitem">
							<li>
								<div class="liclickitem" @click="doLink('./follow')">
									<div class="liname">关注我的</div>
									<div class="lincount">1</div>
								</div>
							</li>
							<li>
								<div class="liclickitem">
									<div class="liname" @click="doLink('./Information')">消息</div>
									<div class="lincount">1</div>
								</div>
								
							</li>
							<li>
								<div class="liclickitem">
									<div class="liname"  @click="doLink('./browse')">浏览过我的</div>
									<div class="lincount">1</div>
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
	export default{
		data(){
			return{
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
			}
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