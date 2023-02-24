<!-- mapState和mapGetters是简化computed计算属性的一种写法 -->
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
