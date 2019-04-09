<!-- 完善个人资料 -->
<template>
  <div class="module_editinfo">
		<Header :isHeader="1" :ative="0" style="posistion:relative;z-index: 1000;"></Header>
		<div class="followConten">
			
			<el-row class="selrow" :gutter="24" style="margin-left: 0;text-align: left;">
				<el-col :span="6" style="margin-left: 0;">
					<div class="right_mysel">
						<div class="headeicon">
							<img src="https://photo.zastatic.com/images/cms/banner/20181121/8311191311554389.png?scrop=1&crop=1&cpos=north&w=80&h=80" alt="">
							<div class="changimngbtn">修改头像</div>
						</div>
						<div class="user_name">
							{{autoInfo['vc_nickname']}}
						</div>
						<div class="user_name iconbox">
							<span :class="autoInfo['n_isstar']==1?'start active':'start'"></span>
							<span :class="autoInfo['n_isvip']==1?'vip active':'vip'"></span>
							<span :class="autoInfo['n_issm']==1?'card active':'card'"></span>
						</div>
						<div class="pannel_info">
							<el-collapse v-model="activeName" accordion  @change="change1">
							  <el-collapse-item title="个人资料" name="1">
								<div v-for="(itmes,index) in pannelList['myinfo_nav']"  :class="itmes.active==1?'tiemsmy ative':'tiemsmy'"  :key="index" @click="changeItems(index)">{{itmes.contxt}}</div>
							  </el-collapse-item>
							  <el-collapse-item title="系统设置" name="2">
								<div class="tiemsmy" :class="qxindex==5?'tiemsmy ative':'tiemsmy'"  @click="changeItems(6,1)">权限设置</div>
								<div class="tiemsmy" :class="qxindex==6?'tiemsmy ative':'tiemsmy'"  @click="changeItems(7,1)">密码设置</div>
							  </el-collapse-item>
							</el-collapse>
						</div>
					</div>
				</el-col>
				<el-col :span="18" style="margin-left: 0;">
					<div class="letcontent">
						<div class="left_h1">
							<div class="left_h1_info">
								{{chanTile()}}
							</div>
						</div>
						<div class="infoframe1" v-if="myinf_index==0">
						 <el-form ref="form" :model="formm" label-width="80px">
								<!--	
							  <el-form-item label="昵称:">
								 <el-col :span="6">
									<el-input v-model="form.name"></el-input>
								</el-col>
								<el-col :span="3" style="padding-right: 0;text-align: right;">
									手机号码：
								</el-col>
								<el-col :span="8">
									<el-input v-model="form.phone"></el-input>
								</el-col>
							  </el-form-item> -->
							  <!-- 
							   -->
							  <div class="flex">
								  <el-form-item label="月收入:">
									<el-select v-model="formm.n_money" placeholder="请选择月收入">
									  <el-option v-for="(items,index) in autoData['2']" :key="index" :label="items['value']" :value="items['code']">
									  </el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="身高:">
										<el-input v-model="formm.n_sg"> <i slot="suffix" class='idIcon' >(cm)</i></el-input>
								 </el-form-item>
							  </div>
							  <div class="flex">
								  <el-form-item label="工作地区:">
									<el-select v-model="formm.vc_province" @change="getCity" placeholder="请选择省份">
										<el-option v-for="(items,index) in vc_province" :key="index" :label="items['name']" :value="items['id']"></el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="" label-width="20px">
									<el-select v-model="formm.vc_city" @change="getArea"  placeholder="请选择城市">
										<el-option v-for="(item,index) in vc_city" :key="index" :label="item['name']" :value="item['id']"></el-option>
									</el-select>
								 </el-form-item>
								 <el-form-item label="" label-width="20px">
										<el-select v-model="formm.vc_area"  placeholder="请选择城区">
											<el-option v-for="(item,index) in vc_area" :key="index" :label="item['name']" :value="item['id']"></el-option>
										</el-select>
								 </el-form-item>
							  </div>
							 <div class="flex">
								   <el-form-item label="体重:">
								  		<el-input v-model="formm.n_tz"> <i slot="suffix" class='idIcon' >(kg)</i></el-input>
								  </el-form-item>
								 <el-form-item label="星座:" label-width="80px">
									<el-select v-model="formm.vc_xinzuo" placeholder="请选择">
									   <el-option v-for="(item,index) in xinzuo" :key="index" :label="item['name']" :value="item['val']" ></el-option>
									</el-select>
								 </el-form-item>
							</div>
							<div class="flex">
								  <el-form-item label="民族:">
									<el-select v-model="formm.vc_mz" placeholder="请选择">
										<el-option v-for="(item,index) in mzArr" :key="index" :label="item.name" :value="item.val"></el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="有没有孩子:" label-width="100px">
									<el-select v-model="formm.n_ischild" placeholder="请选择">
									   <el-option v-for="(items,index) in autoData['3']" :key="index" :label="items['value']" :value="items['id']">
									  </el-option>
									</el-select>
								 </el-form-item>
							</div>
							 <div class="flex">
								 <el-form-item label="何时结婚:">
										<el-select v-model="formm.n_jiehuntime" placeholder="请选择">
										   <el-option v-for="(items,index) in autoData['4']" :key="index" :label="items['value']" :value="items['id']">
										  </el-option>
										</el-select>
								 </el-form-item> 
								 <el-form-item label="是否想要孩子:" label-width="120px">
									<el-select v-model="formm.n_child" placeholder="请选择">
									    <el-option v-for="(items,index) in autoData['5']" :key="index" :label="items['value']" :value="items['code']">
									   </el-option>
									</el-select>
								 </el-form-item>
								  
							</div>
							<div style="width:80%;">
								<el-form-item label="兴趣爱好:">
									<div>喜欢的一道菜，欣赏的一个名人，喜欢的一首歌，喜欢的一本书，喜欢做的事</div>
									<el-input type="textarea" placeholder="说出你的兴趣爱好....." v-model="formm.vc_loveplay"></el-input>
								</el-form-item>
							</div>
							<div style="width:80%;">
								<el-form-item label="活动形式:">
									<div>介绍一下自己，描述一下理想的伴侣，说说你对婚姻的期望</div>
									<el-input type="textarea" placeholder="说出你的故事....." v-model="formm.vc_descript"></el-input>
								</el-form-item>
							</div>
							  
							  <el-form-item>
								<el-button type="primary" @click="updateInfo">保存修改</el-button>
							  </el-form-item>
							</el-form>
						</div>
						<div class="infoframe1" v-if="myinf_index==1" >
							
							<el-form ref="form1" :model="form1" label-width="80px">
							    <div class="flex">
								  <el-form-item label="职业类别:">
									<el-select v-model="form1.vc_worke" placeholder="请选择">
									  <el-option v-for="(wokeritem,i) in worker"  :label="wokeritem.name" :value="wokeritem.val"  :key="i"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								 <div class="flex">
								  <el-form-item label="买房情况:">
									<el-select v-model="form1.n_ishouse" placeholder="请选择">
									  <el-option v-for="(items,index) in ['和家人住','已购房','租房','打算婚后购房','在单位宿舍住']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								 <div class="flex">
								  <el-form-item label="买车情况:">
									<el-select v-model="form1.n_iscar" placeholder="请选择">
									  <el-option v-for="(items,index) in ['已购买','未购买']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否吸烟:">
									<el-select v-model="form1.n_smoke" placeholder="请选择">
									  <el-option v-for="(items,index) in ['不吸烟','稍微抽一点烟','烟抽得很多','社交场合会抽烟']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否喝酒:">
									<el-select v-model="form1.n_alcohol" placeholder="请选择">
									  <el-option v-for="(items,index) in ['不喝酒','稍微抽一点酒','酒喝得很多','社交场合会喝酒']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								
							  <el-form-item>
								<el-button type="primary" @click="workUpdate">保存修改</el-button>
							  </el-form-item>
							</el-form>
						</div>
						<div class="infoframe1" v-if="myinf_index==2" style="padding-left: 0;" >
							<div class="no_photo_box" v-if="imgdata==''">
								<div class="no_photo">
									<img class="no_photo_img" src="../assets/img/no-photo.5b2ec2f.png" alt="">
								</div>
								<p  class="no_photo_tip">上传头像，征友成功率增加7倍</p>
							</div>
							<div class="photos">
								<el-upload
								  action="https://jsonplaceholder.typicode.com/posts/"
								  list-type="picture-card"
								  :on-preview="handlePictureCardPreview"
								  :on-remove="handleRemove">
								  <i class="el-icon-plus"></i>
								</el-upload>
								<div class="showimg">
									<el-dialog :visible.sync="dialogVisible">
									  <img width="100%" :src="dialogImageUrl" alt="">
									</el-dialog>
								</div>
								<el-dialog >
								  <img width="100%" :src="dialogImageUrl" alt="">
								</el-dialog>
							</div>
							<div class="sss" style="text-align: center;">
								<el-button type="primary" @click="onSubmit">立即上传</el-button>
							</div>
						</div>
						<div class="infoframe1" v-if="myinf_index==3"  >
							<el-form  :model="form2" label-width="80px">
							    <div class="flex">
								  <el-form-item label="年龄:">
										<el-input v-model="form2.n_min_age" placeholder="请输入年龄">
											<i slot="suffix">(岁)</i>
										</el-input>
								  </el-form-item> 
								 <div style="line-height: 40px;margin-left: 25px;"> 至</div>
								  <el-form-item label="" label-width="30px">
											<el-input v-model="form2.n_max_age" placeholder="请输入年龄">
											<i slot="suffix">(岁)</i>
										</el-input>
								  </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="身高:">
										<el-input v-model="form2.n_min_sg" placeholder="请输入身高">
											<i slot="suffix">(cm)</i>
										</el-input>
								  </el-form-item> 
								 <div style="line-height: 40px;margin-left: 25px;"> 至</div>
								  <el-form-item label="" label-width="30px">
										<el-input v-model="form2.n_max_sg" placeholder="请输入身高">	<i slot="suffix">(cm)</i></el-input>
								  </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="体重(KG):">
									<el-input v-model="form2.n_min_tz"><i slot="suffix" class='idIcon' >(kg)</i></el-input>
								  </el-form-item>
								  <div style="line-height: 40px;margin-left: 25px;"> 至</div>
								   <el-form-item label-width="30px">
									   <el-input v-model="form2.n_max_tz"><i slot="suffix" class='idIcon' >(kg)</i></el-input>
								  </el-form-item>
								</div>
								<div class="flex">
								  <el-form-item label="月收入">
									<el-select v-model="form2.n_money" placeholder="请选择">
										  <el-option v-for="(items,index) in autoData['2']" :key="index" :label="items['value']" :value="items['code']">
									  </el-option>
									</el-select>
								  </el-form-item> 
									<!-- <div style="line-height: 40px;margin-left: 25px;"> 至</div>
									<el-form-item label="" label-width="30px">
										<el-select v-model="form2.mincomerange" placeholder="请选择">
											<el-option v-for="(itemsrang,i) in 20000" v-if="itemsrang%1000==0&&itemsrang>=2000"  :label="itemsrang" :value="itemsrang"  :key="i"></el-option>
										</el-select>
								  </el-form-item>  -->
								</div>
								 <div class="flex">
								  <el-form-item label="学历:">
									<el-select v-model="form2.n_xueli" placeholder="请选择">
									  <el-option v-for="(items,index) in autoData['1']" :key="index" :label="items['value']" :value="items['id']">
									 </el-option>
									</el-select>
								 </el-form-item> 
								</div>
								 <div class="flex">
								  <el-form-item label="婚姻:">
									<el-select v-model="form2.n_hyzk" placeholder="请选择">
									  <el-option v-for="(items,index) in ['不限','未婚','离异','丧偶']" :key="index" :label="items" :value="index+1"></el-option>
									 
									</el-select>
								 </el-form-item> 
								</div>
								
								<div class="flex">
								  <el-form-item label="工作地区:">
									<el-select v-model="form2.n_province" placeholder="请选择" @change="getCity">
									  <el-option v-for="(items,index) in vc_province" :key="index" :label="items['name']" :value="items['id']">
									  </el-option>
									 
									</el-select>
								 </el-form-item> 
								 <el-form-item label="" label-width="30px">
											<el-select v-model="form2.n_city" placeholder="请选择">
											  <el-option v-for="(itemss,index) in vc_city" :label="itemss['name']" :value="itemss['id']"  :key="index">
											 </el-option>
											</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="有没有孩子:" label-width="100px">
									<el-select v-model="form2.n_ischild" placeholder="请选择">
									  <el-option v-for="(items,index) in ['没有小孩','有孩子且住一起','有孩子且偶尔住一起','有孩子但不在身边']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否想要孩子:" label-width="100px">
									<el-select v-model="form2.n_child" placeholder="请选择">
									  <el-option v-for="(item,index) in autoData['5']" :key="index" :label="item['value']" :value="item['id']"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否可以吸烟:" label-width="100px">
									<el-select v-model="form2.n_smoke" placeholder="请选择">
									  <el-option v-for="(items,index) in ['不限','可以吸烟','不要吸烟']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否可以喝酒:" label-width="100px">
									<el-select v-model="form2.n_alcohol" placeholder="请选择">
									  <el-option v-for="(items,index) in ['不限','可以喝酒','不要喝酒']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="有没有照片:" label-width="100px">
									<el-select v-model="form2.n_isphoto" placeholder="请选择">
									  <el-option v-for="(items,index) in ['不限','没有','有']" :key="index" :label="items" :value="index+1"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
							  <el-form-item>
								<el-button type="primary" @click="updatezh">保存修改</el-button>
							  </el-form-item>
							</el-form>
						</div>
						
						<div class="infoframe1" v-if="myinf_index==4"  >
							<div class="renzheng">
								<li>
									<div class="rz_icon"></div>
									<div class="rz-text">
										<p>实名认证</p>
										<p>提高诚信级别，认识更多诚信用户</p>
									</div>
									<div class="button">立即认证</div>
								</li>
							</div>
						</div>
						<div class="infoframe1" v-if="myinf_index==5"  >
							<el-form ref="form5" :model="form5" label-width="80px">
							    <div style="width:50%;">
										<el-form-item label="手机号码:">
										<el-input v-model="form5.vc_ordpassword" type="text" placeholder="请输入手机号码"></el-input>
										</el-form-item> 
									<div  style="line-height: 40px;margin-left: 25px;"></div>
										<el-form-item label="验证码:">
											<div class="flex">
														<el-input type="text" v-model="form5.code" placeholder="请输验证码"></el-input>
														<div style="margin-left:10%;">
															<el-button type="primary" size="small" @click="posCode">发送验证码</el-button>
														</div>
											</div>
										</el-form-item> 
									</div>
									<el-form-item>
										<el-button type="primary" @click="changPsw">确认修改</el-button>
									</el-form-item>
							</el-form>	
						</div>
						<!-- 权限设置 -->
						<div class="infoframe1" v-if="myinf_index==6"  >
							<div class="llhead">
								浏览资料权限
							</div>
								<div class="llbody">
									<div class="radiosBox">
									<el-radio-group v-model="qxradio">
										<div class="radiosll">
										<el-radio :label="1"> 所有会员可见</el-radio>
										</div>
										<div class="radiosll">
											<el-radio :label="2">所有会员不可见</el-radio>
										</div>
										</el-radio-group>
										<div v-if="qxradio==2" class="radiosll">
											<p>请选择关闭的原因</p>
											<div class="radiosll">
												<li>
												<el-radio-group v-model="qxyy">
													<el-radio :label="1">我已找到正在交往的对象</el-radio>
												</el-radio-group>
											</li>
												<li> 
												
												<el-radio-group v-model="qxyy">
													<el-radio :label="2">我已找到真爱，即将踏上红毯</el-radio>
												</el-radio-group>
											</li>
												<li>
												<el-radio-group v-model="qxyy">
													<el-radio :label="3">我最近忙，无法及时回复邮件</el-radio>
												</el-radio-group>
											</li>
											</div>
										</div>
										
									</div>
									
									<div class="radiosl1" style="padding-left: 10px;">
										<el-radio-group v-model="qxradio">
											<el-radio :label="3">部分会员不可见</el-radio>
										</el-radio-group>
									</div>
									<div v-if="qxradio==3" class="radiosl1" style="padding-left: 10px;padding-top: 10px;display: flex; width: 50%;">
										<el-input v-model="pbid" placeholder="请输入ID"></el-input>
										<el-button>屏蔽该ID</el-button>
									</div>
							</div>
						</div>
						
						<div class="infoframe1" v-if="myinf_index==7"  >
							<el-form ref="form7" :model="form7" label-width="80px">
							    <div class="flex">
								  <el-form-item label="原密码:">
									<el-input v-model="form5.vc_ordpassword" type="text" placeholder="请输入原密码"></el-input>
								  </el-form-item> 
								 <div style="line-height: 40px;margin-left: 25px;"></div>
								  <el-form-item label="新密码:">
										<el-input type="text" v-model="form5.vc_newpassword" placeholder="请输入新密码"></el-input>
								  </el-form-item> 
								</div>
								 <el-form-item>
									<el-button type="primary" @click="changPsw">确认修改</el-button>
								</el-form-item>
							</el-form>	
						</div>
						
						
					</div>
				</el-col>
				
			</el-row>
		</div>
  </div>
