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
							placeholder="请输入昵称搜索"
							v-model="idinpyt"
							clearable>
							 <i slot="suffix" class='el-icon-search idIcon curpointer' @click='searchidFn'></i>
						</el-input>
					</div>
				</div>
				<!-- <div class="li">
					<span class="fontw">会员专区:</span>
					<el-tag>高学历</el-tag>
					<el-tag type="success">90后</el-tag>
					<el-tag type="info">同生缘</el-tag>
				</div> -->
				<div class="li">
					<span class="fontw">基础条件:</span>
					<div class="w5  ml3"  style="width:8%;" >
						 <el-select v-model="form.n_sex" size="small" placeholder="性别">
							  <el-option v-for="(items,index) in agearr" :key="index" :label="items['name']" :value="items['val']"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:10%;">
						<el-input v-model="form.n_min_age" size="small" placeholder="年龄">
							 <!-- <i slot="suffix" class='idIcon'>岁</i> -->
						</el-input>
					</div>
					<span class="ml1">至</span>
					<div class="ml1" style="width:10%;">
						<el-input v-model="form.n_max_age" size="small" placeholder="年龄">
							 <!-- <i slot="suffix" class='idIcon' >岁</i> -->
						</el-input>
					</div>
					<div  class="ml1" style="width:7%;">
						<el-input v-model="form.n_min_sg" size="small" placeholder="身高">
							 <i slot="suffix" class='idIcon' >cm</i>
						</el-input>
					</div>
					<div class="ml1">至</div>
					<div class="ml1" style="width:7%;">
						<el-input v-model="form.n_max_sg" size="small" placeholder="身高">
							 <i slot="suffix" class='idIcon' >cm</i>
						</el-input>
					</div>
					<div class="ml1" style="width:9%;">
						 <el-select v-model="form.vc_province" size="small" placeholder="选择省份" @change="getCity">
							<el-option v-for="(items,index) in vc_province" :key="index" :label="items['name']" :value="items['id']">
							</el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:9%;">
						 <el-select v-model="form.vc_city" size="small" @change="getArea"  placeholder="选择城市">
							<el-option v-for="(item,index) in vc_city" :key="index" :label="item['name']" :value="item['id']"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:9%;">
						 <el-select v-model="form.vc_area" size="small"  placeholder="选择城区">
							<el-option v-for="(item,index) in vc_area" :key="index" :label="item['name']" :value="item['id']"></el-option>
						</el-select>
					</div>
					
					<div class="ml1" style="width:10%;">
						 <el-select v-model="form.n_money" size="small" placeholder="薪资水平">
							<el-option v-for="(items,index) in autoData['2']" :key="index" :label="items['value']" :value="items['code']">
							</el-option>
						</el-select>
					</div>
					<div class="chegj">
						<el-checkbox v-model="gjchecked" @change="gjqh">高级检索</el-checkbox>
					</div>
				</div>
				<div v-if="gjchecked" class="li">
					<span class="fontw">高级搜索:</span>
					<div class="ml3" style="width:12%;">
						 <el-select v-model="form.vc_worke" :disabled="vip" size="small" placeholder="职业" >
							<el-option v-for="(wokeritem,i) in worker"  :label="wokeritem.name" :value="wokeritem.val"  :key="i"></el-option>
						</el-select>
					</div>
					<!-- <div class="ml1" style="width:8%;">
						 <el-select v-model="form.worke" size="small" placeholder="年龄">
							  <el-option label="18" value="1"></el-option>
							  <el-option label="19" value="2"></el-option>
						</el-select>
					</div> -->
					<div class="ml1" style="width:10%;">
						 <el-select v-model="form.n_ishouse" :disabled="vip" size="small" placeholder="住房情况">
							 <el-option v-for="(items,index) in hoursarr" :key="index" :label="items['name']" :value="items['value']"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:9%;">
						 <el-select v-model="form.n_iscar" :disabled="vip" size="small" placeholder="买车情况">
							    <el-option v-for="(items,index) in ['已购买','未购买']" :key="index" :label="items" :value="index+1"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:9%;">
						 <el-select v-model="form.n_hyzk" :disabled="vip" size="small" placeholder="婚姻情况">
							 <el-option v-for="(items,index) in ['不限','未婚','离异','丧偶']" :key="index" :label="items" :value="index+1"></el-option>
						</el-select>
					</div>
					<div class="ml1" style="width:14%;">
						 <el-select v-model="form.n_ischild" :disabled="vip" size="small" placeholder="有没有孩子">
							  <el-option v-for="(items,index) in ['没有小孩','有孩子且住一起','有孩子且偶尔住一起','有孩子但不在身边']" :key="index" :label="items" :value="index+1"></el-option>
						</el-select>
					</div>
					
					<div  class="ml1" style="width:8%;">
						 <el-select v-model="form.vc_xinzuo" :disabled="vip" size="small" placeholder="星座">
							  <el-option v-for="(item,index) in xinzuo" :key="index" :label="item['name']" :value="item['val']" ></el-option>
						</el-select>
					</div>
					
				</div>
				<div v-if="gjchecked" class="searchbtn"><el-button @click="gjSearch">高级搜索</el-button></div>
				<div v-else class="searchbtn"><el-button @click="suoSouPt">搜索</el-button></div>
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
					  		<span class="left1">{{userData?userData['vc_nickname']:''}}</span>
					  		<span :class="userData['n_isstar']?'icontype ative start':'icontype start'"></span>
					  		<span :class="userData['n_isstar']?'icontype ative vip':'icontype vip'"></span>
					  		<span :class="userData['n_isstar']?'icontype ative card':'icontype card'"></span>
					  	</div>
					  	<div class="tag pl11">
					  		<el-tag  size="small">{{userData?userData['n_age']:'0'}}岁</el-tag>
					  		<el-tag size="small">{{userData?userData['vc_area']:''}}</el-tag>
					  		<el-tag size="small">{{userData?userData['n_sg']:''}}cm</el-tag>
					  	</div>
					  	<div class="marks">
					  		我正在寻找{{userData.vc_province?userData.vc_province:''}}{{userData.vc_city?userData.vc_city:''}}{{userData.vc_area?userData.vc_area:''}},年龄在{{userData?Number(userData['n_age'])-5:''}}-{{userData?Number(userData['n_age'])+5:''}}岁,...
					  	</div>
					  </li>
					<li v-for="(item,index) in searchList" class="buy-star member-list" :key="index" @click.stop="goInfoDetai(item.id)">
						<div class="headimg" :style="`background:url(${item.vc_img?item.vc_img:(yhn_sex==1?womanimg:manimg)}) 0% 0% / contain;`">
							<div class="dzh" @click.stop="dzh(item['vc_nickname'])">打招呼</div>
						</div>
						<div class="name pl11">
							<span class="left1">{{item['vc_nickname']?item['vc_nickname']:''}}</span>
							<span :class="item['n_isstar']?'icontype ative start':'icontype start'"></span>
							<span :class="item['n_isvip']?'icontype ative vip':'icontype vip'"></span>
							<span :class="item['n_issm']?'icontype ative card':'icontype card'"></span>
						</div>
						<div class="tag pl11">
							<el-tag  size="small">{{item['n_age']?item['n_age']:'0'}}岁</el-tag>
							<el-tag size="small">{{item['vc_city']?item['vc_city']:''}}</el-tag>
							<el-tag size="small">{{item['n_sg']?item['n_sg']:'0'}}CM</el-tag>
							<el-tag size="small">{{autoData['1'][item.n_xueli]['value']}}</el-tag>
							<el-tag size="small">{{item['vc_worke']? worketype(item['vc_worke']):'暂无职业设置'}}</el-tag>
						</div>
						<div class="marks">
							{{item['vc_descript']&&item['vc_descript']!=""?item['vc_descript']:'我正在寻找灯火阑珊处的你,...'}}
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
import mingzu from '../json/mz.json'
import https from "../utils/Https.js"
import womanimg from '../assets/img/woman.jpg'
import manimg from '../assets/img/main.jpg'
export default {
 data(){
	 return{
		 vip:false,
		 gjchecked:false, //是否高级搜索
		 form:{},		 //表单数据
		 userData:{},	//用户数据
		 img:"https://photo.zastatic.com/images/photo/381783/1527130186/18602580078900397.png?scrop=1&crop=1&cpos=north&w=184&h=184",
		 searchList:[],//用户列表假数据
		 isShowSlec:0,
		 idinpyt:'',
		 vc_province:[],
		 vc_city:[],
		 vc_area:[],
		 autoData:{},
		 vc_worke:'',
		 worker:[{
			"name":"不限",
			"val":0
		}],//职业
		 xinzuo:[{'name':'不限','value':0}],
		 hoursarr:[{'name':'不限','value':0}],//住房情况
		 caruiarr:[],//买车情况
		 hunyinarr:[],//婚姻情况
		 childarr:[],//有没有孩子
		 xingzarr:[],//星座
		 agearr:[],
		 yhn_sex:1,
		manimg:manimg,
		womanimg:womanimg
		 
	 }
 },
 methods: {
	 toastip:function(str,type){
	 	this.$message({
	 	  message:str ,
	 	  type: type||'warning'
	 	});
	 },
 	goInfoDetai(id) {
 		this.$router.push({name:'userinfo',query:{id:id}})
 	},
	worketype:function(val){
		let str = [];
		if(val){
			str = this.worker.filter((item,index,arr)=>item.val==val);
			return str[0]['name']
		}
		console.log(str)
	},
	gjqh:function(e){
		if(this.userData['n_isvip']==1){
			this.gjchecked = true;
			return true;
		}
		// this.toastip('尊敬的用户您好，您暂时未开通VIP会员和开通星级无法开启高级搜索');
		message(this,{
			contxt:'尊敬的用户您好，您暂时未开通VIP会员和开通星级,暂时无法开启高级搜索功能'
		})
		this.gjchecked =  false;
		return false;
	},
	//昵称搜索
	searchidFn:function(){
		this.idinpyt = this.idinpyt.replace( / /g , "");
		if(this.idinpyt==""||!this.idinpyt){
			this.toastip('请输入昵称后再搜索')
			return false;
		}
		connetAction.ajaxPost(https['nameSousuo'], {vc_nickname:this.idinpyt})
					.then(rd => {
						if(rd.status==1){
							this.searchList = rd.data;
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
		
	},
	//默认数据
	autoCode: function() {
		connetAction.ajaxPost(https['getCode'], "")
			.then(rd => {
				this.autoData = rd.data;
				this.gzArr = 	this.autoData['2'];
				
			})
			.catch(res => {
				
			})
	},
	// 获取省份
	getProvice: function(n) {
		this.provincearr=[];
		this.citysarrs=[];
		this.areaarrs=[];
		
		if(localStorage.posPAC){
			this.provincearr =  JSON.parse(localStorage.posPAC);
			this.vc_province.push({id: 0, pid: "", name: "不限", type: 1});
			this.citysarrs.push({id: 0, pid: "", name: "不限", type: 1});
			this.areaarrs.push({id: 0, pid: "", name: "不限", type: 1});
			for(var i=0;i<this.provincearr .length;i++){
				if(this.provincearr[i]['type']==1){
					this.vc_province.push(this.provincearr[i]);
				}
				if(this.provincearr [i]['type']==2){
					this.citysarrs.push(this.provincearr[i]);
				}
				if(this.provincearr[i]['type']==3){
					this.areaarrs.push(this.provincearr[i]);
				}
			}
		}
		
	},
	//获取城市
	getCity: function(pid) {
		this.vc_city = [];
		this.form.vc_city = "";
		this.form.vc_area = "";

		for(var i=0;i<this.citysarrs.length;i++){
			if(this.citysarrs[i]['pid']==pid){
				this.vc_city.push(this.citysarrs[i])
			}
		}
		this.vc_city.push()
	},
	//获取地区
	getArea: function(pid) {
		this.vc_area = [];
		this.form.vc_area = "";
		for(var i=0;i<this.areaarrs.length;i++){
			if(this.areaarrs[i]['pid']==pid){
				this.vc_area.push(this.areaarrs[i])
			}
		}
		
	},
	getInfos:function(){
		let data = {id:localStorage.openid};
		if(!data.id){
			return false;
		}
		
		connetAction.ajaxPost(https['getInfo'],data)
		.then((res)=>{
			if(res.status==1){
						this.userData = res.data;
						this.yhn_sex = this.userData.n_sex;
						this.setUiData();
						this.suoSouPt();
					// 初始化基本数据
					
			}else{
				this.toastip(res.message)
			}	
			
		})
		.catch((res)=>{
			
		})
	},
	// 高级搜索
	gjSearch:function(page){
		let data = null;
		data = this.form;
		data.page = 1;
		data.pageNum =20;
		data.vc_xinzuo = "";
		let {n_max_sg,n_min_age,n_min_sg,n_money,n_sex,vc_province,vc_city,vc_area} = this.form;
		if(n_sex == ""|| !n_sex){
			// this.toastip('请选择性别，在操作');
			if(this.userData['n_sex']==2){
				data.n_sex = 2;
			}else{
				data.n_sex = 1;
			}
		}
		// if(n_min_age == ""|| !n_min_age){
		// 	this.toastip('请填写年龄，在操作');
		// 	return false;
		// }
		// if(n_min_sg==0||!n_min_sg){
		// 	this.toastip('请填写身高，请选择');
		// 	return false;
		// }
		// if(n_max_sg==0||!n_max_sg){
		// 	this.toastip('请填写身高，请选择');
		// 	return false;
		// }
		// if(vc_province==0||!vc_province){
		// 	this.toastip('请选择省份');
		// 	return false;
		// }
		// if(vc_city==0||!vc_city){
		// 	this.toastip('请选择城市，请选择');
		// 	return false;
		// }
		// if(vc_area==0||!vc_area){
		// 	this.toastip('城区不能为空，请选择');
		// 	return false;
		// }
		// if(n_money==0||!n_money){
		// 	this.toastip('薪资不能为空，请选择');
		// 	return false;
		// }
		// page&&page!="" ? data.page = page : data.page = "1";
		connetAction.ajaxPost(https['souSuo'], data)
			.then(rd => {
				this.searchList = rd.data;
			})
			.catch(res => {
				console.log(res, "res")
			})
	},
	//获取所有ui信息存放起来
	setUiData:function(){
		var posData = JSON.parse(localStorage.posPAC);
		var autoCodeData = JSON.parse(localStorage.autoCode);
		this.sexarr=posData;	
		//年龄ui数组
		if(this.userData['n_sex']==1){
			this.agearr=[{name:"女",val:1}];
		}else{
			this.agearr=[{name:"男",val:2}];
		}
		this.worker.push(...mingzu['zhiye']); //职业
		this.xinzuo.push(...mingzu['xingzuo']); //星座
		this.hoursarr.push(...mingzu['hours']); //房子情况
		//this.sgarr=[].concat(autoCodeData[4]);	身高ui数组
		// this.provinuiearr=[];	//省份ui数组
		// this.cityuiearr=[];	//城市ui数组
		// this.areauiearr=[];	//城区ui数组
		this.xinziuiarr=[{id: 0, type: 0, code: 0, value: "不限"}].concat(autoCodeData['2']);	//薪资
		this.hunyinarr=[{id: 0, type: 0, code: 0, value: "不限"}].concat(autoCodeData[4]);	//婚姻情况
		this.childarr=[{id: 0, type: 0, code: 0, value: "不限"}].concat(autoCodeData[5]);	//有没有孩子
	},
	// 普通搜索
	suoSouPt:function(){
		let {n_max_sg,n_min_age,n_min_sg,n_money,n_sex,vc_province,vc_city,vc_area} = this.form;
		
		if(n_sex == ""|| !n_sex){
			if(this.userData['n_sex']==2){
				n_sex = 2;
			}else{
				n_sex = 1;
			}
			// this.toastip('请选择性别，在操作');
			// return false;
		}
		if(n_min_age == ""|| !n_min_age){
			n_min_age = "";
			// this.toastip('请填写年龄，在操作');
			// return false;
		}
		if(n_min_sg==0||!n_min_sg){
			n_min_sg = 0;
			// this.toastip('请填写身高，请选择');
			// return false;
		}
		if(n_max_sg==0||!n_max_sg){
			n_max_sg = 0;
			// this.toastip('请填写身高，请选择');
			// return false;
		}
		if(vc_province==0||!vc_province){
			vc_province = "";
			// this.toastip('请选择省份');
			// return false;
		}
		if(vc_city==0||!vc_city){
			vc_city="";
			// this.toastip('请选择城市，请选择');
			// return false;
		}
		if(vc_area==0||!vc_area){
			vc_area=""
			// this.toastip('城区不能为空，请选择');
			// return false;
		}
		if(n_money==0||!n_money){
			n_money="";
			// this.toastip('薪资不能为空，请选择');
			// return false;
		}
		
		let data = {
			n_max_sg,
			n_min_age,
			n_min_sg,
			n_money,
			n_sex,
			vc_province,
			vc_area,
			vc_city,
			page: 1,
			pageNum: 20
		}
		// page&&page!="" ? data.page = page : data.page = "1";
		connetAction.ajaxPost(https['souSuo'], data)
			.then(rd => {
				this.searchList = rd.data;
			})
			.catch(res => {
				console.log(res, "res")
			})
	},
	dzh:function(str){
		this.toastip(`与${str}打招呼成功`,'success');
	},
	getuerList:function(){
		let data = {
			oc_usercode:localStorage.openid
		}
		connetAction.ajaxPost(https['index'], data)
			.then(rd => {
				if(rd.status==1){
					this.searchList = rd.data.tjList;
					console.log(this.searchList)
				}
			})
			.catch(res => {
				// console.log(res,"res")
			})
	}
	
 },
 created(){
	 this.autoCode();
	 this.getProvice();
	 this.getInfos();
	
	 
	 // this.setUiData();
	 
 },
 mounted:function(){
	  // this.getuerList();
	  
 }
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
		position: relative;
	}
	.li .el-tag{
		margin-left: 3%;
		cursor: pointer;
		padding:10px 2em;
		line-height: 6px;
	}
	.idIcon{
		font-size: 14px !important;
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
	}
	.curpointer{
		cursor: pointer;
	}
	.chegj{
		position: absolute;
		right: 8%;
		top: 5.6em;
	}
</style>
