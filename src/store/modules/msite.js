
   const RECEIVE_HOMEDATA = 'receive_homedata'
   const RECEIVE_CATEGORY = 'receive_category'
   const RECEIVE_CATEGORYLIST = 'receive_categorylist'

  import {reqhomedata,reqcategory,reqcategoryList} from '../../API/index'

  const state = {
    homedata:{},
    category:{},
    categoryList:{}
  }
  const mutations ={
    [RECEIVE_HOMEDATA](state,homedata){
      state.homedata = homedata
    },
    [RECEIVE_CATEGORY](state,category){
      state.category = category
    },
    [RECEIVE_CATEGORYLIST](state,categoryList){
      state.categoryList = categoryList
    },

  }
  const actions = {
    async getHomeData ({commit,state}){
      const result = await reqhomedata()
      if(result.code===0){
        const homedata = result.data
        commit (RECEIVE_HOMEDATA,homedata)
      }
    },
    async getCategory({commit}){
      const result = await reqcategory()
      if(result.code===0){
        const category = result.data
        commit (RECEIVE_CATEGORY,{category})
      }
    },
    async getCategoryList ({commit,state}){
      const result = await reqcategoryList()
      if(result.code===0){
        const categoryList = result.data
        commit (RECEIVE_CATEGORYLIST,{categoryList})
      }
    },

  }
  const getters = {

  }

  export default {
    state,
    mutations,
    actions,
    getters
  }
