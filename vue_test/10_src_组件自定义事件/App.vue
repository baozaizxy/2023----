<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<!-- 旧 -->
		<SchoolCopmonent :getSchoolName="getSchoolName"/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
		<!-- <StudentComponent @atguigu="getStudentName" @demo="m1"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
		<!-- v-on指令是事件绑定指令 简写@ v-on在student的组件标签上，所以说是给student的组件对象vue component(VC)身上绑定了一个事件 -->
		<StudentComponent ref="student" @click.native="show"/>
		<!-- 通过this.$refs.student 可以拿到 student 的实例对象 -->
	</div>
</template>

<script>
	import StudentComponent from './components/Student'
	import SchoolCopmonent from './components/School'

	export default {
		name:'App',
		components:{SchoolCopmonent,StudentComponent},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods: {
			// methods 里方法的this一定是vue
			getSchoolName(name){
				console.log('App收到了学校名：',name)
			},
			getStudentName(name,...params){
				console.log('App收到了学生名：',name,params)
				this.studentName = name
			},
			m1(){
				console.log('demo事件被触发了！')
			},
			show(){
				alert(123)
			}
		},
		mounted() {
			this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
