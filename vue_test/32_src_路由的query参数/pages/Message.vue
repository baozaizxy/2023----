<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 跳转路由并携带query参数，to的字符串写法 通过'?'间隔传递参数-->
				<!-- 加上表示v-bind的冒号 ""内的所有东西都当作JS来解析  不加：则""的数据都当作字符串来解析 -->
				<!-- ``表示内部是当作模板字符串去解析 模板字符串内要混着JS写 则加上${JS}-->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
					{{m.title}}
					</router-link>
					&nbsp;&nbsp; 
				-->

				<!-- 跳转路由并携带query参数，to的对象写法 -->
				<!-- 携带id为了找到准确的message 携带title是为了跳转后能够输出title -->
				<!-- 相当于把message存储的data搬到其他路径去输出 -->
				<!-- 路由组件 -->
				<router-link :to="{
					path:'/home/message/detail',
					query:{
						id:m.id,
						title:m.title
					}
				}">
					{{m.title}}
				</router-link>
			
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'MessageQuery',
		data() {
			return {
				messageList:[
					// 更真实的情况可以在此处利用AJAX向服务器发送请求 返回用户数据
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
		},
	}
</script>