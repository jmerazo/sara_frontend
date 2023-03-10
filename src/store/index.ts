import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    dataFoundStore: null
  },
  getters: {
    getMyData(state){
      return state.dataFoundStore
    }
  },
  mutations: {
    setMyData(state, newData){
      state.dataFoundStore = newData
    }
  },
  actions: {
    updateMyData(context, newData){
      context.commit('setMyData', newData)
    }
  },
  modules: {
    
  }
})
