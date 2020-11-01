import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import List from '@/components/list/List.vue'
import Content from '@/components/list/article/content.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/list',
            name:'List',
            component:List
        },
        {
            path:'/list/content',
            name:'Content',
            component:Content
        }
    ]
})