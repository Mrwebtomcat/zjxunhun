<!-- 我的寻婚 -->
<template>
	<div class="xunhun">
		<Header :isHeader="1"></Header>
		<div class="xh_main">
			<div class="vip_notice" @click="goToVip" >
				<img src="../assets/img/vip.png"  alt="">
			</div>
			<div class="changeseach">
				<el-row :gutter="24" style="margin-left: 0;">
					<el-col :span="17" class="uerlistbg">
						<div class="seachbox">

							<div class="selcinev" v-if="isShowSlec!=1">
								<!--  <el-col :span="3" style="text-align: left;">
													 <el-select v-model="form.previce" placeholder="北京">
														  <el-option label="广东" value="shanghai"></el-option>
														  <el-option label="北京" value="beijing"></el-option>
														</el-select>
												</el-col> -->
								<ul>
									<li style="width: 5%;">地区</li>
									<li style="width: 14%;">
										<el-select v-model="form.vc_province" size="small" placeholder="省份" @change="getCity">
											<el-option v-for="(items,index) in provice" :key="index" :label="items['name']" :value="items['id']"></el-option>
										</el-select>
									</li>
									<li style="width: 14%;">
										<el-select v-model="form.vc_city" size="small" placeholder="城市" @change="getArea">
											<el-option v-for="(items,index) in city" :key="index" :label="items['name']" :value="items['id']"></el-option>
										</el-select>

									</li>
									<li style="width: 14%;">
										<el-select v-model="form.vc_area" size="small" placeholder="区">
											<el-option v-for="(items,index) in Area" :key="index" :label="items['name']" :value="items['id']"></el-option>
										</el-select>

									</li>
									<li style="width: 5%;font-size: 14px;margin-right: 0;">年龄:</li>
									<li style="width: 8%;">
										<el-select v-model="form.age" size="small" placeholder="18">
											<el-option v-for="item in 100" v-if="item>=18" :key="item" :label="item" :value="item"></el-option>
										</el-select>

									</li>
									<li style="width: 8%;">
										<el-select v-model="form.maxage" size="small" placeholder="18">
											<el-option v-for="item in 100" v-if="item>=18" :key="item" :label="item" :value="item"></el-option>
										</el-select>

									</li>
									<li style="width: 5%;font-size: 14px;margin-right: 0;">职业:</li>
									<li style="width: 17%;">
										<el-select v-model="form.worke" size="small" placeholder="工作">
											<el-option v-for="(items,index) in  wokelist" :key="index" :label="items['name']" :value="items['val']"></el-option>
											
										</el-select>

									</li>
									<li style="width: 5%;font-size: 14px;margin-right: 0;">薪资:</li>
									<li style="width: 16%;">
										<el-select v-model="form.womoney" size="small" placeholder="请选择薪资">
											<el-option v-for="(items,index) in autoData[2]" :key="index" :label="items['value']" :value="items['code']"></el-option>
										</el-select>

									</li>
									<li style="width: 5%;font-size: 14px;margin-right: 0.5%;">
										<el-button type="primary" style="width:100%;">保存</el-button>
									</li>
									<li style="width: 5%;font-size: 14px;margin-right: 0;">
										<el-button @click="goSearch" style="width:100%;">取消</el-button>

									</li>
								</ul>
							</div>

							<div class="slectxt" v-else>
								<el-row :gutter="12" style="margin-left: 0;">
									<el-col :span="4" style="text-align: left;">
										每日推荐
									</el-col>
									<el-col :span="16" style="text-align: left;">
										<span v-if="userdata['tiaoJian']&&userdata['tiaoJian']!=''">
											<!-- citysarrs:[],
											areaarrs:[],
											provincearr -->
											
											{{userdata['tiaoJian']?(provincearr[Number(userdata['tiaoJian']['n_province'])-2]?provincearr[Number(userdata['tiaoJian']['n_province'])-2]['name']:''):''}}
											{{userdata['tiaoJian']?(citysarrs[Number(userdata['tiaoJian']['n_city'])]?ctiyretrun(userdata['tiaoJian']['n_city']).name:''):''}}
											| {{userdata['tiaoJian']?userdata['tiaoJian']['n_min_age']:''}}
											-
											{{userdata['tiaoJian']?userdata['tiaoJian']['n_max_age']:''}}岁的{{userdata['userlist']?(userdata['userlist']['n_sex']==1?'女士':'男士'):''}}
											{{userdata['tiaoJian']?autoData['1'][userdata['tiaoJian']['n_xueli']-1]['value']:''}}
											<!-- {{userdata['tiaoJian']}}
											广东湛江麻章区 | 18-20岁的女士 -->
										</span>
										<span style="cursor: pointer;color: red;" v-else  @click="dolink('./editinfo')">
											择偶条件未完善请点击完善您的择偶条件，以下推荐用户系统默认推荐
										</span>
									</el-col>
									<!-- <el-col :span="4">
										<div class="slecdx" @click="goSearch">
											修改择偶条件
										</div>
									</el-col> -->
								</el-row>
							</div>
						</div>
						<div class="userboxs">
							<!-- <div v-if="userdata['tjList']&&userdata['tjList'].length>0"> -->
								<div v-for="(items,index) in userdata['tjList']" :key="index" class="useritem" @click.stop="showDetail(items['vc_nickname'],items['id']?items['id']:'')">
									<el-row :gutter="24">
										<el-col :span="10">
											<img v-if="items['vc_img']&&items['vc_img']!=''" style="width:150px;height:150px;" :src="items['vc_img']" />
											<img v-if="(!items['vc_img'] || items['vc_img']=='')&&items['n_issex']==1" src="../assets/img/main.jpg" style="width:150px;height:150px;"  />
											<img v-if="(!items['vc_img'] || items['vc_img']=='')&&items['n_issex']!=1" src="../assets/img/woman.jpg" style="width:150px;height:150px;"  />
										</el-col>
										<el-col :span="14">
											<div class="uiname">{{items['vc_nickname']?items['vc_nickname']:''}}</div>
											<div class="uiinfo">
												{{`${items['n_age']}岁 | ${items.vc_city} ${items.vc_worke?'|'+ worketype(items.vc_worke):'职业（暂无设置）'}`}}
												<!-- {{`${items['n_age']}岁 | ${bigdata[Number(items['vc_city'])]?ctiyretrun(items['vc_city']).name:''} ${items.vc_worke?'|'+items.vc_worke:''}`}} -->
													
												<!-- 湛江|157cm|客户经理 -->
											</div>
											<div class="umakers">
												{{items['vc_descript']==""?'努力寻找另一半....':items['vc_descript']}}
												
											</div>
											<div class="sayhellow" @click.stop="dazh(items['vc_nickname']?items['vc_nickname']:'')">
												<el-button size="small">打招呼</el-button>
											</div>
										</el-col>
									</el-row>
								</div>
							<!-- </div> -->
							<div v-if="userdata['tjList']&&userdata['tjList'].length<=0" class="emptytip">
								<img class="tips" src="../assets/img/true_03.jpg" alt="">
								<div class="tiptxts">暂无匹配到相关用户</div>
							</div>

						</div>

					</el-col>
					<el-col :span="7">

						<div class="notice_info">
							<div class="vipuserinfo">
								<div class="box">
									<img v-if="userdata['userlist']['vc_img']&&userdata['userlist']['vc_img']!=''" style="width:100px;height:100px;" :src="userdata['userlist']['vc_img']" >
									 <img v-if="(!userdata['userlist']['vc_img'] || userdata['userlist']['vc_img']=='')&&userdata['userlist']['n_sex']==1" style="width:100px;height:100px;" src="../assets/img/main.jpg" />
									 <img v-if="(!userdata['userlist']['vc_img'] || userdata['userlist']['vc_img']=='')&&userdata['userlist']['n_sex']!=1" style="width:100px;height:100px;" src="../assets/img/woman.jpg" />
									<div class="icon_vip">
										<span :class="userdata['userlist']['n_isstar']?'start atctive':'start'" @click="dolink('./start')"></span>
										<span :class="userdata['userlist']['n_isvip']?'vip active':'vip'" @click="dolink('./vip')"></span>
										<span :class="userdata['userlist']['n_issm']==2?'card active':'card'" @click="dolink('./idcard')"></span>
									</div>
								</div>
								<div class="box">
									<div class="lac1">{{userdata['userlist']['vc_nickname']?userdata['userlist']['vc_nickname']:''}}</div>
									<div class="lac1" style="padding-top:4%;"><!--ID：12321542512--></div>
									<div class="lac1" style="padding-top:3%;">
										<!-- <span>30%</span> -->
										<span @click="dolink('./editinfo')">个人资料</span>
										<span @click="dolink('./vip')">充值</span>
									</div>
									<div v-if="userdata['userlist']['n_isvip']==1" class="lac1" style="padding-top:3%;">
										<!-- <span>30%</span> -->
										<span style="color: red;font-size: 12px;" v-if="userdata['userlist']['dt_endvip']&&userdata['userlist']['dt_endvip']!=''">会员截止时间到：{{userdata['userlist']['dt_endvip']}}</span>
										<p></p>
										<span style="color: red;font-size: 12px;" v-if="userdata['userlist']['dt_endtsfw']&&userdata['userlist']['dt_endtsfw']!=''">特权截止时间到：{{userdata['userlist']['dt_endtsfw']}}</span>
										<p></p>
										<span style="color: red;font-size: 12px;" v-if="userdata['userlist']['dt_endstar']&&userdata['userlist']['dt_endstar']!=''">星级截止时间到：{{userdata['userlist']['dt_endstar']}}</span>
									</div>
									<div v-else class="lac1" style="padding-top:4%;">
										<!-- <span>30%</span> -->
										<span style="color: blue;">普通用户</span>
									</div>
								</div>
							</div>
							<el-row :gutter="24" style="margin-right: 0;width:90%;margin:auto;">
								<el-col :span="8">
									<div @click="dolink('./browse')">
										<img v-if="userdata['userlist']['vc_img']&&userdata['userlist']['vc_img']!='' " src="../assets/img/view.1064335.png" alt="">
										<img v-else src="../assets/img/view.1064335.png" alt="">
										<div class="ninfo_text">{{userdata['userlist']['n_show']}}人浏览</div>
									</div>
								</el-col>
								<el-col :span="8">
									<div @click="dolink('./information')">
										<img src="../assets/img/mail.12ec3d1.png" alt="">
										<div class="ninfo_text">{{userdata['userlist']['n_message']}}条未读信息</div>
									</div>
								</el-col>
								<el-col :span="8">
									<div @click="gotfollw">
										<img src="../assets/img/focus.f2668b2.png" alt="">
										<div class="ninfo_text">{{userdata['userlist']['n_gz']}}人关注我</div>
									</div>
								</el-col>
							</el-row>
						</div>

						<div class="perseon">
							<div class="xhfwtitle">金梦情缘服务</div>
							<div class="xhyw">
								<ul>
									<li @click="dolink('./vip')">
										<div class="imgs">
											<img src="https://i.zhenai.com/pc/portal/myZhenai/images/zhenxin.67ffa14.png" alt="">
										</div>
										<div class="fwcontext">
											<div class="fwheader">金梦情缘会员</div>
											<div class="body">解锁消息发送，无限量免费查看，更多精准筛选条件</div>
										</div>
									</li>
									<li @click="dolink('./start')">
										<div class="imgs">
											<img src="https://i.zhenai.com/pc/portal/myZhenai/images/star.a6da2b1.png" alt="">
										</div>
										<div class="fwcontext">
											<div class="fwheader">星级特权</div>
											<div class="body">查看谁赞了我，谁关注我，搜索排名优先，更多展示机会</div>
										</div>
									</li>
									<!-- <li>
											<div class="imgs">
												<img src="https://i.zhenai.com/pc/portal/myZhenai/images/coin.d20a1c9.png" alt="">
											</div>
											<div class="fwcontext">
													<div class="fwheader">寻爱会员</div>
													<div class="body">珍爱网专用虚拟货币，可以购买各种自助服务！</div>
											</div>
										</li> -->
									<!-- <li>
											<div class="imgs">
												<img src="https://i.zhenai.com/pc/portal/myZhenai/images/zhiying.b5112b6.png" alt="">
											</div>
											<div class="fwcontext">
													<div class="fwheader">寻婚会员</div>
													<div class="body">优质精选会员，红娘服务一对一，五步服务，六重保障！</div>
											</div>
										</li> -->
								</ul>
							</div>
						</div>

					</el-col>
				</el-row>
			</div>
		</div>
		<!-- 实名弹窗 -->
		<Shadow :xianshi="n_issm" :linkUrl="'./idcard'" :shadowcall="callclose"></Shadow>
		
	</div>
