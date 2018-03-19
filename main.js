import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'

import store from './store.js'

Vue.use(vuex)

new Vue({
	store,
    el: '#app',
    render: h => h(App)
})
