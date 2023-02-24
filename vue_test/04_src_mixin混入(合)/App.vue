<template>
	<div>
		<SchoolMixin/>
		<hr>
		<StudentMixin/>
	</div>
</template>

<script>
	import SchoolMixin from './components/School'
	import StudentMixin from './components/Student'

	export default {
		name:'App',
		components:{SchoolMixin,StudentMixin}
	}
</script>
