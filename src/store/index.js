import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isauth :false,
    cartinfo:[],
  },
  getters: {
    changeheader(state){
      return state.isauth
    },
    shopping(state){
      return state.cartinfo
    },
  },
  mutations: {
    getauth(state,value){
      return state.isauth=value
    },
    takeproduct(state,value){
     state.cartinfo.push(value)
    }
  },
  actions: {
  },
  modules: {
  }
})
