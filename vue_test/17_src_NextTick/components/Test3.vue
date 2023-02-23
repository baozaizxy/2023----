<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!--name属性为animate官网要求 引入后用该方法配置才可使用  -->
		<!-- 包在transition有效果 -->
		<transition-group 
			appear
			name="animate__animated animate__bounce" 
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
		>
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">SHERRY!</h1>
		</transition-group>
	</div>
</template>

<script>
	import 'animate.css'
	export default {
		name:'Test_three',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	

</style>