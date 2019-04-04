
   const RECEIVE_CATEGORY = 'receive_category'
   const RECEIVE_CATEGORYLIST = 'receive_categorylist'

  import {reqcategory,reqcategoryList} from '../../API/index'

  const state = {
    category:{},
    categoryList:{}
  }
  const mutations ={

    [RECEIVE_CATEGORY](state,category){
      state.category = category
    },
    [RECEIVE_CATEGORYLIST](state,categoryList){
      state.categoryList = categoryList
    },

  }
  const actions = {
    async getCategory({commit}){
      const result = await reqcategory()
      if(result.code===0){
        const category = result.data
        commit (RECEIVE_CATEGORY,category)
      }
    },
    async getCategoryList ({commit,state}){
      const result = await reqcategoryList()
      if(result.code===0){
        const categoryList = result.data
        commit (RECEIVE_CATEGORYLIST,categoryList)
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
