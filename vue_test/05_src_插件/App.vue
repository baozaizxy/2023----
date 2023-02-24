<template>
	<div>
		<SchoolPlugin/>
		<hr>
		<StudentPlugin/>
	</div>
</template>

<script>
	import SchoolPlugin from './components/School'
	import StudentPlugin from './components/Student'

	export default {
		name:'App',
		components:{SchoolPlugin,StudentPlugin}
	}
</script>
