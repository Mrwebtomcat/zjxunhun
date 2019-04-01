<!-- 缘分搜索 -->
<template>
  <div class="xunhun">
    <Header :isHeader="1" :ative="2"></Header>
		<div class="xh_main">
			 <div class="search_slect" >
				<div class="h1">
					情缘匹配
					<div class="searchid_input">
						<el-input
							size="small"
							placeholder="请输ID精准搜索"
							v-model="idinpyt"
							clearable>
							 <i slot="suffix" class='el-icon-search idIcon' @click='searchidFn'></i>
						</el-input>
					</div>
				</div>
				<div class="li">
					<span class="fontw">会员专区:</span>
					<el-tag>高学历</el-tag>
					<el-tag type="success">90后</el-tag>
					<el-tag type="info">同生缘</el-tag>
				</div>
				<div class="li">
					<span class="fontw">基础条件:</span>
					<div class="w5  ml3" >
						 <el-select v-model="form.sex" size="small" placeholder="女">
							  <el-option label="男" value="1"></el-option>
							  <el-option label="女" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:8%;">
						 <el-select v-model="form.age" size="small" placeholder="年龄">
							  <el-option label="18" value="1"></el-option>
							  <el-option label="19" value="2"></el-option>
						</el-select>
					</div>
					<span class="ml1">至</span>
					<div class="ml1" style="width:8%;">
						 <el-select v-model="form.maxage" size="small" placeholder="年龄">
							  <el-option label="18" value="1"></el-option>
							  <el-option label="19" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:8%;">
						 <el-select v-model="form.province" size="small" placeholder="省">
							  <el-option label="广东" value="1"></el-option>
							  <el-option label="湖南" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:8%;">
						 <el-select v-model="form.area" size="small" placeholder="市">
							  <el-option label="广州" value="1"></el-option>
							  <el-option label="湛江" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:8%;">
						 <el-select v-model="form.city" size="small" placeholder="区">
							  <el-option label="赤坎区" value="1"></el-option>
							  <el-option label="霞山区" value="2"></el-option>
						</el-select>
					</div>
					
					<div  class="ml1" style="width:8%;">
						 <el-select v-model="form.tall" size="small" placeholder="身高">
							  <el-option label="170" value="1"></el-option>
							  <el-option label="180" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1">至</div>
					<div class="ml1" style="width:8%;">
						 <el-select v-model="form.maxtall" size="small" placeholder="高范围">
							  <el-option label="18" value="1"></el-option>
							  <el-option label="19" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:10%;">
						 <el-select v-model="form.workm" size="small" placeholder="薪资水平">
							  <el-option label="3000-5000" value="1"></el-option>
							  <el-option label="5000-6000" value="2"></el-option>
						</el-select>
					</div>
				</div>
				<div class="li">
					<span class="fontw">高级搜索:</span>
					<div class="ml3" style="width:8%;">
						 <el-select v-model="form.sex" size="small" placeholder="职业">
							  <el-option label="医生" value="1"></el-option>
							  <el-option label="科研人员" value="2"></el-option>
							  <el-option label="外贸" value="2"></el-option>
						</el-select>
					</div>
					<!-- <div class="ml1" style="width:8%;">
						 <el-select v-model="form.worke" size="small" placeholder="年龄">
							  <el-option label="18" value="1"></el-option>
							  <el-option label="19" value="2"></el-option>
						</el-select>
					</div> -->
					<div class="ml1" style="width:10%;">
						 <el-select v-model="form.hours" size="small" placeholder="住房情况">
							  <el-option label="租房" value="1"></el-option>
							  <el-option label="有房" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:9%;">
						 <el-select v-model="form.cart" size="small" placeholder="买车情况">
							  <el-option label="是" value="1"></el-option>
							  <el-option label="否" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:9%;">
						 <el-select v-model="form.marry" size="small" placeholder="婚姻情况">
							  <el-option label="未婚" value="1"></el-option>
							  <el-option label="丧偶" value="2"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:10%;">
						 <el-select v-model="form.childrend" size="small" placeholder="有没有孩子">
							  <el-option label="有" value="1"></el-option>
							  <el-option label="没有" value="2"></el-option>
						</el-select>
					</div>
					
					<div  class="ml1" style="width:8%;">
						 <el-select v-model="form.consterlation" size="small" placeholder="星座">
							  <el-option label="白羊座" value="1"></el-option>
							  <el-option label="魔蝎座" value="2"></el-option>
						</el-select>
					</div>
					
				</div>
				<div class="searchbtn"><el-button>高级搜索</el-button></div>
			 </div>
			 <div class="changeseach">
				  <ul class="searchul">
					  <li class="buy-star member-list">
					  	<div class="headimg" style="background:aliceblue">
					  		<div class="xjtq">
							</div>
							<div>开通星级特权</div>
							<div>把自己放在搜索第一位</div>
					  	</div>
					  	<div class="name pl11">
					  		<span class="left1">会员199DASDASD</span>
					  		<span class="icontype start"></span>
					  		<span class="icontype ative vip"></span>
					  		<span class="icontype ative card"></span>
					  	</div>
					  	<div class="tag pl11">
					  		<el-tag  size="small">22岁</el-tag>
					  		<el-tag size="small">湛江</el-tag>
					  		<el-tag size="small">178cm</el-tag>
					  	</div>
					  	<div class="marks">
					  		我正在寻找广东湛江霞山区,年龄在18-23岁,...
					  	</div>
					  </li>
					<li v-for="(item,index) in searchList" class="buy-star member-list" :key="index" @click.stop="goInfoDetai">
						<div class="headimg" :style="`background:url(${item.imgSrc}) ;`">
							<div class="dzh">打招呼</div>
						</div>
						<div class="name pl11">
							<span class="left1">金梦情缘金梦情缘金梦情缘</span>
							<span class="icontype ative start"></span>
							<span class="icontype vip"></span>
							<span class="icontype card"></span>
						</div>
						<div class="tag pl11">
							<el-tag  size="small">22岁</el-tag>
							<el-tag size="small">湛江</el-tag>
							<el-tag size="small">166CM</el-tag>
							<el-tag size="small">大专</el-tag>
							<el-tag size="small">自由职业</el-tag>
						</div>
						<div class="marks">
							我正在寻找广东湛江霞山区,年龄在18-23岁,...
						</div>
					</li>
				  </ul>
			</div>
							
		</div>
		<Shadow></Shadow>
  </div>
