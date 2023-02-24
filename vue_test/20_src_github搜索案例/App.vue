<template>
	<div class="container">
		<SearchComponent/>
		<ListComponent/>
	</div>
</template>

<script>
// import形式引入 会有严格的检查 是否用到了不存在的资源
	import SearchComponent from './components/Search'
	import ListComponent from './components/List'
	export default {
		name:'App',
		components:{SearchComponent,ListComponent}
	}
</script>
