<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'SchoolPubsub',
		data() {
			return {
				name:'CHD',
				address:'草滩一路',
			}
		},
		mounted() {
			// console.log('School',this)
			/* this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			}) */
			// 此处有id 像定时器 我咋不记得定时器有id？
			this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
				console.log(this)
				// 不用箭头函数 this 是 undefined 因为使用的是第三方库
				console.log('有人发布了hello消息,hello消息的回调执行了',msgName,data)
			})
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>