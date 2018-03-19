import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	allClass:['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11'],
	all:[{tit:'学员感言',smtit:'明月几时有',img:'src/img/1.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/2.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/3.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/4.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/5.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/6.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/7.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/8.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/9.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/10.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'},{tit:'学员感言',smtit:'明月几时有',img:'src/img/11.jpg',name:'小明',money:'15k',date:'把酒问青天',readme:'自我介绍是想别人你自我介绍好不好,使之关系到你给别人的第一印象的好坏及以后自我介绍是想别人你自我介绍好不好'}]
}

const mutations = {
	aaa(){
		state.allClass.push(state.allClass.shift())
	},
	ccc(){
		state.allClass.unshift(state.allClass.pop())
	}
}


const actions = {
	aaa({commit}){
		commit('aaa')
	},
	ccc({commit}){
		commit('ccc')
	}
}

const getters = {
	all(state){
		return state.all
	},
	allClass(state){
		return state.allClass
	}
}


export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})