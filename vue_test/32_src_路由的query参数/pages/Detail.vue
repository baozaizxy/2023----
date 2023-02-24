<template>
	<ul>
		<li>消息编号：{{$route.query.id}}</li>
		<li>消息标题：{{$route.query.title}}</li>
	</ul>
</template>

<script>
	export default {
		name:'DetailQuery',
		mounted() {
			// 能够得到这个组件相关的路由配置信息
			// 其中有path query等信息 也有__proto__：Object
			console.log(this.$route)
		},
	}
</script>