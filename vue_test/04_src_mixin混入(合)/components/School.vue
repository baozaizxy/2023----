<template>
	<div>
		<h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入一个hunhe
	// import {hunhe,hunhe2} from '../mixin'

	export default {
		name:'SchoolMixin',
		data() {
			return {
				name:'CHD',
				address:'草滩一路',
				x:666
			}
		},
		// mixins:[hunhe,hunhe2],
	}
</script>