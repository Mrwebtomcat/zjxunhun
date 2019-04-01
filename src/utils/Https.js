// INTERFACE MODULE
// const baseURL = "http://10.10.2.27/zjxh/public/index.php"
const baseURL = "http://server.zjxunhun.com/index.php/"
let INTERFACE = {
	login:'/login/login',						//登陆
	/*
		注册参数：{
			vc_userphone:用户
			vc_password：密码
		}
		返回id ； 用户的id 
	*/
	register:'login/register',					//注册
	getSmsCode:'login/getSmsCode',				//验证码  params {type:, 1 注册验证码 2  重置验证码 vc_userphone:,用户手机}
	forgotPassWord:'login/forgotPassWord',		//忘记密码
	checkPhone:'login/checkPhone',				//忘记密码发送验证码确认是否是本人手机号码 params{vc_userphone:,code }
	getCode:'index/getCode',					//返回所有系统编码值
	//tree返回三级联动的地区表  {pid:默认不传参请求该接口的id，type:1默认不用传： 2省 3 市}
	tree:'index/tree',					      
	/*
	
	*/
	index:'/index/homeInfo',					//首页接口
	addWsh:'/user/addWsh',					//工作生活
	sendMsg:'/weservice/sendMsg',				//获取短信验证码
	bindAccount:'/weservice/bindAccount',		//绑定销售/技师
	checkBind:'/weservice/checkBind',			//获取短信验证码
	historyCount:'/weservice/historyCount',		//历史业绩提成统计
	salesBusiness:'/weservice/salesBusiness',	//销售业绩流水
	masterBusiness:'/weservice/masterBusiness'	//技师业绩流水
}
for(var key in INTERFACE){
	INTERFACE[key] = baseURL+ INTERFACE[key]
}
export default INTERFACE;