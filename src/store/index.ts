import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    dataFoundStore: null,
    dataFamilyStore: null
  },
  getters: {
    getMyData(state){
      return state.dataFoundStore
    },
    getFamilyData(state){
      return state.dataFamilyStore
    }
  },
  mutations: {
    setMyData(state, newData){
      state.dataFoundStore = newData
    },
    setFamilyData(state, newData){
      state.dataFamilyStore = newData
    }
  },
  actions: {
    updateMyData(context, newData){
      context.commit('setMyData', newData)
    },
    updateFamilyData(context, newData){
      context.commit('setFamilyData', newData)
    }
  },
  modules: {
    
  }
})