</template>
<script>
	import mingzu from '../json/mz.json'
	import {connetAction,message,regPhone,setKey,getKey} from "../utils/index.js"
	import https from "../utils/Https.js"
	export default{
		data(){
			return{
				myinf_index:0,
				activeName:"1",
				arrIndex:0,
				gzArr:[],
				imgdata:"1",//判断Img数据
				pannelList:{ //左侧菜单
					myinfo_nav:[
						{
							contxt:'基本资料',
							active:1
						},{
							contxt:'工作生活',
							active:0
						},{
							contxt:'个人相册',
							active:0
						},{
							contxt:'择偶条件',
							active:0
						},{
							contxt:'我的认证',
							active:0
						},{
							contxt:'修改手机号码',
							active:0
						}
					]
				},
				qxindex:0,
				mzArr:mingzu['mz'],//名族
				worker:mingzu['zhiye'],//职业
				xinzuo:mingzu['xingzuo'],
				isShowMesages:1,
				dialogImageUrl: '',
				dialogVisible: false,
				vc_province:'',//省
				vc_city:"",
				vc_area:"",
				vc_province1:'',//择偶时候的省
				formm:{n_money:'',n_sg:"",vc_province:"",vc_city:"",vc_area:"",n_tz:"",vc_xinzuo:"",vc_mz:"",n_ischild:"",n_jiehuntime:"",vc_loveplay:"",vc_descript:""},
				form1:{
						vc_worke:1,
						n_ishouse:1,
						n_iscar:2,
						n_smoke:1,
						n_alcohol:1
				},
				form2:{n_city:'',n_province:''},
				form5:{},
				form6:{},
				qxradio:1,//权限单选
				qxyy:1,//关闭原因
				pbid:"",
				autoInfo:{vc_nickname:'',n_min_age:''},
				autoData:{},
				provincearr:[],
			  citysarrs:[],
				areaarrs:[]
			}
		},
		computed:{
			// autoData(){
			// 	return this.$store.state.getpCode;
			// },
			maxNums(){
				return (prams1,prams2)=>{
						return prams1>prams2?prams1:prams2
				}
			}
		},
		methods:{
			slectInfo:function(index){
				this.myinf_index = index;
			},
			changeItems:function(index,type){
				for (var i=0;i<this.pannelList['myinfo_nav'].length;i++) {
					this.pannelList['myinfo_nav'][i]['active'] = 0;
				}
				if(!type){
					this.pannelList['myinfo_nav'][index]['active']=1;
					this.qxindex = 0;
				}else{
					this.qxindex = index;
				}
				//菜单选中信重新赋值
				switch (Number(index)) {
					case 0:
							this.setformmval();
							console.log(this.formm.n_money,"	this.formm.n_money")
						break;
					case 1:
							this.form1.vc_worke = Number(this.autoInfo.vc_worke);
							this.form1.n_ishouse = Number(this.autoInfo.n_ishouse);
							this.form1.n_iscar = 	Number(this.autoInfo.n_iscar);
							this.form1.n_smoke = Number(this.autoInfo.n_smoke);
							this.form1.n_alcohol = Number(this.autoInfo.n_alcohol);
						break;
					case 3:
							this.setform2();
						break;
			
				}
				this.myinf_index = index;
			},
			onSubmit:function(ints){
				this.isShowMesages = ints;
			},
			doLink:function(url){
				this.$router.push(url)
			},
			// 左侧菜单切换
			change1:function(prams){
				this.arrIndex = prams - 1;
			},
			 handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				console.log(this.dialogImageUrl,222)
				//this.dialogVisible = true;
			},
			// 获取省份
			getProvice: function(n) {
				this.provincearr=[];
			  this.citysarrs=[];
				this.areaarrs=[];
				if(localStorage.posPAC){
					var data =  JSON.parse(localStorage.posPAC);
					this.vc_province = this.provincearr = data.vc_province;
					this.citysarrs = data.vc_city;
					this.areaarrs = data.vc_area;
				}
			
			},
			//获取城市
			getCity: function(pid) {
				this.formm.vc_city = "";
				this.formm.vc_area ="";
				this.vc_city = [];
				var flag = 0;
				if(arguments.length>0){
					for(var i=0;i<arguments.length;i++){
							if(arguments[i]['istype']){
								flag = 1;
							}
					}
				}
				if(flag==0){
					this.form2.n_city = "";
				};
				
				for(var i=0;i<this.citysarrs.length;i++){
					if(this.citysarrs[i]['pid']==pid){
						this.vc_city.push(this.citysarrs[i])
					}
				}
			
			},
			//获取地区
			getArea: function(pid) {
				this.formm.vc_area ="";
				this.vc_area = [];
				for(var i=0;i<this.areaarrs.length;i++){
					if(this.areaarrs[i]['pid']==pid){
						this.vc_area.push(this.areaarrs[i])
					}
				}
				console.log(this.vc_area)
				// connetAction.ajaxPost(https['tree'], {
				// 		pid,
				// 		type: 3
				// 	})
				// 	.then(rd => {
				// 		// console.log(rd)
				// 		this.vc_area = rd.data;
				// 	})
				// 	.catch(res => {
				// 		console.log(res, "res")
				// 	})
			},
			addWsh:function(){ //基本工作
				let data = {
					id:5,
					vc_worke:'会计',
					n_ishouse:1,
					n_iscar:1,
					n_smoke:1,
					n_alcohol:1
				}
				connetAction.ajaxPost(https['addWsh'],data)
				.then((res)=>{
					
				})
				.catch((res)=>{
					
				})
			},
			updateInfo:function(){
				let data = {
					id:localStorage.openid,
					n_money:this.formm.n_money,
					n_sg:this.formm.n_sg,
					vc_province:this.formm.vc_province,
					vc_city:this.formm.vc_city,
					vc_area:this.formm.vc_area,
					n_tz:this.formm.n_tz,
					vc_xinzuo:this.formm.vc_xinzuo,
					vc_mz:this.formm.vc_mz,
					n_ischild:this.formm.n_ischild,
					n_jiehuntime:this.formm.n_jiehuntime,
					n_child:this.formm.n_child,
					vc_loveplay:this.formm.vc_loveplay,
					vc_descript:this.formm.vc_descript
				}
				// console.log(data,333)
				connetAction.ajaxPost(https['updateInfo'],data)
				.then((res)=>{
					if(res.status==1){
							
					}
				})
				.catch((res)=>{
					
				})
			},
			changPsw:function(){
				let data = {
					id:localStorage.openid,
					n_money:this.form6.vc_ordpassword,
					n_sg:this.form6.vc_newpassword,
				}
				console.log(data,333)
				return false;
				connetAction.ajaxPost(https['updateInfo'],data)
				.then((res)=>{
					
				})
				.catch((res)=>{
					
				})
			},
			autoCode: function() {
				connetAction.ajaxPost(https['getCode'], "")
					.then(rd => {
						this.autoData = rd.data;
						this.gzArr = 	this.autoData['2'];
							
						// 获得资料模板数据
						// this.setpCode(rd.data);
						//console.log(this.autoData)
					})
					.catch(res => {
						// console.log(res,"res")
					})
			},
			toastip:function(str,type){
				this.$message({
				  message:str ,
				  type: type||'warning'
				});
			},
			workUpdate:function(){
				let data = {
					id:localStorage.openid,
					vc_worke:this.form1.vc_worke,
					n_ishouse:this.form1.n_ishouse,
					n_iscar:this.form1.n_iscar,
					n_smoke:this.form1.n_smoke,
					n_alcohol:this.form1.n_alcohol,
				}
				if(!data['vc_worke']){
					this.toastip('请选择职业类别后再操作')
					return false;
				}
				if(!data['n_ishouse']){
					this.toastip('请选择买房情况后再操作')
					return false;
				}
				if(!data['n_iscar']){
					this.toastip('请选择买车情况后再操作')
					return false;
				}
				if(!data['n_smoke']){
					this.toastip('请选择是否吸烟后再操作')
					return false;
				}
				if(!data['n_alcohol']){
					this.toastip('请选择是否喝酒后再操作')
					return false;
				}
				console.log(data,333)
				
				connetAction.ajaxPost(https['addWsh'],data)
				.then((res)=>{
					
				})
				.catch((res)=>{
					
				})
			},
			updatezh:function(){
				let data = null;data=this.form2;
				data.id = localStorage.openid;
// 				if(!data['vc_worke']){
// 					this.toastip('请选择职业类别后再操作')
// 					return false;
// 				}
// 				if(!data['n_ishouse']){
// 					this.toastip('请选择买房情况后再操作')
// 					return false;
// 				}
// 				if(!data['n_iscar']){
// 					this.toastip('请选择买车情况后再操作')
// 					return false;
// 				}
// 				if(!data['n_smoke']){
// 					this.toastip('请选择是否吸烟后再操作')
// 					return false;
// 				}
// 				if(!data['n_alcohol']){
// 					this.toastip('请选择是否喝酒后再操作')
// 					return false;
// 				}
				console.log(data,333)
				
				connetAction.ajaxPost(https['updateZotj'],data)
				.then((res)=>{
					this.toastip(res.message)
				})
				.catch((res)=>{
					
				})
			},
			getInfos:function(){
				let data = {id:localStorage.openid};
				
				connetAction.ajaxPost(https['getInfo'],data)
				.then((res)=>{
					if(res.status==1){
							 this.autoInfo = res.data;
							// 初始化基本数据
							 this.setformmval();
							// 工作
							// this.toastip(res.message,"success");
					}else{
						this.toastip(res.message)
					}	
					
				})
				.catch((res)=>{
					
				})
			},
			setformmval:function(){
					this.formm.n_money = Number(this.autoInfo.n_money);
					this.formm.n_sg = Number(this.autoInfo.n_sg);
					this.formm.vc_province = 	Number(this.autoInfo.vc_province);
					this.getCity(this.autoInfo.vc_province);
					this.formm.vc_city = Number(this.autoInfo.vc_city);
					this.getArea(this.autoInfo.vc_city);
					this.formm.vc_area = Number(this.autoInfo.vc_area);
					this.formm.n_tz = Number(this.autoInfo.n_tz);
					this.formm.vc_xinzuo = Number(this.autoInfo.vc_xinzuo);
					this.formm.vc_mz = Number(this.autoInfo.vc_mz);
					this.formm.n_ischild = Number(this.autoInfo.n_ischild);
					this.formm.n_child = Number(this.autoInfo.n_child);
					this.formm.n_jiehuntime = Number(this.autoInfo.n_jiehuntime);
					this.formm.vc_loveplay = this.autoInfo.vc_loveplay;
					this.formm.vc_descript = this.autoInfo.vc_descript;
			},
			setform2:function(){
					// this.form2.n_min_age = Number(this.autoInfo.tiaojian.n_min_age);
					// this.form2.n_max_age = Number(this.autoInfo.tiaojian.n_max_age);
					// this.form2.n_min_sg = 	Number(this.autoInfo.tiaojian.n_min_sg);
					// this.form2.n_max_sg = Number(this.autoInfo.tiaojian.n_max_sg);
					// this.form2.n_min_tz = Number(this.autoInfo.tiaojian.n_min_tz);
					// this.form2.n_max_tz = Number(this.autoInfo.tiaojian.n_max_tz);
					// this.form2.n_money = Number(this.autoInfo.tiaojian.n_money);
					// alert(this.autoInfo.tiaojian.mincomerange)
					// this.form2.mincomerange = Number(this.autoInfo.tiaojian.mincomerange);
					// this.form2.n_xueli = Number(this.autoInfo.tiaojian.n_xueli);
					// this.form2.n_hyzk = Number(this.autoInfo.tiaojian.n_hyzk);
					// this.getArea(this.autoInfo.tiaojian.n_city);
					// this.autoInfo.tiaojian.n_city
					if(this.autoInfo.tiaojian){
						this.form2 = this.autoInfo.tiaojian;
						this.form2.n_city =  this.autoInfo.tiaojian.n_city;
						this.getCity(this.autoInfo.tiaojian.n_province,{istype:1});
					}
			},
			chanTile(){
				let str = "";
				switch (this.myinf_index){
					case 0:
						str = "基本资料"
						break;
					case 1:
						str = "工作生活"
						break;
					case 2:
						str = "个人相册"
						break;
					case 3:
						str = "择偶条件"
						break;
					case 4:
						str = "我的认证"
						break;
					case 5:
						str = "修改手机号码"
						break;
					case 6:
						str = "权限设置"
						break;
					case 7:
						str = "密码设置"
						break;	
					default:
						break;
				}
				return str;
			}
		},
		created(){
				this.autoCode();
				this.getInfos();
		},
		mounted(){
			this.getProvice();
			
			
		}
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.module_editinfo{
		width: 100%;
		min-height: 100%;
		background: #f3f3f3;
		padding-top: 80px;
		padding-bottom: 30px;
	}
	.followConten{
		width: 1200px;
		margin: auto;
		padding-top:1em;
	}
	.flex{
		display: flex;
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
	.liname{
		text-align: center;
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
		min-height: 400px;
		background: #fff;
		border-radius: 10px;
		border: 1px solid  transparent;
	}
	.headeicon{
		position: relative;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin:30px auto 10px;
		overflow: hidden;
	}
	.headeicon img{
		width: 100%;
		height: 100%;

	}
	.changimngbtn{
		display: none;
		position: absolute;
		bottom: 0px;
		width: 100%;
		left: 0;
		height: 80px;
		line-height: 80px;
		background: rgba(0,0,0,.5);
		text-align: center;
		font-size: 12px;
		color: #fff;
		cursor: pointer;
	}
	.headeicon:hover .changimngbtn{
		display: block;
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
	.user_name .start.active{
		background: url(../assets/img/start2.png) no-repeat;
	}
	.user_name .vip{
		background: url(../assets/img/vip1.png) no-repeat;
	}
	.user_name .vip.active{
		background: url(../assets/img/vip2.png) no-repeat;
	}
	.user_name .card{
		background: url(../assets/img/card1.png) no-repeat;
	}
	.user_name .card.active{
		background: url(../assets/img/card2.png) no-repeat;
	}
	.myulitem{
		padding-top: 1em;
	}
	.myulitem li{
		height:30px;
		padding:0em 1em;
		box-sizing: border-box;
	}
	.liclickitem{
		display: flex;
		height: 100%;
		justify-content:center;
		align-items: center;
		cursor: pointer;
	}
	.pannel_info{
		margin: auto;
		padding-left: 10%;
	}
	.tiemsmy{
		padding-left: 30px;
		height: 30px;
		cursor: pointer;
		line-height: 30px;
	}
	.tiemsmy:hover{
		background: rgba(139,118,249,.1);
	}
	.tiemsmy.ative{
		background: rgba(139,118,249,.1);
	}
	.infoframe1{
		padding-top: 30px;
		display: block;
		padding-left: 10%;
	}
	.no_photo{
		text-align: center;
		padding-top: 5%;
	}
	.no_photo_img{
		width: 135px;
		height: 133px;
	}
	.no_photo_tip{
		text-align: center;
		margin-bottom: 30px;
	}
	.showimg{
		width: 300px;
	}
	.photos{
		padding-left: 5%;
	}
	
	.renzheng li{
		width: 260px;
		height: 104px;
		display: flex;
		align-items: center;
		box-shadow: 0 0 3px rgba(0,0,0,.5);
		padding: 10px 20px;
		position: relative;
	}
	.rz-text{
		padding-left: 20px;
	}
	.rz_icon{
		flex: 0 0 60px;
		height: 60px;
		background: url(../assets/img/auth_name.19df08b.png) no-repeat;
		background-size:contain ;
	}
	.rz-text p{
		font-size: 14px;
		color: #666;
	}
	.button{
		position: absolute;
		width: 100px;
		height: 30px;
		background: #8b76f9;
		right: 0px;
		bottom: 10px;
		line-height: 30px;
		text-align: center;
		color: #fff;
		border-radius: 10px 0px 0  10px;
		cursor: pointer;
	}
	.radiosll{
		padding: 10px;
	}
</style>