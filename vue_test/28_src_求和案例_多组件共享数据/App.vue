<template>
	<div>
		<Count_multi/>
		<hr>
		<Person_multi/>
	</div>
</template>

<script>
	import Count_multi from './components/Count'
	import Person_multi from './components/Person'

	export default {
		name:'App',
		components:{Count_multi,Person_multi},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
