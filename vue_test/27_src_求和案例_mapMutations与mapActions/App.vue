<template>
	<div>
		<Count_map/>
	</div>
</template>

<script>
	import Count_map from './components/Count'
	export default {
		name:'App',
		components:{Count_map},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
