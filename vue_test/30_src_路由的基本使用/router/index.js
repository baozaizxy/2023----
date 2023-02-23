// 该文件专门用于创建整个应用的路由器
// 当作构造函数用
import VueRouter from 'vue-router'
//引入组件
import About_route from '../components/About'
import Home_route from '../components/Home'

//创建并暴露一个路由器
// 路由器管理一堆路由
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About_route
		},
		{
			path:'/home',
			component:Home_route
		}
	]
})
