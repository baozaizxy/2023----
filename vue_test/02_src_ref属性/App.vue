<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<SchoolRef ref="sch" id="CHD"/>
	</div>
</template>

<script>
	//引入School组件
	import SchoolRef from './components/School'

	export default {
		name:'App',
		components:{SchoolRef},
		data() {
			return {
				msg:'欢迎学习Vue!'
			}
		},
		methods: {
			showDOM(){
				// 此处this为vc app
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
				console.log(document.getElementById('CHD'))//School组件的真实DOM结构
			}
		},
	}
</script>
