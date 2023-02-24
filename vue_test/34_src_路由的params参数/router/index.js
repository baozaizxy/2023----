// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import AboutParams from '../pages/About'
import HomeParams from '../pages/Home'
import NewsParams from '../pages/News'
import MessageParams from '../pages/Message'
import DetailParams from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:AboutParams,
		},
		{
			path:'/home',
			component:HomeParams,
			children:[
				{
					path:'news',
					component:NewsParams,
				},
				{
					path:'message',
					component:MessageParams,
					children:[
						{
							name:'xiangqing',
							// RESF规范 此除：id和：title都是占位符
							path:'detail/:id/:title',
							component:DetailParams,
						}
					]
				}
			]
		}
	]
})
