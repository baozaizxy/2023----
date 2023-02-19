<template>
	<div>
		<img src="./assets/logo.png" alt="logo">
		<School></School>
		<!-- 自闭和在非脚手架里容易出现问题 但是这里是脚手架 就可以直接<school/> -->
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School'
	import Student from './components/Student'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
