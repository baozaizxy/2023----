<!-- 开启代理服务器
 方法一 nginx
 方法二 vue-cli -->
<template>
	<div>
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
// xhr.open()配置请求信息 xhr.send()发送请求
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStudents(){
				axios.get('http://localhost:8080/students').then(
					response => {
						// 响应有响应行 头 空行 体  
						console.log('请求成功了',response.data)
					},
					error => {
						// error和response都是对象 error.message才是失败的原因 
						console.log('请求失败了',error.message)
					}
				)
			},
			getCars(){
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			}
		},
	}
</script>
