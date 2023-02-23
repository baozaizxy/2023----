<template>
	<div>
		<Count_getters/>
	</div>
</template>

<script>
	import Count_getters from './components/Count'
	export default {
		name:'App',
		components:{Count_getters},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
