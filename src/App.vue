<template>
  <div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<!-- <script>
import {connetAction,message,regPhone,setKey,getKey} from "./utils/index.js"
import https from "./utils/Https.js"
export default {
	data(){
		return{
			user:"",
			psw:"",
			
		}
	},
	methods:{
		gotoreg:function(){},
	},
	mounted(){
		
	}
}
</script> -->
<style scoped>
#app{
	width: 100%;
	height: 100%;
  font-family :'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
	}

/* #nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983 */
</style>
