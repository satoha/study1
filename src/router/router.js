import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/pages/Top'
import Category from '../components/pages/Category'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Top
        },
        {
            path: '/cat',
            component: Category
        }
    ]
})