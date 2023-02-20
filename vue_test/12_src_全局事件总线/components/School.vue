<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'CHD',
				address:'草滩一路',
			}
		},
		mounted() {
			// console.log('School',this)
			this.$bus.$on('hello',(data)=>{
				// 不写箭头函数的话 把数据传给methods的一个方法 
				// 因为给vc对象绑定事件这件事使得this为事件本身'hello'  而我们要把数据传给vc
				console.log('我是School组件,收到了数据',data)
			})
		},
		beforeDestroy() {
			this.$bus.$off('hello')
			// 解绑必须带事件 不然$bus所有时间全部解绑
			// 之前不用解绑因为是自定义事件 vc销毁后事件自动消失
			// 现在把事件绑定给$bus 不在自己身上 vc没了以后$bus依然绑定有该事件 但是其他组件没办法从此方法获得数据
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>