import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    checkin: '',
    checkout: ''
  },
  mutations: {
    find (state, data) {

    }
  },
  getters: {
    checkin: state => state.checkin
  }
})
