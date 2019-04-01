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
						</div>
						<div class="user_name">
							按时大撒大撒
						</div>
						<div class="user_name iconbox">
							<span class="start"></span>
							<span class="vip"></span>
							<span class="card"></span>
						</div>
						<div class="pannel_info">
							<el-collapse v-model="activeName" accordion  @change="change1">
							  <el-collapse-item title="个人资料" name="1">
								<div v-for="(itmes,index) in pannelList['myinfo_nav']"  :class="itmes.active==1?'tiemsmy ative':'tiemsmy'"  :key="index" @click="changeItems(index)">{{itmes.contxt}}</div>
							  </el-collapse-item>
							  <el-collapse-item title="系统设置" name="2">
								<div class="tiemsmy" :class="qxindex==5?'tiemsmy ative':'tiemsmy'"  @click="changeItems(5,1)">权限设置</div>
								<div class="tiemsmy" :class="qxindex==6?'tiemsmy ative':'tiemsmy'"  @click="changeItems(6,1)">密码设置</div>
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
							<el-form ref="form" :model="form" label-width="80px">
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
							  </el-form-item>
							  <div class="flex">
								  <el-form-item label="月收入:">
									<el-select v-model="form.region" placeholder="12000元">
									  <el-option label="5000元" value="rmb5000"></el-option>
									  <el-option label="9000元" value="rmb9000"></el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="身高:">
									<el-select v-model="form.tall" placeholder="170cm">
									  <el-option label="170cm" value="tall170"></el-option>
									  <el-option label="175cm" value="tall175"></el-option>
									</el-select>
								 </el-form-item>
							  </div>
							  <div class="flex">
								  <el-form-item label="工作地区:">
									<el-select v-model="form.workcity" placeholder="请选择省份">
									  <el-option label="北京" value="11"></el-option>
									  <el-option label="海南" value="12"></el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="" label-width="20px">
									<el-select v-model="form.workarea" placeholder="请选择市区">
									   <el-option label="深圳" value="11"></el-option>
									 <el-option label="湛江" value="12"></el-option>
									</el-select>
								 </el-form-item>
							  </div>
							 <div class="flex">
								  <el-form-item label="体重:">
									<el-select v-model="form.weight" placeholder="请选择">
									  <el-option label="30Kg" value="30"></el-option>
									  <el-option label="50kg" value="50"></el-option>
									  <el-option label="60kg" value="60"></el-option>
									  <el-option label="70kg" value="70"></el-option>
									  <el-option label="80kg" value="80"></el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="星座:" label-width="80px">
									<el-select v-model="form.xingzuo" placeholder="请选择">
									   <el-option label="白羊座" value="baiyang"></el-option>
									 <el-option label="金牛座" value="jinniu"></el-option>
									</el-select>
								 </el-form-item>
							</div>
							<div class="flex">
								  <el-form-item label="民族:">
									<el-select v-model="form.mz" placeholder="请选择">
										<el-option v-for="(item,index) in mzArr" :key="index" :label="item.name" :value="item.val"></el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="有没有孩子:" label-width="100px">
									<el-select v-model="form.child" placeholder="">
									   <el-option label="没有孩子" value="1"></el-option>
									 <el-option label="有孩子且住在一起" value="2"></el-option>
									 <el-option label="有孩子且偶尔会一起住" value="3"></el-option>
									 <el-option label="有孩子但不在身边" value="4"></el-option>
									</el-select>
								 </el-form-item>
							</div>
							 <div class="flex">
								 <el-form-item label="何时结婚:">
										<el-select v-model="form.jiehun" placeholder="请选择">
										  <el-option label="认同闪婚" value="1"></el-option>
										  <el-option label="一年内" value="2"></el-option>
										  <el-option label="两年内" value="3"></el-option>
										  <el-option label="三年内" value="4"></el-option>
										  <el-option label="时机成熟就结婚" value="5"></el-option>
										</el-select>
								 </el-form-item> 
								 <el-form-item label="是否想要孩子:" label-width="120px">
									<el-select v-model="form.haschild" placeholder="请选择">
									   <el-option label="视情况而定" value="1"></el-option>
									 <el-option label="想要孩子" value="2"></el-option>
									 <el-option label="不想要孩子" value="3"></el-option>
									 <el-option label="以后再告诉你" value="4"></el-option>
									</el-select>
								 </el-form-item>
								  
							</div>
							<div style="width:80%;">
								<el-form-item label="兴趣爱好:">
									<div>喜欢的一道菜，欣赏的一个名人，喜欢的一首歌，喜欢的一本书，喜欢做的事</div>
									<el-input type="textarea" placeholder="说出你的兴趣爱好....." v-model="form.jieshao"></el-input>
								</el-form-item>
							</div>
							<div style="width:80%;">
								<el-form-item label="活动形式:">
									<div>介绍一下自己，描述一下理想的伴侣，说说你对婚姻的期望</div>
									<el-input type="textarea" placeholder="说出你的故事....." v-model="form.jieshao"></el-input>
								</el-form-item>
							</div>
							  
							  <el-form-item>
								<el-button type="primary" @click="onSubmit">保存修改</el-button>
							  </el-form-item>
							</el-form>
						</div>
						<div class="infoframe1" v-if="myinf_index==1" >
							<el-form ref="form" :model="form1" label-width="80px">
							    <div class="flex">
								  <el-form-item label="职业类别:">
									<el-select v-model="form1.workcalss" placeholder="请选择">
									  <el-option v-for="(wokeritem,i) in worker"  :label="wokeritem.name" :value="wokeritem.val"  :key="i"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								 <div class="flex">
								  <el-form-item label="买房情况:">
									<el-select v-model="form1.hashours" placeholder="请选择">
									  <el-option label="和家人住" value="1"></el-option>
									  <el-option label="已购房" value="2"></el-option>
									  <el-option label="租房" value="3"></el-option>
									  <el-option label="打算婚后购房" value="4"></el-option>
									  <el-option label="在单位宿舍住" value="5"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								 <div class="flex">
								  <el-form-item label="买车情况:">
									<el-select v-model="form1.cart" placeholder="请选择">
									  <el-option label="已购买" value="2"></el-option>
									  <el-option label="未购买" value="3"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否吸烟:">
									<el-select v-model="form1.smokec" placeholder="请选择">
									  <el-option label="不吸烟" value="1"></el-option>
									  <el-option label="稍微抽一点烟" value="2"></el-option>
									  <el-option label="烟抽得很多" value="3"></el-option>
									  <el-option label="社交场合会抽烟" value="4"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否喝酒:">
									<el-select v-model="form1.drinkhocl" placeholder="请选择">
									  <el-option label="不喝酒" value="1"></el-option>
									  <el-option label="稍微喝一点酒" value="2"></el-option>
									  <el-option label="酒喝得很多" value="3"></el-option>
									  <el-option label="社交场合会喝酒" value="4"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								
							  <el-form-item>
								<el-button type="primary" @click="onSubmit">保存修改</el-button>
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
							<el-form ref="form" :model="form1" label-width="80px">
							    <div class="flex">
								  <el-form-item label="年龄:">
									<el-select v-model="form2.age" placeholder="请选择">
									  <el-option v-for="(ageitem,i) in 90" v-if="ageitem>=18"  :label="ageitem" :value="ageitem"  :key="i"></el-option>
									</el-select>
								  </el-form-item> 
								 <div style="line-height: 40px;margin-left: 25px;"> 至</div>
								  <el-form-item label="" label-width="30px">
									<el-select v-model="form2.agerange" placeholder="请选择">
									  <el-option v-for="(ageitem,i) in 90" v-if="ageitem>=18"  :label="ageitem" :value="ageitem"  :key="i"></el-option>
									</el-select>
								  </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="身高:">
									<el-select v-model="form2.tall" placeholder="请选择">
									  <el-option v-for="(tallitem,i) in 200" v-if="tallitem>=150"  :label="tallitem" :value="tallitem"  :key="i"></el-option>
									</el-select>
								  </el-form-item> 
								 <div style="line-height: 40px;margin-left: 25px;"> 至</div>
								  <el-form-item label="" label-width="30px">
									<el-select v-model="form2.tallrange" placeholder="请选择">
									  <el-option v-for="(tallitem,i) in 200" v-if="tallitem>=150"  :label="tallitem" :value="tallitem"  :key="i"></el-option>
									</el-select>
								  </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="月收入">
									<el-select v-model="form2.mincome" placeholder="请选择">
									  <el-option v-for="(moneyitem,i) in 20000" v-if="moneyitem%1000==0&&moneyitem>=2000"  :label="moneyitem" :value="moneyitem"  :key="i"></el-option>
									</el-select>
								  </el-form-item> 
								 <div style="line-height: 40px;margin-left: 25px;"> 至</div>
								  <el-form-item label="" label-width="30px">
									<el-select v-model="form2.mincomerange" placeholder="请选择">
									  <el-option v-for="(moneyrange,i) in 20000" v-if="moneyrange%1000==0&&moneyrange>=2000"  :label="moneyrange" :value="moneyrange"  :key="i"></el-option>
									</el-select>
								  </el-form-item> 
								</div>
								 <div class="flex">
								  <el-form-item label="学历:">
									<el-select v-model="form2.xueli" placeholder="请选择">
									  <el-option label="不限" value="1"></el-option>
									  <el-option label="初中" value="2"></el-option>
									  <el-option label="高中" value="3"></el-option>
									  <el-option label="大专" value="4"></el-option>
									  <el-option label="本科" value="5"></el-option>
									  <el-option label="研究生" value="6"></el-option>
									  <el-option label="博士" value="7"></el-option>
									  <el-option label="硕士" value="8"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								 <div class="flex">
								  <el-form-item label="婚姻:">
									<el-select v-model="form2.hunyin" placeholder="请选择">
									  <el-option label="不限" value="1"></el-option>
									  <el-option label="未婚" value="3"></el-option>
									  <el-option label="离异" value="3"></el-option>
									  <el-option label="丧偶" value="3"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="体型:">
									<el-select v-model="form2.tixing1" placeholder="请选择">
									  <el-option label="瘦长" value="1"></el-option>
									  <el-option label="保密" value="2"></el-option>
									  <el-option label="一般" value="3"></el-option>
									  <el-option label="苗条" value="4"></el-option>
									  <el-option label="高大美丽" value="4"></el-option>
									  <el-option label="富线条美" value="4"></el-option>
									  <el-option label="丰满" value="4"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="工作地区:">
									<el-select v-model="form2.wokearea" placeholder="请选择">
									  <el-option label="北京" value="1"></el-option>
									  <el-option label="上海" value="2"></el-option>
									  <el-option label="广东" value="3"></el-option>
									  <el-option label="云南" value="4"></el-option>
									</el-select>
								 </el-form-item> 
								 <el-form-item label="" label-width="30px">
											<el-select v-model="form2.wokearea" placeholder="请选择">
											  <el-option label="北京" value="1"></el-option>
											  <el-option label="上海" value="2"></el-option>
											  <el-option label="广东" value="3"></el-option>
											  <el-option label="云南" value="4"></el-option>
											</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="有没有孩子:" label-width="100px">
									<el-select v-model="form2.ischild" placeholder="请选择">
									  <el-option label="不限" value="1"></el-option>
									  <el-option label="没有小孩" value="2"></el-option>
									  <el-option label="有孩子且住一起" value="3"></el-option>
									  <el-option label="有孩子且偶尔住一起" value="4"></el-option>
									  <el-option label="有孩子但不在身边" value="5"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否想要孩子:" label-width="100px">
									<el-select v-model="form2.havechild" placeholder="请选择">
									  <el-option label="不限" value="1"></el-option>
									  <el-option label="视情况而定" value="2"></el-option>
									  <el-option label="想要孩子" value="3"></el-option>
									  <el-option label="不想要孩子" value="4"></el-option>
									  <el-option label="以后再告诉你" value="5"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否可以吸烟:" label-width="100px">
									<el-select v-model="form2.ismock" placeholder="请选择">
									  <el-option label="不限" value="1"></el-option>
									  <el-option label="可以吸烟" value="2"></el-option>
									  <el-option label="不要吸烟" value="3"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="是否可以喝酒:" label-width="100px">
									<el-select v-model="form2.alcohol" placeholder="请选择">
									  <el-option label="不限" value="1"></el-option>
									  <el-option label="可以喝酒" value="2"></el-option>
									  <el-option label="不要喝酒" value="3"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
								<div class="flex">
								  <el-form-item label="有没有照片:" label-width="100px">
									<el-select v-model="form2.isphonto" placeholder="请选择">
									  <el-option label="不限" value="1"></el-option>
									  <el-option label="有" value="2"></el-option>
									</el-select>
								 </el-form-item> 
								</div>
							  <el-form-item>
								<el-button type="primary" @click="onSubmit">保存修改</el-button>
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
						<!-- 权限设置 -->
						<div class="infoframe1" v-if="myinf_index==5"  >
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
						
						<div class="infoframe1" v-if="myinf_index==6"  >
							密码修改
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
						}
					]
				},
				qxindex:0,
				mzArr:mingzu['mz'],//名族
				worker:mingzu['zhiye'],//职业
				isShowMesages:1,
				dialogImageUrl: '',
				dialogVisible: false,
				form:{},
				form1:{},
				form2:{},
				qxradio:1,//权限单选
				qxyy:1,//关闭原因
				pbid:""
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
				this.myinf_index = index;
			},
			onSubmit:function(ints){
				this.isShowMesages = ints;
			},
			doLink:function(url){
				this.$router.push(url)
			},
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
						str = "权限设置"
						break;
					case 6:
						str = "密码设置"
						break;	
					default:
						break;
				}
				return str;
			}
		},
		mounted(){
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