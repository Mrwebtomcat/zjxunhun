import chatPanel from './ChatPannel.vue'
const chatPan = {
	install:function(Vue){
		Vue.component("chatPan",chatPanel)
	}
}
export default chatPan