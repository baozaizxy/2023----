<!-- mapState和mapGetters是简化computed计算属性的一种写法 -->
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
