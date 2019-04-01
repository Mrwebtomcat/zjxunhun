<template>
	<div class="jmqy_chart" v-if="showChat">
		<div class="char_heade">
			<div class="imgbox"></div>
			<div class="metalist">
				<p class="chart_name">{{username}}</p>
				<p class="chart_meta">{{usertmeta}}</p>
			</div>
			<div class="textstate">{{input_state}}</div>
			<div class="closeChat" @click="colseChat">X</div>
		</div>
		<div class="char_body">
			<ul id="char_ul" ref="scrollUL">
				<li v-for="(item,index) in chartDate" :key="index" :class="item.state!=1?'my':''" >
					<div class="imghead" v-if="item.state==1"><img width="100%" src="https://i.zhenai.com/pc/portal/home/images/person.a2f3ceb.png" alt=""></div>
					<div class="liaotxt">{{item['chatTxt']}}</div>
					<div class="imghead" v-if="item.state!=1"><img width="100%" src="https://i.zhenai.com/pc/portal/home/images/person.a2f3ceb.png" alt=""></div>
				</li>
				<!-- <li v-for="(item,index) in chartDate" :key="index" class="my" v-if="item.state==0">
					<div class="liaotxt">{{item['chatTxt']}}</div>
					<div class="imghead"><img width="100%" src="https://i.zhenai.com/pc/portal/home/images/person.a2f3ceb.png" alt=""></div>
				</li> -->
				
			</ul>
		</div>
		<div class="charttool"></div>
		<div class="char_input">
			<el-input
			  type="textarea"
			  :rows="3"
			  placeholder="请输入内容"
			  v-model="textarea" @keydown.native="inchat($event)">
			</el-input>
			<div class="butbox">
				<el-button @click="guanbi">关闭</el-button>
				<el-button type="primary" @click="inchat('click')">发送(Eenter)</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			//用户聊天键入信息
			textarea:'',
			nowing:1,//正在输入  1    2 离开  3离线
// 			chartDate:[
// 				{
// 					state:1,//判断是聊天对象还是自己
// 					biaoqiang:'1',//聊天表情包
// 					chatTxt:'12312'//聊天内容
// 				},
// 				{
// 					state:0,
// 					biaoqiang:'1',
// 					chatTxt:'我是个猪头'
// 				}
// 			]
		}
	},
  props: {
	//正在聊天的用户名
    username: {
		type:[String,Number],
		default:'小白兔'
	}, 
	//用户描述
	usertmeta: {
		type:[String,Number],
		default:'我是一只可爱的兔子'
	}, 
	//用户输入状态
	input_state:{
		type:[String,Number],
		default:'正在输入....'
	},
	//显示聊天窗口
	showChat: {
		type:[Boolean,Number],
		default:1
	},
	//关闭聊天窗口
	closeFn:{
		type:[Function]
	},
	//回车发送消息的回调函数
	enterFn:{
		type:[Function]
	},
	Mofan:{
		type:[Function]
	},
	//聊天数据展示模板
	chartDate:{
		type:[Array,Object],
		default:()=>[
// 				{
// 					state:1,//判断是聊天对象还是自己
// 					biaoqiang:'1',//聊天表情包
// 					chatTxt:'12312'//聊天内容
// 				},
// 				{
// 					state:0,
// 					biaoqiang:'1',
// 					chatTxt:'我是个猪头'
// 				}
		]
	}
	
  },
  methods: {
  	inchat:function(event){
  		if (event.keyCode === 13||event=='click') {
  			if(this.textarea!=""&&this.textarea.trim()!=""){
  				// this.chartDate.push({state:0,chatTxt:this.textarea});
				this.enterFn(this.textarea)
  				//在vue中操作dom尽量用ref, 但它不是响应式的
  				this.$nextTick(()=>{this.$refs.scrollUL.scrollTop = this.$refs.scrollUL.scrollHeight});
  				this.textarea = "";
  			}
  		}
  	},
	guanbi:function(){
		if(this.textarea!=""&&this.textarea.trim()!=""){
			this.Mofan(this.textarea);
			this.$nextTick(()=>{this.$refs.scrollUL.scrollTop = this.$refs.scrollUL.scrollHeight});
			this.textarea = "";
		}
	},
	colseChat:function(){
		this.closeFn()
	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.jmqy_chart{
		width: 45%;
		height: 83%;
		background: #fff;
		position: fixed;
		z-index: 9999;
		top:90px;
		left: 0;
		right: 0;
		margin: auto;
		box-shadow: 0 0 10px rgba(0,0,0,.5);
	}
	.char_heade{
		height: 11%;
		display: flex;
		align-items: center;
		position: relative;
	}
	.textstate{
		width: 200px;
		height: 60px;
		line-height: 60px;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		text-align: center;
	}
	.closeChat{
		position: absolute;
		top: 0;
		right: 0;
		padding: 10px;
		font-size: 20px;
		cursor: pointer;
	}
	.char_body{
		height:60% ;
		background: #f5f5f5;
	}
	.imgbox{
		width: 40px;
		height: 40px;
		background: red;
		border-radius: 10px;
		margin-left: 30px;
	}
	.metalist{
		 padding-left: 20px;
	}
	.chart_name{
		font-size: 14px;
		color: #333;
	}
	.chart_meta{
		font-size: 12px;
		color: #999;
	}
	.char_body ul{
		height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.char_body ul li{
		min-height: 50px;
		display: flex;
		align-items: center;
		padding: 10px;
		position: relative;
	}
	.char_body ul li.my{
		justify-content: flex-end;
	}
	.imghead{
		width: 30px;
		height: 30px;
		background: paleturquoise;
		margin-right: 20px;
	}
	.liaotxt{
		font-size: 16px;
		background: #fff;
		padding: 10px 20px;
		position: relative;
		max-width: 25em;
	}
	.liaotxt:before{
		position: absolute;
		left: -8px;
		top: 0;
		bottom: 0;
		display: block;
		content: "";
		width:0;
		height:0;
		margin: auto;
		border-width:0 15px 15px;
		border-style:solid;
		border-color:transparent transparent #fff;/*透明 透明  灰*/
		transform: rotate(20deg);
	}
	.my .liaotxt{
		background: greenyellow;
	}
	.my .liaotxt:before{
		display: none;
		/* left: 89%;
		transform: rotate(-20deg);
		border-color:transparent transparent greenyellow;/*透明 透明  灰*/ 
	}
	.my .liaotxt:after{
		position: absolute;
		right: -8px;
		top: 0;
		bottom: 0;
		display: block;
		content: "";
		width:0;
		height:0;
		margin: auto;
		border-width:0 15px 15px;
		border-style:solid;
		transform: rotate(-20deg);
		border-color:transparent transparent greenyellow;/*透明 透明  灰*/
	}
	.my .imghead{
		background: paleturquoise;
		margin-left: 20px;
		margin-right: 0;
	}
	.char_input{
		padding: 10px;
	}
	.charttool{
		height: 30px;
		border: 1px solid #ddd;
	}
	.butbox{
		padding-top: 10px;
		display: flex;
		justify-content: flex-end;
	}
</style>