</template>

<script>
	import {mapMutations,mapGetters} from 'vuex';
	import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
	import mingzu from '../json/mz.json'
	import https from "../utils/Https.js"
	export default {
		data() {
			return {
				vip: 0,
				form: {
					vc_city:'',
					vc_area:''
				},
				provice: [], //省份
				city: [], //城市
				Area: [], //地区
				autoData: [],//默认的数据编码
				userdata:{userlist:{vc_nickname:''}},//用户数据
				isShowSlec: 0,
				wokelist:mingzu['zhiye'],
				n_issm:0,
				provincearr:[],
				citysarrs:[],
				areaarrs:[],
				bigdata:[],
				mainImgurl:'',
				womanImgUrl:''
			}
		},
		computed:{
			getInfo(){
				return this.$store.state.userinfo;
			}
		},
		methods: {
			...mapMutations(['changInfo','setpCode','setPosition']),
			goToVip() {
				this.$router.push('./vip')
			},
			callclose() {
				this.n_issm=1;
			},
			gotfollw() {
				this.$router.push('./follow')
			},
			dolink(url) {
				this.$router.push(url)
			},
			showDetail(str,id) {
				this.$router.push({
					name: "userinfo",
					query:{id},
					params: {
						detailname: '正在浏览'+str+'用户的详情信息'
					}
				})
			},
			worketype:function(val){
				let str = "";
				if(val!=""){
					str = this.wokelist.filter((item,index,arr)=>item.val==val)
				}
				return str[0].name
			},
			goSearch() {
				this.isShowSlec = !this.isShowSlec;
			},
			toast:function(str,type){
				this.$message({
				  message: str,
				  type: type||'error'
				});
			},
			dazh(name) {
				this.toast(`与${name}打招呼成功`,'success')
			},
			// 获取省份
			getProvice: function() {
				if(!localStorage.posPAC){
					connetAction.ajaxPost(https['tree'], "")
						.then(rd => {
							//console.log(rd)
							if (rd.status != 0) {
								this.bigdata = rd.data;
								this.procesPCA(rd.data);
								this.provice = this.provincearr;
								// 存储三级联动数据
								this.setPosition({vc_province:this.provincearr,vc_city:this.citysarrs,vc_area:this.areaarrs});
								
								// localStorage.posPAC = JSON.stringify({vc_province:this.provincearr,vc_city:this.citysarrs,vc_area:this.areaarrs})
								localStorage.posPAC = JSON.stringify(this.bigdata)
								
							}

						})
						.catch(res => {
							// console.log(res, "res")
						})
				}else{
					this.bigdata = JSON.parse(localStorage.posPAC);
					this.procesPCA(this.bigdata);
					this.provice = this.provincearr;
				}
			},
			procesPCA:function(data){
				this.provincearr =[];
				this.citysarrs = [];
				this.areaarrs =[];
				
				for(var i=0;i<data.length;i++){
					if(data[i]['type']==1){
						this.provincearr.push(data[i]);
					}
					if(data[i]['type']==2){
						this.citysarrs.push(data[i]);
					}
					if(data[i]['type']==3){
						this.areaarrs.push(data[i]);
					}
				}
			},
			ctiyretrun:function(id){
				var arr = [];
				var city = this.citysarrs.map((item)=>{
					if(item['id']==id){
						arr = item;
						return false;
					}
				})
				return arr;
			},
			//获取城市
			getCity: function(pid) {
				this.city = [];
				this.Area = [];
				this.form.vc_area = "";
				this.form.vc_city = "";

				for(var i=0;i<this.citysarrs.length;i++){
					if(this.citysarrs[i]['pid']==pid){
						this.city.push(this.citysarrs[i])
					}
				}
				
			},
			//获取地区
			getArea: function(pid) {
				this.form.vc_area = "";
				this.Area = [];
				for(var i=0;i<this.areaarrs.length;i++){
					if(this.areaarrs[i]['pid']==pid){
						this.Area.push(this.areaarrs[i]);
					}	
				}
			},
			autoCode: function() {
				connetAction.ajaxPost(https['getCode'], "")
					.then(rd => {
						this.autoData = rd.data;
						if(!this.autoData.tiaoJian){
								this.isShowSlec = 1;		
						}
						// 获得资料模板数据
						this.setpCode(rd.data);
						localStorage.autoCode = JSON.stringify(rd.data)
						//console.log(this.autoData)
					})
					.catch(res => {
						// console.log(res,"res")
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
							this.userdata = rd.data;
							this.vip =this.userdata['userlist']['n_isvip'];
							this.n_issm =this.userdata['userlist']['n_issm'];
							// console.log(this.userdata,3333)
						}
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			listAreaArr:function(id){
				var str = "";
				for(var i=0;i<this.areaarrs.length;i++){
					if(this.areaarrs[i]['pid']==id){
						str = this.areaarrs[i]['name'];
					}
				}
				// console.log(str)
				return str;
				
			}
			
		},

		created(){
			this.getuerList();
		},
		mounted() {
			this.getProvice();
			this.autoCode();
			
		}
	}
</script>
<style scoped>
	.xunhun {
		width: 100%;
		background: #f5f5f5;
		padding-top: 80px;
	}

	.xh_main {
		width: 1200px;
		margin: auto;
		padding-top: 2%;
	}

	.vip_notice {
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.changeseach {
		margin-top: 2%;
		min-height: 26.5em;
		position: relative;
	}

	.uerlistbg {
		border-radius: 10px;
		background: #fff;

	}

	.seachbox {
		padding-top: 2%;
		padding-bottom: 2%;
		border-bottom: 1px solid #ddd;
		margin-bottom: 2%;
		min-height: 30px;
	}

	.slecdx {
		color: royalblue;
		cursor: pointer;
	}

	.userboxs {
		/* height: 500px; */
		width: 100%;
		/* overflow-y: scroll; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.useritem {
		cursor: pointer;
		width: 44%;
		height: 194px;
		padding: 0 22px;
		text-align: left;
		padding-right: 1%;
	}

	.useritem:nth-child(2n-1) {
		padding-right: 0;
	}

	.uiname,
	.uiinfo,
	.umakers {
		margin-bottom: 3.05%;
	}

	.umakers {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		height: 4em;
	}

	.umakers,
	.uiinfo {
		font-size: 0.8em;
	}

	.sayhellow {
		padding-top: 4%;
	}

	.sayhellow .el-button {
		width: 100%;
	}

	.notice_info {
		width: 100%;
		background: #fff;
		border-radius: 10px;
		padding-bottom: 5%;
		min-height: 30%;
		text-align: center;
	}

	.notice_info .el-col {
		cursor: pointer;
	}

	.perseon {
		margin-top: 1.5em;
		width: 100%;
		min-height: 4em;
		background: #fff;
		border-radius: 10px;
		text-align: left;
		margin-bottom: 2em;
	}

	.xhfwtitle {
		font-size: 1.2em;
		padding: 10px 10px 0;
	}

	.xhyw ul li {
		display: flex;
		padding: 10px;
		align-items: center;
		cursor: pointer;
	}

	.xhyw .imgs {
		flex: 0 0 13%;
	}

	.imgs img {
		width: 100%;
	}

	.xhyw .fwcontext {
		flex: 0 0 81%;
		padding-left: 10px;
	}

	.fwcontext .body {
		font-size: 0.8em;
	}

	.itemcontents {
		height: 150px;
	}

	.notice_info img {
		width: 40%;
	}

	.ninfo_text {
		font-size: .8em;
	}

	.vipuserinfo {
		width: 100%;
		display: flex;
	}

	.vipuserinfo .box {
		flex: 0 0 50%;
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		overflow: hidden;
		padding-right: 0;
	}

	.box img {
		width: 100px;
		border-radius: 50%;
	}

	.box:last-child {
		padding: 0;
	}

	.lac1 {
		padding-top: 30px;
		text-align: left;
	}

	.icon_vip {
		padding-top: 15px;
	}

	.icon_vip span {
		width: 20px;
		height: 20px;
		display: inline-block;
		margin-right: 10px;
		cursor: pointer;
	}

	.lac1 span {
		font-size: 0.8em;
		margin-right: 5%;
		cursor: pointer;
	}

	.start {
		background: url(../assets/img/start1.png) no-repeat;
	}
	.start.active{
		background: url(../assets/img/start2.png) no-repeat;
	}

	.vip {
		background: url(../assets/img/vip1.png) no-repeat;
	}
	.vip.active{
		background: url(../assets/img/vip2.png) no-repeat;
	}

	.card {
		background: url(../assets/img/card1.png) no-repeat;
	}
	.card.active{
		background: url(../assets/img/card2.png) no-repeat;
	}

	.selrow {
		display: flex;
		align-items: center;
	}

	.selcinev {
		min-height: 30px;
		line-height: 30px;
	}

	.selcinev ul {
		display: flex;
		list-style: none;
		flex-wrap: wrap;
	}

	.selcinev ul li {
		width: 11%;
		display: flex;
		margin-right: 1%;
		margin-top: 5px;
	}

	.selcinev ul li button {
		height: 31px;
		line-height: 31px;
		padding: 0;
		text-align: center;
	}

	.slectxt {
		padding-top: 1%;
	}

	.el-select input {
		padding: 0 !important;
	}
	
	.emptytip{
		position: absolute;
		top: 30%;
		left: 50%;
		width: 24%;
		margin: auto;
		margin-left: -28%;;
	}
	.emptytip .tips{
		width: 100%;
	}
	.tiptxts{
		padding-top: 10px;
		text-align: center;
		color: #999;
	}
</style>