</template>

<script>
// @ is an alias to /src
import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
export default {
 data(){
	 return{
		 vip:"",
		 form:{},
		 img:"https://photo.zastatic.com/images/photo/381783/1527130186/18602580078900397.png?scrop=1&crop=1&cpos=north&w=184&h=184",
		 searchList:[
			 {imgSrc:'https://photo.zastatic.com/images/photo/260496/1041981648/1497227643627100.png?scrop=1&crop=1&cpos=north&w=150&h=150'},
			 {imgSrc:'https://photo.zastatic.com/images/photo/432985/1731937621/350084957976258.png?scrop=1&crop=1&cpos=north&w=150&h=150'},
			 {imgSrc:'https://photo.zastatic.com/images/photo/473254/1893012501/14081895096275678.jpg?scrop=1&crop=1&cpos=north&w=150&h=150'},
			 {imgSrc:'https://photo.zastatic.com/images/photo/443018/1772071871/7729106694384830.jpg?scrop=1&crop=1&cpos=north&w=150&h=150'},
			 {imgSrc:'https://photo.zastatic.com/images/photo/383333/1533329108/9079873433504577.jpg?scrop=1&crop=1&cpos=north&w=150&h=150'}
		 ],
		 isShowSlec:0,
		 idinpyt:''
	 }
 },
 methods: {
 	goInfoDetai() {
 		this.$router.push('./userinfo')
 	},
	gotfollw() {
 		this.$router.push('./follow')
 	},
	showDetail(str) {
 		this.$router.push({
			name:"userinfo",
			params:{
				detailname:str
			}
		})
 	},
	goSearch(){
		this.isShowSlec = !this.isShowSlec;
	},
	searchidFn:function(){
		if(this.idinpyt==""){
			message(this,{
				title:'',
				contxt:'用户id不能为空',
				center:true,
				btntxt:'确定'
			})
		}
		
	}
 },
}
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.xunhun{
		width: 100%;
		background: #f5f5f5;
		padding-top: 80px;
	}
	.xh_main{
		width: 1200px;
		margin: auto;
		padding-top:2%;
	}
	.search_slect{
		width: 100%;
		border-radius: 10px;
		background: #fff;
	}
	.search_slect .h1{
		padding: 1em 0;
		padding-left: 3%;
		border-bottom: 1px solid #ddd;
		font-size: 1em;
		font-weight: bold;
	}
	.changeseach{
		margin-top: 2%;
		min-height: 26.5em;
	}
	.fontw{
		font-weight: bold;
	}
	.li{
		padding: 1em 0;
		padding-left: 3%;
		display: flex;
		font-size: 0.9em;
		align-items: center;
	}
	.li .el-tag{
		margin-left: 3%;
		cursor: pointer;
		padding:10px 2em;
		line-height: 6px;
	}
	.w5{
		width:6%;
	}
	.ml3{margin-left: 3%;}
	.ml1{
		margin-left: .5%;
	}
	.searchbtn{
		padding-top:4%;
		text-align: center;
		padding-bottom: 3%;
	}
	.searchbtn button{
		width: 30%;
	}
	
	.searchul{
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-between; */
	}
	.searchul li{
		flex: 0 0 19%;
		margin-right: 1.25%;
		margin-top: 20px;
		cursor: pointer;
	}
	.searchul li:hover{
		box-shadow: 0 3px 20px rgba(0,0,0,.3);
		transition: box-shadow .5s;
	}
	.searchul li:nth-child(5n){
		margin-right: 0;
	}
	.member-list{
		padding: 20px 0;
		background: #fff;
	}
	.headimg{
		position: relative;
		width: 184px;
		height: 184px;
		background: 50% no-repeat;
		background-size: 100% 100%;
		margin: auto;
		border: 1px solid transparent;
	}
	.pl11{
		padding-left:11% ;
	}
	.tag{
		height: 60px;
		padding-right:11% ;
		overflow: hidden;
		box-sizing: border-box;
	}
	.tag .el-tag{
		margin-right: 10px;
		margin-top: 5px;
	}
	.marks{
		padding:0 11% ;
		overflow: hidden;
		box-sizing: border-box;
		margin-top: 8px;
		font-size: 14px;
	}
	.name{
		padding-top: 10px;
	}
	.name .left1{
		display: inline-block;
		width: 85px;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.xjtq{
		width: 48px;
		height: 48px;
		background: url(../assets/img/star.823d8ce.png) center no-repeat;
		background-size: contain;
		margin:auto;
		padding-top: 55px;
	}
	.xjtq ~ div{
		text-align: center;
	}
	.dzh{
		display: none;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 5px 0;
		background: rgba(161,135,249,.75);
		color: #fff;
		text-align: center;
		cursor: pointer;
		transition:all 0.5s ease-out;
	}
	.headimg:hover .dzh{
		display: block;
		transition:all 1s ease-out;
	}
	.icontype{
		cursor: pointer;
		display: inline-block;
		width: 21px;
		height: 21px;
		margin-right: 5px;
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
	.ative.start{
		background: url(../assets/img/start2.png) no-repeat;
	}
	.ative.vip{
		background: url(../assets/img/vip2.png) no-repeat;
	}
	.ative.card{
		background: url(../assets/img/card2.png) no-repeat;
	}
	.searchid_input{
		float: right;
		margin-right: 20px;
		height:30px;
	}
	.searchid_input .el-input__inner{
		height: 30px;
		line-height: 30px;
	}
	.idIcon{
		display: inline-block;
		height: 30px;
		line-height: 30px;
		font-size: 20px;
		cursor: pointer;
	}
</style>
