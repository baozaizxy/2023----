<template>
	<div>
		<CountMulti/>
		<hr>
		<PersonMulti/>
	</div>
</template>

<script>
	import CountMulti from './components/Count'
	import PersonMulti from './components/Person'

	export default {
		name:'App',
		components:{CountMulti,PersonMulti},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
