<!-- 红娘 -->
<template>
  <div class="module_UserInfo">
		<Header :isHeader="1" :ative="4" :isShowIcon="0" ></Header>
		<div class="user_info_banner">
			 <el-carousel :interval="5000" arrow="false" height="400px">
				<el-carousel-item v-for="item in imgSrc" :key="item">
					<img class="imgbg" src="https://photo.zastatic.com/images/common-cms/it/20190315/1552621509274_383496_t.jpg" alt="">
					<!-- <div class="imgbg" :style="`background:url(${item}) no-repeat;`"></div> -->
				 <img :src="item" alt="">
				</el-carousel-item>
			  </el-carousel>
		</div>
		<div class="frameW">
			<div class="listItem">
				<h1>金梦情缘</h1>
				<ul class="jmbox">
					<li>
						<div class="itemPhoto"></div>
						<div class="dianpuMeta">
							<p>线下门店全直营</p>
							<p>不做加盟，打造一流品质服务</p>
						</div>
					</li>
					<li>
						<div class="itemPhoto"></div>
						<div class="dianpuMeta">
							<p>专业的本地红娘</p>
							<p>用心为你服务</p>
						</div>
					</li>
					<li>
						<div class="itemPhoto"></div>
						<div class="dianpuMeta">
							<p>本地牵线搭桥，婚庆服务</p>
							<p>价格合理，客户放心</p>
						</div>
					</li>
					<li>
						<div class="itemPhoto"></div>
						<div class="dianpuMeta">
							<p>线下纹眉，化妆专业服务和学习</p>
							<p>体验不一样的服务</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="listItem">
				<h1>精选优质会员</h1>
				<ul class="jmbox imgbox">
					<li v-for="(item,index) in vipuser" :key="index">
						<img :src="item['imgSrc']" alt="">
						<div data-v-2dfcee16="" class="dianpuMeta">
							<p data-v-2dfcee16="">VIP明星：吴女士</p>
							<p data-v-2dfcee16="">年龄：25岁 身高：173cm</p>
						</div>
						<div class="lihover">
							<div class="user_info zhye">
								<el-row class="selrow" :gutter="24" style="margin-left: 0;text-align: right;">
									<el-col :span="10" style="margin-left: 0;padding-right:0;">
										职业：
									</el-col>
									<el-col :span="12" style="margin-left: 0;padding-left:0;text-align: left;">
										美容护肤
									</el-col>
								</el-row>
							
							</div>
							<div class="user_info">
								<el-row class="selrow" :gutter="24" style="margin-left: 0;text-align: right;    line-height: 20px;">
									<el-col :span="10" style="margin-left: 0;padding-right:0;">
										收入：
									</el-col>
									<el-col :span="12" style="margin-left: 0;padding-left:0;text-align: left;">
										12000
									</el-col>
								</el-row>
							</div>
							 <div style="text-align: center;"><el-button type="primary" @click="concatHer($event,'id')">联系她</el-button></div>
						</div>
					</li>
				</ul>
				<div class="lxhn">
					<el-button @click="Lxhn">联系红娘</el-button>
				</div>
			</div>
			<div class="listItem">
				<h1>红娘风采</h1>
				<ul class="jmbox imgbox">
					<li v-for="(item,index) in hnImg" class="cur" :key="index">
						<img :src="item['vc_img']" alt="">
						<div class="hnteachear">
							<p>{{item.vc_name}}</p>
							<p>{{item.vc_content}}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="listItem mdlist">
				<h1>门店地址</h1>
				<ul class="jmbox mdbox">
					<li v-for="(item,index) in mdimg" class="cur" :key="index" @click="goToShop">
						<img :src="item['vc_shopimg']" alt="">
						<div class="mddizhi">
							<p>描述：{{item.vc_shopdesc}}</p>
							地址：{{item.vc_shopcity}}
						</div>
					</li>
				</ul>
			</div>
		</div>
  </div>
