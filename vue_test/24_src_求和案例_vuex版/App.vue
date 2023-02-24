<template>
	<div>
		<CountTest/>
	</div>
</template>

<script>
	import CountTest from './components/Count'
	export default {
		name:'App',
		components:{CountTest},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
