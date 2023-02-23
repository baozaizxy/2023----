<template>
	<div>
		<Count_test/>
	</div>
</template>

<script>
	import Count_test from './components/Count'
	export default {
		name:'App',
		components:{Count_test},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
