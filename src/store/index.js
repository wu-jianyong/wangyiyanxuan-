import Vue from 'vue'
import Vuex from 'vuex'
import msite from './modules/msite'
import category from './modules/category'
import searchPage from './modules/searchpage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    msite,
    category,
    searchPage
  }
})
