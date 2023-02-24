<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<SchoolBus/>
		<StudentBus/>
	</div>
</template>

<script>
	import StudentBus from './components/Student'
	import SchoolBus from './components/School'

	export default {
		name:'App',
		components:{SchoolBus,StudentBus},
		data() {
			return {
				msg:'你好啊！',
			}
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
