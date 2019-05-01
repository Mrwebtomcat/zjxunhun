<template>
	<div class="HeadercomBar">
		 <div :class="noBackground==1?'TOP_header trans':'TOP_header'" style="">
			<div class="header_content">
				<img src="../assets/img/logo.png" alt="">
				<div class="home_nav" v-if="isHeader==1">
					<li :class="ative==1?'ative':''" @click="goPage('./home')">我的情缘</li>
					<li :class="ative==2?'ative':''" @click="goPage('./search')">缘分搜索</li>
					<li :class="ative==3?'ative':''" @click="goPage('./vip')">我的会员</li>
					<li :class="ative==4?'ative':''" @click="goPage('./hongniang')">实体门店</li>
				</div>
				<div v-if="isShowIcon==1" class="userIcon"  @click.stop="showNav">
					<img src="../assets/img/headerimg.png" alt="">
					<div v-show="isNav==1" class="showBox" @mouseleave="isNav=0">
						<li v-for="(item,i) in MenuItem" :key="i" @click.stop="itemFn(i)">
							{{item}}
						</li>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			isNav:0,
			MenuItem:['编辑资料','诚信认证','个人相册','系统设置','退出']
		}
	},
  props: {
    ative: {
		type:Number,
		default:1
	}, 
	isShowIcon: {
		type:Number,
		default:1
	},
	isHeader:{
		type:[Number,String],
		default:0
	},
	noBackground:{
		type:[Number,String],
		default:0
	}
	
  },
  methods: {
  	showNav() {
  		this.isNav = 1;
  	},
	goPage(url) {
  		this.$router.push(url)
  	},
	itemFn(i){
		this.isNav = 0;
		if(i==0){
			this.goPage('/editInfo')
		}else if(i==1){
			this.goPage('/idCard')
		}else if(i==2){
			this.goPage({path:'/editInfo',query:{page:2}});
			location.reload()
		}else if(i==3){
			this.goPage({path:'/editInfo',query:{page:6}})
			location.reload()
		}else if(i==4){
			localStorage.removeItem('openid');
			window.location.reload();
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.TOP_header{
		width: 100%;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		padding: 20px 0;
		height: 80px;
		background: -webkit-linear-gradient(224.2deg,#f11197,#e175a5);
		background: -moz-linear-gradient(224.2deg,#f11197,#e175a5);
		background: linear-gradient(-134.2deg,#f11197,#e175a5);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffb06cef",endColorstr="#ff8070f1",GradientType=1);
		box-shadow: 0 2px 11px 0 hsla(0,0%,64%,.3);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}
	.trans{
		background: transparent !important;
	}
	.header_content{
		position: relative;
		width: 1200px;
		height: 100%;
		margin: auto;
		text-align: left;
		display: flex;
		align-items: center;
	}
	.userIcon{
		z-index: 99;
		position: absolute;
		right: 5%;
		top: 1px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		/* background: #fff; */
		cursor: pointer;
	}
	.userIcon img{
		width: 100% !important;
		height: 100%;
		border-radius: 50%;
	}
	.showBox{
		position: absolute;
		/* left: -70px; */
		left: -42px;
		margin: auto;
		top: 43px;
		width: 141px;
		height: 210px;
		background: #fff;
		border-radius: 10px;
	}
	.showBox li{
		list-style: none;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
		padding-left: 20px;
	}
	.showBox li:last-child{
		border-bottom: 0;
	}
	.header_content img{
		width: 133px;
	}
	.home_nav{
		display: flex;
		height: 60px;
	}
	.home_nav li{
		position: relative;
		height: 100%;
		line-height: 60px;
		list-style: none;
		font-size: 1em;
		margin:0 3em;
		cursor: pointer;
		color: #fff;
	}
	.home_nav li.ative:after{
		position: absolute;
		left: 0;
		right: 0;
		display: block;
		content: "";
		width: 60%;
		height: 2px;
		bottom: 5px;
		background: #fff;
		margin: auto;
	}
	.tipsss ul{
		list-style: none;
	}
	.tipsss li{
		list-style: none;
		width: 200px;
		height: 30px;
	}
</style>
