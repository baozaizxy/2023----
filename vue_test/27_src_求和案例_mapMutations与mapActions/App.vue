<template>
	<div>
		<CountMap/>
	</div>
</template>

<script>
	import CountMap from './components/Count'
	export default {
		name:'App',
		components:{CountMap},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
