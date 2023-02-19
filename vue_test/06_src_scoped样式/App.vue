<template>
	<div>
		<h1 class="title">你好啊</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'
	// 解析时先看import  import引入顺序很重要 后来者居上 

	export default {
		name:'App',
		components:{School,Student}
	}
</script>

<style scoped>
	.title{
		color: red;
	}
</style>
