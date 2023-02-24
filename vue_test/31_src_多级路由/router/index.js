// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import AboutMulti from '../pages/About'
import HomeMulti from '../pages/Home'
import NewsMulti from '../pages/News'
import MessageMulti from '../pages/Message'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			// 一级路由
			path:'/about',
			component:AboutMulti
		},
		{
			path:'/home',
			component:HomeMulti,
			children:[
				{
					// 子路由  便利的时候路径已经是'/home/...'因此直接写news就可以了
					path:'news',
					component:NewsMulti,
				},
				{
					path:'message',
					component:MessageMulti,
				}
			]
		}
	]
})
