<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<SchoolPubsub/>
		<StudentPubsub/>
	</div>
</template>

<script>
	import StudentPubsub from './components/Student'
	import SchoolPubsub from './components/School'

	export default {
		name:'App',
		components:{SchoolPubsub,StudentPubsub},
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
