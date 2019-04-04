 import ajax from './ajax'
 const BASE = '/api'
 export const reqhomedata = ()  => ajax('/homedata')
 export const reqcategory = ()  => ajax('/category')
 export const reqcategoryList = ()  => ajax('/categoryList')
 export const reqSearchLists = ()  => ajax(BASE+'/xhr/search/init.json',{},'POST')//热门搜索
 export const reqSearchproperty = (content)  => ajax(BASE+`/xhr/search/searchAutoComplete.json?csrf_token=ae7ef4ea6e64b575deee468a79152159&keywordPrefix=${content}`) //模糊搜索
 export const reqSearchMessage = (content)  => ajax(BASE+`/xhr/search/search.json?keyword=${content}&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=1&_stat_search=userhand`)
 //商品列表
