//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
// 只有真正使用的时候才用注册，傀儡不用在页面中使用，所以不用注册

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
		// 自己把自己放到自己的隐式原型里
		// vm 实例对象 creat时给原型对象上传一个傀儡
	},
})