</template>
<script>
	import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
	import https from "../utils/Https.js"
	export default{
		data(){
			return{
				isShowVip:0,
				isShowMesages:1,
				imgSrc:['static/img/b1.jpg'],
				vipuser:[
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"},
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"},
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"},
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"},
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"},
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"},
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"},
					{imgSrc:"http://photo.zastatic.com/images/photo/466256/1865021085/3452256180022895.png?scrop=1&crop=1&w=300&h=300&cpos=north"}
				],
				hnImg:[
					{imgSrc:"http://d06.res.meilishuo.net/picdetail/a/1c/26/cb359acd20b61f2f0e4788fab6de_750_1125_2_1.c7.jpeg"},
					{imgSrc:"http://d06.res.meilishuo.net/picdetail/a/1c/26/cb359acd20b61f2f0e4788fab6de_750_1125_2_1.c7.jpeg"},
					{imgSrc:"http://d06.res.meilishuo.net/picdetail/a/1c/26/cb359acd20b61f2f0e4788fab6de_750_1125_2_1.c7.jpeg"},
					{imgSrc:"http://d06.res.meilishuo.net/picdetail/a/1c/26/cb359acd20b61f2f0e4788fab6de_750_1125_2_1.c7.jpeg"},
				],
				mdimg:[
					{imgSrc:"http://www.rzlh-office.cn/uploads/image/20140702/1404268836.jpg"},
					{imgSrc:"http://www.rzlh-office.cn/uploads/image/20140702/1404268836.jpg"},
					{imgSrc:"http://www.rzlh-office.cn/uploads/image/20140702/1404268836.jpg"},
					{imgSrc:"http://www.rzlh-office.cn/uploads/image/20140702/1404268836.jpg"}
				]
				
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
			concatHer:function(ev,id){
				this.$alert('想认识TA吗？让我们为您牵手幸福吧', {
				  confirmButtonText: '确定',
				  center:true,
				  callback: action => {
// 					this.$message({
// 					  type: 'info',
// 					  message: `action: ${ action }`
// 					});
				  }
				});
			},
			//获取红娘列表
			getHNInfo:function(){
				connetAction.ajaxPost(https['getHNinfo'], "")
					.then(rd => {
						this.hnImg = rd.data;
							
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			getTuiJian:function(){
				connetAction.ajaxPost(https['getHNinfo'], "")
					.then(rd => {
						this.hnImg = rd.data;
							
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			getShopInfo:function(){
				connetAction.ajaxPost(https['getShopInfo'], "")
					.then(rd => {
						this.mdimg = rd.data;
							
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			Lxhn:function(ev,id){
				this.$alert('是否联系红娘申请VIP服务', {
				  confirmButtonText: '确定',
				  center:true,
				  width:200,
				  callback: action => {
// 					this.$message({
// 					  type: 'info',
// 					  message: `action: ${ action }`
// 					});
				  }
				});
			},
			goToShop:function(){
				this.$router.push({name:'shop',meta:{title: "金梦情缘湛江店"},query:{lat:'',lng:''}})
			}
		},
		created(){
			this.getHNInfo();
			this.getShopInfo();
		}
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.user_info_banner{
		position: relative;
		height:402px;
		/* background: linear-gradient(-134.2deg,#f11197,#e175a5); */
	}
	.user_info_banner .el-carousel__container,..el-carousel{
		height: 100% !important;
	}
	.imgbg{
		width: 100%;
		height: 100%;
	}
	.module_UserInfo{
		width: 100%;
		padding-top: 80px;
		background: #f3f3f3;
	}
	.frameW{
		width: 1200px;
		margin: auto;
	}
	.jmbox{
		display: flex;
		justify-content: space-between;
	}
	.frameW h1{
		text-align: center;
		padding: 30px 0;
	}
	.jmbox li{
		flex: 0 0 20%;
		margin-right: 5%;
		background: #ddd;
		margin-bottom: 2em;
		padding-bottom: 1em;
		background: #fff;
		box-sizing: border-box;
	}
	.jmbox li:last-child,.mdbox li:last-child,.jmbox li:nth-child(4n){
		margin-right: 0;
	}
	.imgbox{
		width: 100%;
		flex-wrap: wrap;
	}
	.imgbox li{
		flex: 0 0 20%;
		position: relative;
		overflow: hidden;
	}
	.mdbox{
		justify-content: flex-start;
	}
	.mdbox li{
		flex: 0 0 24%;
		margin-right: 0%;
		padding-bottom: 0;
		margin-bottom: 0;
		position: relative;
		margin-right: 3%;
	}
	.jmbox img,.mdbox img{
		width:100% ;
		display: block;
	}
	.itemPhoto{
		width: 164px;
		height: 164px;
		background:url(../assets/img/hlicon.png) no-repeat;
		background-size: contain;
	}
	.dianpuMeta{
		text-align: center;
	}
	.itemPhoto{
		margin:10px auto;
	}
	.lihover{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.3);
		left: 0;
		top: 100%;
		transition: top 0.5s ease-out;
	}
	.imgbox li:hover .lihover{
		top: 0;
		transition: top 0.5s ease-out;
	}
	.lihover div{
		margin-top: 5%;
		color: #fff;
	}
	.lihover .zhye{
		margin-top: 40%;
	}
	.lxhn{
		width: 200px;
		margin:10px auto 0px;
		padding-bottom: 1em;
	}
	.lxhn button{
		width: 100%;
		border: 0;
		color: #f1007b;
	}
	.lxhn button:hover{
		background: #f1007b;
		color: #fff;
		border: 0;
	}
	.cur{
		cursor: pointer;
	}
	.hnteachear{
		padding: 15px;
	}
	.hnteachear p:last-child{
		width: 100%;
		white-space:pre-wrap;
		margin-top:10px;
	}
	.mddizhi{
		width: 100%;
		position: absolute;
		text-align: center;
		color: #fff;
		bottom: 0;
		left: 0;
		padding: 5px 0;
		background: rgba(0,0,0,.5);
	}
	.mdlist{
		padding-bottom: 2em;
	}
</style>