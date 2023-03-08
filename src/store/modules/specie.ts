import { createStore } from 'vuex'

export default createStore({
  state: {
    dataToFound: null
  },
  getters: {
    getMyData(state){
      return state.dataToFound
    }
  },
  mutations: {
    setMyData(state, newData){
      state.dataToFound = newData
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
