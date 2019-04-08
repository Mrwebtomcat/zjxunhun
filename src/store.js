import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		userinfo:{
			id:5
		},
		// 页面静态模板数据
		getpCode:{},
		positionData:{
			vc_province:{},
			vc_city:{},	
			vc_area:{}
		}
  },
  mutations: {
		changInfo:function(state,data){
			state.userinfo = data
		},
		setpCode:function(state,data){
			state.getpCode = data;
		},
		setPosition:function(state,data){
			state.positionData = data
		}
  },
//   actions: {
// 
//   }
})
