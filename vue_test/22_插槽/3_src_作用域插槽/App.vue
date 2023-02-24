<!-- 数据不在app组件内 且数据经过了复用 且生成了不同样式  -->
<template>
	<div class="container">

		<CategoryThree title="游戏">
			<!-- 这里必须加template -->
			<template scope="sherry">
				<!-- 先收到sherry对象 再得到属性 -->
				<!-- 也可支持解构赋值scop="{games}" v-for直接遍历in games -->
				<ul>
					<li v-for="(g,index) in sherry.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</CategoryThree>

		<CategoryThree title="游戏">
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</CategoryThree>

		<CategoryThree title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</CategoryThree>

	</div>
</template>

<script>
	import CategoryThree from './components/Category'
	export default {
		name:'App',
		components:{CategoryThree},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
