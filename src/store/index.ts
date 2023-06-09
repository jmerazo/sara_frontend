import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    dataFoundStore: null,
    dataFamilyStore: null,
    dataScientificNameStore: null,
    dataAllFamilyStore: null
  },
  getters: {
    getMyData(state){
      return state.dataFoundStore
    },
    getFamilyData(state){
      return state.dataFamilyStore
    },
    getNomCientificoData(state){
      return state.dataScientificNameStore
    },
    getAllFamily(state){
      return state.dataAllFamilyStore
    }
  },
  mutations: {
    setMyData(state, newData){
      state.dataFoundStore = newData
    },
    setFamilyData(state, newData){
      state.dataFamilyStore = newData
    },
    setNomCientificoData(state, newData){
      state.dataScientificNameStore = newData
    },
    setAllFamilyData(state, newData){
      state.dataAllFamilyStore = newData
    }
  },
  actions: {
    updateMyData(context, newData){
      context.commit('setMyData', newData)
    },
    updateFamilyData(context, newData){
      context.commit('setFamilyData', newData)
    },
    updateNomCientificoData(context, newData){
      context.commit('setNomCientificoData', newData)
    },
    updateAllFamilyData(context, newData){
      context.commit('setAllFamilyData', newData)
    }
  },
  modules: {
    
  }
})
