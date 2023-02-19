<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	export default {
		name:'MyHeader',
		//接收从App传递过来的addTodo
		props:['addTodo'],
		data() {
			return {
				//收集用户输入的title
				title:''
			}
		},
		methods: {
			add(){
				// 获取数据 event.target.value
				//校验数据 trim去掉前后空格
				if(!this.title.trim()) return alert('输入不能为空')
				// 将用户的输入包装成一个todo对象
				// 有服务器的情况下 一般由服务器根据数据库配置id
				const todoObj = {id:nanoid(),title:this.title,done:false}
				//通知App组件去添加一个todo对象
				this.addTodo(todoObj)
				//清空输入 event.target.value = ''
				// 自己操作DOM的写法 
				this.title = ''
			}
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>