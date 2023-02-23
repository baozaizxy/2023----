//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
// 业务逻辑全部写在action  mutation直接执行
// 业务逻辑不写在count的methods 写在actions里的原因：
// action担任与服务器交换数据的职责 放在count中冗余量过高
const actions = {
	// 此处为简写形式 完整版为 jia:function(){}
	// context==>ministore 包含上下文对象 即jia可能需要的
	/* jia(context,value){
		console.log('actions中的jia被调用了')
		大写的JIA mutation里的 小写jia actions里的
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被调用了')
		context.commit('JIAN',value)
	}, */
	// 此处只写了一步dispatch的调用 其实可以用很多次
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
			// 这里不转交 直接context.state.sum += value 也能计算出结果 但是开发者工具监测不到 不推荐
			// 但是竟然是可以的吗？ 不会出现getter setter问题么
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}
//准备mutations——用于操作数据（state）
const mutations = {
	JIA(state,value){
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	}
}
//准备state——用于存储数据
// state中的数据像vue中的_data被监测
const state = {
	sum:0 //当前的和
}

//创建并暴露store
// const store = new Vuex.Store({....})
export default new Vuex.Store({
	actions,
	mutations,
	state,
})