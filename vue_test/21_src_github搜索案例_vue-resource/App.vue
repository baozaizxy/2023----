<template>
	<div class="container">
		<APP_Search/>
		<APP_List/>
	</div>
</template>

<script>
	import APP_Search from './components/Search'
	import APP_List from './components/List'
	export default {
		name:'App',
		components:{APP_Search,APP_List}
	}
</script>
