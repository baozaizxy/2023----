<template>
	<div>
		<h1 class="title">你好啊</h1>
		<SchoolScoped/>
		<StudentScoped/>
	</div>
</template>

<script>
	import StudentScoped from './components/Student'
	import SchoolScoped from './components/School'
	// 解析时先看import  import引入顺序很重要 后来者居上 

	export default {
		name:'App',
		components:{SchoolScoped,StudentScoped}
	}
</script>

<style scoped>
	.title{
		color: red;
	}
</style>
