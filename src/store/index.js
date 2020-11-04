import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    router:[]
    },
  
  mutations : {
    savetoken(state,played) {
      state.token = played
    },
    navList(state,played) {
       state.router = played;
    }
  },
  actions: {
  },
  modules: {
  }
})
