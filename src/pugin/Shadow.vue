<template>
	<div class="public_shadows" v-if="isShadow==1">
		 <div class="infobox">
			 
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
    isShadow: {
		type:Number,
		default:1
	}, 
	
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.public_shadows{
		position: absolute;
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
		margin: auto;
		width: 420px;
		min-height: 300px;
		padding-bottom: 30px;
		background: #fff;
	}
</style>
