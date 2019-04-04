import Mock from 'mockjs'
import categoryList from './categoryList.json'
import category from './category.json'
import homedata from './homeData.json'
Mock.mock('/homedata', {code: 0, data: homedata})
Mock.mock('/category', {code: 0, data: category})
Mock.mock('/categoryList', {code: 0, data: categoryList})
