// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import AboutName from '../pages/About'
import HomeName from '../pages/Home'
import NewsName from '../pages/News'
import MessageName from '../pages/Message'
import DetailName from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:AboutName
		},
		{
			path:'/home',
			component:HomeName,
			children:[
				{
					path:'news',
					component:NewsName,
				},
				{
					path:'message',
					component:MessageName,
					children:[
						{
							name:'xiangqing',
							path:'detail',
							component:DetailName,
						}
					]
				}
			]
		}
	]
})
