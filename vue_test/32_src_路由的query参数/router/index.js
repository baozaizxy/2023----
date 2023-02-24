// router带query传参完全不打扰路由配置
// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import AboutQuery from '../pages/About'
import HomeQuery from '../pages/Home'
import NewsQuery from '../pages/News'
import MessageQuery from '../pages/Message'
import DetailQuery from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:AboutQuery
		},
		{
			path:'/home',
			component:HomeQuery,
			children:[
				{
					path:'news',
					component:NewsQuery,
				},
				{
					path:'message',
					component:MessageQuery,
					children:[
						{
							path:'detail',
							component:DetailQuery,
						}
					]
				}
			]
		}
	]
})
