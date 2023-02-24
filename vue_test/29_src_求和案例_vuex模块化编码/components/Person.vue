<template>
	<div>
		<h1>人员列表</h1>
		<h3 style="color:red">Count组件求和为：{{sum}}</h3>
		<h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
		<input type="text" placeholder="请输入名字" v-model="name">
		<button @click="add">添加</button>
		<button @click="addWang">添加一个姓王的人</button>
		<button @click="addPersonServer">添加一个人，名字随机</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{p.name}}</li>
		</ul>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	export default {
		name:'PersonModule',
		data() {
			return {
				name:''
			}
		},
		computed:{
			personList(){
				return this.$store.state.personAbout.personList
			},
			sum(){
				return this.$store.state.countAbout.sum
			},
			firstPersonName(){
				// getter中是这样写的 personAbout/firstPersonName
				return this.$store.getters['personAbout/firstPersonName']
			}
		},
		methods: {
			add(){
				const personObj = {id:nanoid(),name:this.name}
				// cocommit第一个参数是mutation方法 第二个是参数值
				// 这种写法 分类名/mutation名
				this.$store.commit('personAbout/ADD_PERSON',personObj)
				this.name = ''
			},
			addWang(){
				const personObj = {id:nanoid(),name:this.name}
				this.$store.dispatch('personAbout/addPersonWang',personObj)
				this.name = ''
			},
			addPersonServer(){
				this.$store.dispatch('personAbout/addPersonServer')
			}
		},
	}
</script>
