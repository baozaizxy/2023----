<template>
	<div>
		<Student name="李四" sex="女" :age="18"/>
		<!-- 不加： 没有动态绑定 传入的是字符串 加：引号中传入的内容按照表达式去执行 -->
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
