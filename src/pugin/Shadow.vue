<template>
	<div class="public_shadows" v-if="xianshi!=1">
		 <div class="infobox">
			 <img src="../assets/img/dialog_auth_img.af97c77.png" alt="">
			 <div class="close" @click="close"></div>
		 </div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			str:"",
		}
	},
  props: {
    xianshi: {
		type:[Number,String,Boolean],
		default:0
	}, 
	shadowcall:{
		type:Function
	}
  },
  methods: {
	  close:function(){
		  this.shadowcall&&this.shadowcall();
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.public_shadows{
		position: fixed;
		z-index: 99;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.5);
	}
	.infobox{
		position: absolute;
		left: 0;
		right: 0;
		top: 30%;
		margin: auto;
		width: 420px;
		min-height: 300px;
		padding-bottom: 30px;
	}
	.close{
		width: 30px;
		height: 30px;
		background: url(../assets/img/dialog_close.b1ac449.png) no-repeat;
		background-size: contain;
		position: absolute;
		right: -10px;
		top: -10px;
		cursor: pointer;
	}
	.infobox img{
		width: 100%;
		height: 100%;
	}
</style>
