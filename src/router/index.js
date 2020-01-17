import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/home/Appindex.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        // {
        //     path: '/',
        //     name: 'Login',
        //     component: Login
        // },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/index',
            name: 'AppIndex',
            component: AppIndex,
            meta: {
                requireAuth: true
            }
        }
    ]
})
