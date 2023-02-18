<template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
	// 分别暴露export const school=vue.extend(){}
	// 统一暴露 最后export{school}
	// 默认暴露 最后export default school;
	 export default {
		name:'School',
		data(){
			return {
				name:'CHD',
				address:'草滩一路'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>