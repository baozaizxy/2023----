<template>
	<div>
		<img src="./assets/logo.png" alt="logo">
		<SchoolCli></SchoolCli>
		<!-- 自闭和在非脚手架里容易出现问题 但是这里是脚手架 就可以直接<school/> -->
		<StudentCli></StudentCli>
	</div>
</template>

<script>
	//引入组件
	import SchoolCli from './components/School'
	import StudentCli from './components/Student'

	export default {
		name:'App',
		components:{
			SchoolCli,
			StudentCli
		}
	}
</script>
