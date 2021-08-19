import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home.vue'

//Add
import HeroDetails from '../components/others/HeroDetails.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: '404Page',
    component: () => import(/* webpackChunkName: "PageNotFound" */ '../components/others/PageNotFound.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/main/About.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    // lazy-loading when the route is visited.
    component: () => import(/* webpackChunkName: "forms" */ '../components/main/Forms.vue')
  },
  {
    path: '/listsandconditionals',
    name: 'ListsAndConditionals',
    // lazy-loading when the route is visited.
    component: () => import(/* webpackChunkName: "listsandconditionals" */ '../components/main/ListsAndConditionals.vue')
  },
  {
    path: '/interactingwithcomponents',
    name: 'InteractingWithComponents',
    // lazy-loading when the route is visited.
    component: () => import(/* webpackChunkName: "interactingwithcomponents" */ '../components/main/InteractingWithComponents.vue')
  },
  {
    path: '/herodetails/:id',
    name: 'HeroDetails',
    component: HeroDetails,
    props: route =>({id: parseInt(route.params.id)})//Convert value type //true //Pass data via props
  },
  {
    path: '/componentscommunication',
    name: 'ComponentsCommunication',
    // lazy-loading when the route is visited.
    component: () => import(/* webpackChunkName: "componentscommunication" */ '../components/main/ComponentsCommunication.vue')
  },
  {
    path: '/accessingdata',
    name: 'AccessingData',
    // lazy-loading when the route is visited.
    component: () => import(/* webpackChunkName: "accessingdata" */ '../components/main/AccessingData.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
