<template>
	<div>
		<!-- 模板里不用this.$store  模板里能看到vc上的所有东西-->
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:'CountTest',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		methods: {
			// 没有其他业务逻辑 直接commit和mutation对话
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			// 需要在action进行逻辑运算 因此先dispatch交给action 再由action交给mutation
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			console.log('Count',this)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
