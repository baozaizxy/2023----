<template>
	<div class="container">
		<Categoryone title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Categoryone>

		<Categoryone title="游戏" >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</Categoryone>

		<Categoryone title="电影">
			<video controls src="http://clips.vorwaerts-gmbh.de/bigbuckbunny.mp4"></video>
		</Categoryone>
	</div>
</template>

<script>
	import Categoryone from './components/Category'
	export default {
		name:'App',
		components:{Categoryone},
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
