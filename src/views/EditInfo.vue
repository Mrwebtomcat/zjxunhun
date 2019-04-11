<!-- 完善个人资料 -->
<template>
  <div class="module_editinfo">
		<Header :isHeader="1" :ative="0" style="posistion:relative;z-index: 1000;"></Header>
		<div class="followConten">
			
			<el-row class="selrow" :gutter="24" style="margin-left: 0;text-align: left;">
				<el-col :span="6" style="margin-left: 0;">
					<div class="right_mysel">
						<div class="headeicon">
							<img v-if="infoHeadImg!=''" :src="infoHeadImg" alt="">
							<img v-else src="https://photo.zastatic.com/images/cms/banner/20181121/8311191311554389.png?scrop=1&crop=1&cpos=north&w=80&h=80" alt="">
							<label for="headimgupload"><div class="changimngbtn">修改头像</div></label>
							<input id="headimgupload" type="file"  accept="image/jpeg,image/x-png,image/gif"  value="" @change="updateLogo" />
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
								 <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
								<el-upload
								  list-type="picture-card"
								  action="http://server.zjxunhun.com/index.php/user/updateLogo"
								  :on-preview="handlePictureCardPreview"
								  :http-request="httpRequest"
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
				infoHeadImg:'',
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
				vc_province:[],//省
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
				this.dialogVisible = true;
			},
			httpRequest:function(options){
				let file = options.file;
				let filename = file.name;
				if (file) {
				this.fileReader.readAsDataURL(file);
				}
				var that  = this;
				this.fileReader.onload = () => {
					let base64Str = this.fileReader.result;
					that.infoHeadImg = base64Str;
					console.log(that.infoHeadImg,33333);
					let config = {
					  url: '/api/file/upload/base64',
					  method: 'post',
					  // file: file,
					  data: {
						base64Str: base64Str.split(',')[1],
						name: filename
					  },
					  timeout: 10000,
					  onUploadProgress: function (progressEvent) {
						// console.log(progressEvent)
						progressEvent.percent = progressEvent.loaded / progressEvent.total * 100
						options.onProgress(progressEvent, file)
					  },
					}
				}
			},
			// 获取省份
			getProvice:function(n) {
				this.provincearr=[];
				this.citysarrs=[];
				this.areaarrs=[];
				var arrs = [];
				if(localStorage.posPAC){
					this.provincearr =  JSON.parse(localStorage.posPAC);
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
			uploadImg:function(){
				let data = {
					id:localStorage.openid,
					vc_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"
				}
				
				connetAction.ajaxPost(https['addAlbum'],data)
				.then((res)=>{
					console.log(res,222)
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
			updateLogo:function(e){
				let data = {
					id:localStorage.openid,
					vc_img:""
				};
				var that=this;
				var file = e.target.files[0];
				var imgSize=file.size/1024;
				if(imgSize>400){
					alert('请上传大小不要超过400KB的图片')
				}else{
					var reader = new FileReader();
					reader.readAsDataURL(file); // 读出 base64
					reader.onloadend = function () {
						// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
						data.vc_img = reader.result;
						that.infoHeadImg = data.vc_img;
						connetAction.ajaxPost(https['updateLogo'],data)
						.then((res)=>{
							if(res.status==1){
								console.log(res)
							}else{
								this.toastip(res.message)
							}	
							
						})
						.catch((res)=>{
							
						})
						
					};
                }

				
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
							 this.infoHeadImg =  this.autoInfo['vc_img'];
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
				this.uploadImg();
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
	#headimgupload{
		display: none;
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