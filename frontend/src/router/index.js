import Vue from 'vue'
import Router from 'vue-router'
import AuthPage from '../pages/Auth.vue'
import DashboardPage from '../pages/Dashboard.vue'
import UsersPage from '../pages/Users.vue'
import UserPage from '../pages/User.vue'
import OwlsPage from '../pages/Owls.vue'
import OwlPage from '../pages/Owl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/users',
      name: 'users',
      component: UsersPage
    },
    {
      path: '/user/:publicKey',
      name: 'user',
      component: UserPage,
      props: true
    },
    {
      path: '/owls',
      name: 'owls',
      component: OwlsPage
    },
    {
      path: '/owl/:dna',
      name: 'owl',
      component: OwlPage,
      props: true
    }
  ]
})
