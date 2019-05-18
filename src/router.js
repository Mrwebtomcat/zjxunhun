import Vue from 'vue'
import Router from 'vue-router'
// 登陆
import Login from './views/Login.vue'
// 注册
import Register from './views/Register.vue'
// 首页
import Home from './views/Home.vue'
// VIP充值
import Vip from './views/Vip.vue'
//星级充值
import Start from './views/Start.vue'
//关注
import Follow from './views/Follow.vue'
//信息通知
import Information from './views/Information.vue'
// 用户资料
import UserInfo from './views/UserInfo.vue'
// 完善个人资料
import EditInfo from './views/EditInfo.vue'
//红娘
import Hongniang from './views/Hongniang.vue'
// 门店
import Shop from './views/Shop.vue'
// 店铺搜索
import Search from './views/Search.vue'
//浏览记录
import Browse from './views/Browse.vue'
//身份认证
import IDCard from './views/IDCard.vue'
// 忘记密码
import GetPsw from './views/GetPsw.vue'

Vue.use(Router)
let indexRouter;
export default indexRouter = new Router({
	// mode: 'history',
// 	base: process.env.BASE_URL,
	routes: [
		{
			path: '/Hongniang',
			name: 'hongniang',
			component: Hongniang,
			meta: {
				title: "金梦情缘"
			}
		},
		{
			path: '/shop',
			name: 'shop',
			component: Shop,
			meta: {
				title: "门店地址"
			}
		},
		{
			path: '/Search',
			name: 'search',
			component: Search,
			meta: {
				title: "情缘搜索"
			}
		},	
		{
			path: '/Browse',
			name: 'browse',
			component: Browse,
			meta: {
				title: "我的浏览"
			}
		},
		{
			path: '/IDCard',
			name: 'idcard',
			component: IDCard,
			meta: {
				title: "身份认证"
			}
		},
		{
			path: '/',
			name: 'login',
			component: Login,
			meta: {
				title: "登陆"
			}
		},
		{
			path: '/GetPsw',
			name: 'getpsw',
			component: GetPsw,
			meta: {
				title: "找回密码"
			}
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				title: "我的寻婚",
			}
		},
		{
			path: '/Follow',
			name: 'follow',
			component: Follow,
			meta: {
				title: "我的关注"
			}
		},
		{
			path: '/Information',
			name: 'information',
			component: Information,
			meta: {
				title: "消息中心"
			}
		},
		{
			path: '/UserInfo',
			name: 'userinfo',
			component: UserInfo,
			meta: {
				title: "用户资料"
			}
		},
		{
			path: '/editinfo',
			name: 'editinfo',
			component: EditInfo,
			meta: {
				title: "完善资料"
			}
		},
		{
			path: '/Start',
			name: 'start',
			component: Start,
			meta: {
				title: "星级充值",
			}
		},
		{
			path: '/Vip',
			name: 'vip',
			component: Vip,
			meta: {
				title: "会员充值"
			}
		},
		{
			path: '/Register',
			name: 'register',
			component: Register,
			meta: {
				title: "注册"
			}


			// route level code-rsplitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
})
indexRouter.beforeEach(function(to, from, next) {
	const meta = to.meta || {};
	if (meta.title) { //如果设置标题，拦截后设置标题
		if(to.params.hasOwnProperty('detailname')&&to.params.hasOwnProperty('detailname')!=""){
			document.title = to.params.detailname
		}else{
			document.title = meta.title;
		}
	}
		// 判断是否登录
	if(to.fullPath=="/register"||to.fullPath=="/getPsw"){
		next();
		return false
	}
	
	if(!localStorage.openid){
		if(to.fullPath!="/"){
			next("/")
			return false;
		}
	}
	//document.body.scrollTop = 0;
	next();
})
// 每次条路由重设scrollTop值
indexRouter.afterEach(function (to) {
 window.scrollTo(0, 0)
})