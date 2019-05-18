<!-- 门店-->
<template>
  <div class="module_shop">
		<Header :isHeader="0" :ative="0" :isShowIcon="0" ></Header>
		<div class="frameW">
			<div class="shopinfo">
				<div class="shop_head">
					金梦情缘湛江店
				</div>
				<div class="shop_body">
					<div class="imgleft">
						 <img class="imgbg" src="http://images.zastatic.com/zhenai3/zhenai2012/img/offline/tjxb2019.jpg" alt="">
					</div>
					<div class="metaright">
						<div class="metah1">金梦情缘湛江店简介</div>
						<div class="contxt">
							湛江金梦情缘VIP服务中心来到您身边，我们拥有幽雅的服务环境，私密的约会包间，贴心的红娘团队。
							让每个单身人士来到这里，如在家一般的放松自在。
							湛江本地服务的数据库，云集了海量商界精英、成功人士、企业高管、海归人士，并且拥有多位资深专业红娘提供情感分析、婚恋指导。
							贴心的量身定制婚恋服务，专业的客户第一服务理念，让您在海量优秀的高诚意会员中，找到你的情缘。
							相亲快，找情缘。助天下有情人终成眷属。
						</div>
						<el-button class="mybtns">申请VIP服务</el-button>
					</div>
				</div>
			</div>
			<div class="shopinfo maprq">
				<div class="shop_head">
					金梦情缘湛江店地图展示：
				</div>
				<div id="map">
					
				</div>
			</div>
		</div>
		<!-- <div class="user_info_banner">
			<img class="imgbg" src="../assets/img/b1.jpg" alt="">
		</div> -->
  </div>
</template>
<script>
	export default{
		data(){
			return{
				place:''
			}
		},
		methods:{
			renderMap:function(){
				var sContent ="湛江金梦情缘来到您身边，<br/>地址：湛江市霞山区人民西六路1号4楼";
				var map = new BMap.Map("map");
				var point = new BMap.Point(110.411952,21.202939);
				map.centerAndZoom(point, 20);
				var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
				map.openInfoWindow(infoWindow,point); //开启信息窗口
				try{
					document.getElementById("r-result").innerHTML = "信息窗口的内容是：<br />" + infoWindow.getContent();
				}catch(e){
					//TODO handle the exception
				}
				
			},
			
			
		},
		mounted(){
			this.renderMap()
		}
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.module_shop{
		width: 100%;
		overflow: hidden;
		padding-top: 85px;
	}
	.user_info_banner{
		position: relative;
		height:300px;
		/* background: linear-gradient(-134.2deg,#f11197,#e175a5); */
	}
	.user_info_banner img{
		width: 100%;
		height: 100%;
	}
	.frameW{
		width: 1200px;
		margin: auto;
	}
	.shopinfo{
		margin: 1em 0;
		width: 100%;
		height: 350px;
		border: 1px solid #ddd;
	}
	.maprq{
		height: auto;
	}
	.shop_head{
		height: 45px;
		line-height: 45px;
		font-size: 1.3em;
		border-bottom: 1px solid #ddd;
		padding-left: 20px;
	}
	.shop_body{
		min-height: 304px;
		display: flex;
		padding: 10px;
		box-sizing: border-box;
	}
	.metah1{
		font-size: 1.3em;
		margin-bottom: 1em;
	}
	.imgleft{
		flex: 0 0 36%;
		margin-right: 2%;
	}
	.imgleft img{
		width: 100%;
	}
	.contxt{
		text-indent: 2em;
		margin-bottom: 3em;
	}
	#map{
		height: 500px;
	}
	.metaright button{
		    background: linear-gradient(-134.2deg, rgb(241, 17, 151), rgb(225, 117, 165))
	}
</style>