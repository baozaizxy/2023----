<!-- 能解决命名冲突 -->
<template>
	<div>
		<CountModule/>
		<hr>
		<PersonModule/>
	</div>
</template>

<script>
	import CountModule from './components/Count'
	import PersonModule from './components/Person'

	export default {
		name:'App',
		components:{CountModule,PersonModule},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
