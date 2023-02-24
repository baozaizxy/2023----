<template>
	<div>
		<TestOne/>
		<TestTwo/>
		<TestThree/>
	</div>
</template>

<script>
	import TestOne from './components/Test'
	import TestTwo from './components/Test2'
	import TestThree from './components/Test3'

	export default {
		name:'App',
		components:{TestOne,TestTwo, TestThree},
	}
</script>
