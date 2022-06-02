import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Diego',
      last_name: 'Rojas',
      img_profile: 'https://github.com/mdo.png',
      transactions: [],
      profile_verified: false
    },
    add_account: null
  },
  getters: {
    transactions: state => {
      return state.user.transactions;
    }
  },
  mutations: {
    SET_Transactions (state, transactions) {
      state.user.transactions = transactions
    },
    SET_ProfileVerified (state, profile_verified) {
      state.user.profile_verified = profile_verified
    },
    SET_AddAccount (state, add_account) {
      state.add_account = add_account
    }
  },
  actions: {
    getTransactions ({ commit }) {

      const url = 'http://localhost:3001/transactions'

      axios.get(url)
        .then(response => {
          commit('SET_Transactions', response.data)
        })
    },
    profileVerified ({ commit }) {
      commit('SET_ProfileVerified', true)
    },
    addAccount ({ commit }) {
      commit('SET_AddAccount', true)
    }
  }
})
