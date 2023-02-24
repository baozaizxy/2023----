<template>
	<div class="container">
		<APPSearch/>
		<APPList/>
	</div>
</template>

<script>
	import APPSearch from './components/Search'
	import APPList from './components/List'
	export default {
		name:'App',
		components:{APPSearch,APPList}
	}
</script>
