<template>
	<div>
		<CountGetters/>
	</div>
</template>

<script>
	import CountGetters from './components/Count'
	export default {
		name:'App',
		components:{CountGetters},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
