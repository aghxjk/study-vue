import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/Appindex.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'AppIndex',
                    component: AppIndex,
                    meta: {
                        requireAuth: true
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
