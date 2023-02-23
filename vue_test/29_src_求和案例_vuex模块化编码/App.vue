<!-- 能解决命名冲突 -->
<template>
	<div>
		<Count_module/>
		<hr>
		<Person_module/>
	</div>
</template>

<script>
	import Count_module from './components/Count'
	import Person_module from './components/Person'

	export default {
		name:'App',
		components:{Count_module,Person_module},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
