<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- 直接写appear可等价为 :appear="true" -->
		<transition name="hello" appear>
			<h1 v-show="isShow">你好啊！</h1>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}

    /* 没取名字用默认的v-enter-active 取了名字就要用名字 */
	.hello-enter-active{
		animation: atguigu 0.5s linear;
		/* linear 匀速 */
	}

	.hello-leave-active{
		/* anomation 动画 */
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from{
			transform: translateX(-100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>