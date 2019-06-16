import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Myym from './../components/myym.vue'
import One from './../components/one.vue'
import Two from './../components/two.vue'


// 二级路由
import Dy from './../components/dianying.vue'
import Yy from './../components/yinyue.vue'
import Ds from './../components/dushu.vue'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'helloWorld',
      component: HelloWorld
    }
    ,{
      path: '/myym',
      name: 'myym',
      component: Myym
    }
    ,{
      path: '/one',
      name: 'one',
      component: One,
      children:[
        {
          path: '',
          component: Dy,
        },
        {
          path: 'dianying',
          component: Dy,
        },
        {
          path: 'dushu',
          component: Ds,
        },
        {
          path: 'yinyue',
          component: Yy,
        }

      ]
    }
    ,{
      path: '/two',
      name: 'two',
      component: Two
    }
  ]
})
