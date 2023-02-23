<template>
	<div>
		<Test_one/>
		<Test_two/>
		<Test_three/>
	</div>
</template>

<script>
	import Test_one from './components/Test'
	import Test_two from './components/Test2'
	import Test_three from './components/Test3'

	export default {
		name:'App',
		components:{Test_one,Test_two, Test_three},
	}
</script>
