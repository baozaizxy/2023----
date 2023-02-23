<template>
	<div class="container">
		<Search_Component/>
		<List_Component/>
	</div>
</template>

<script>
// import形式引入 会有严格的检查 是否用到了不存在的资源
	import Search_Component from './components/Search'
	import List_Component from './components/List'
	export default {
		name:'App',
		components:{Search_Component,List_Component}
	}
</script>
