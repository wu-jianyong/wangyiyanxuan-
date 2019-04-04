import Cart from '../pages/cart/cart.vue'
import Category from '../pages/category/category.vue'
import KnowThings from '../pages/knowThings/knowThings.vue'
import Msite from '../pages/msite/msite.vue'
import Personal from '../pages/personal/personal.vue'
import SearchPage from '../pages/searchPage/searchPage.vue'
import PhoneLogin  from '../pages/phoneLogin/phoneLogin.vue'
import ClothsShoes from '../pages/msite/clothsShoes/clothsShoes.vue'
import Recommend from '../pages/msite/recommend/recommend.vue'
import FoodDrink from '../pages/msite/foodDrink/foodDrink.vue'
import GlobalCharacter from '../pages/msite/globalCharacter/globalCharacter.vue'
import HomeLife from '../pages/msite/homeLife/homeLife.vue'
import MachinePhoto from '../pages/msite/machinePhoto/machinePhoto.vue'
import MotherSon from '../pages/msite/motherSon/motherSon.vue'
import PersonClear from '../pages/msite/personClear/personClear.vue'
import SportTravel from '../pages/msite/sportTravel/sportTravel.vue'


export default [
  {
    path:'/msite',
    component:Msite,
    meta: {
      isShow: true  // 是否显示footer
    },
    children: [
      {
        path: '/msite/recommend',
        component: Recommend,
        meta: {
          isShow: true  // 是否显示footer
        },
      },
      {
        path: '/msite/clothsShoes',
        component: ClothsShoes,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '/msite/homeLife',
        component: HomeLife,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '/msite/sporttravel',
        component: SportTravel,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '/msite/personclear',
        component: PersonClear,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '/msite/motherson',
        component: MotherSon,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '/msite/machinephoto',
        component: MachinePhoto,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '/msite/globalcharacter',
        component: GlobalCharacter,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '/msite/fooddrink',
        component: FoodDrink,
        meta: {
          isShow: true  // 是否显示footer
        }
      },
      {
        path: '',
        redirect: '/msite/recommend'
      }
    ]
  },
  {
    path:'/category',
    component:Category,
    meta: {
      isShow: true  // 是否显示footer
    }

  },
  {
    path:'/knowThings',
    component:KnowThings,
    meta: {
      isShow: true  // 是否显示footer
    },
  },
  {
    path:'/cart',
    component:Cart,
    meta: {
      isShow: true  // 是否显示footer
    },
  },
  {
    path:'/personal',
    component:Personal,

  },
  {
    path:'/searchpage',
    component:SearchPage,

  },
  {
    path:'/phoneLogin',
    component:PhoneLogin,

  },
  {
    path: '/',
    redirect: '/msite'
  }
]
