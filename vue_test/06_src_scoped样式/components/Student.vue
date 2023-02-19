<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="chd">学生性别：{{sex}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		}
	}
</script>

<style lang="less" scoped>
// less语法
// scoped限定作用域 不写lang默认语言为css
	.demo{
		background-color: pink;
		.chd{
			font-size: 40px;
		}
	}
</style>
