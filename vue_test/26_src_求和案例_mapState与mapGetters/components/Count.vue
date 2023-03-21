<!-- 连续获取vuex中state中和getter中多个值有些冗余 因此出现mapState和mapGetter应运而生 -->
<!-- 这种方法获得的数据开发者工具不视为computed 开发者工具视为vuex bindings -->

<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为:{{bigSum}}</h3>
		<h3>我在{{school}}，学习{{subject}}</h3>
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
	// 引入方法？
	import {mapState,mapGetters} from 'vuex'
	export default {
		name:'CountMap',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			//靠程序员自己亲自去写计算属性
			/* sum(){
				return this.$store.state.sum
			},
			school(){
				return this.$store.state.school
			},
			subject(){
				return this.$store.state.subject
			}, */

			// ...mapState 把mapState每一组key:value都展开放入
			//借助mapState生成计算属性，从state中读取数据。（对象写法）
			// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

			//借助mapState生成计算属性，从state中读取数据。（数组写法）
			// 此处是对象的简写 sum:'sum' 因为sum是从state的计算属性中读取的
			// 如果{a:a}想简写为{a}则要求a应该是读取变量获取到的
			// 而且要在数组里才可以
			...mapState(['sum','school','subject']),

			/* ******************************************************************** */

			/* bigSum(){
				return this.$store.getters.bigSum
			}, */

			//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
			// ...mapGetters({bigSum:'bigSum'})
			
			//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters(['bigSum'])

		},
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			// 此除是key:value 即使不包引号 运行的时候 也会包上当作字符串处理
			// 一个对象里的key 无论怎么写（包不包引号） 本质都是字符串
			// 但是value不包不行 不包会触发寻找sum变量
			const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
			console.log(x)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
