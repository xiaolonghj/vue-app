import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/login/')
  },
  {
    path: "/",
    name: "Layout",
    component: () => import('@/views/layout/'),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import('@/views/home/')
      },
      {
        path: "/qa",
        name: "Qa",
        component: () => import('@/views/qa/')
      },
      {
        path: "/video",
        name: "Video",
        component: () => import('@/views/video/')
      },
      {
        path: "/my",
        name: "My",
        component: () => import('@/views/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
