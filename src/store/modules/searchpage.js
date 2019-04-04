
   const RECEIVE_SEARCHLIST = 'receive_searchlist'


  import {reqSearchLists} from '../../API/index'

  const state = {
    searchList:{}
  }
  const mutations ={

    [RECEIVE_SEARCHLIST](state,searchList){
      state.searchList = searchList
    },


  }
  const actions = {
    async getSearchList({commit}){
      const result = await reqSearchLists()
      if(result.code==='200'){
        const searchList = result.data
        commit (RECEIVE_SEARCHLIST,searchList)
      }
    }

  }
  const getters = {

  }

  export default {
    state,
    mutations,
    actions,
    getters
  }
