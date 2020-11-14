import Vue from 'vue'
import Router from 'vue-router'
import Video from '@/components/home/Home.vue'
import List from '@/components/list/List.vue'
import Content from '@/components/list/article/content.vue'
import First from '@/components/First.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/video',
            name:'video',
            component:Video
        },
        {
            path:'/list',
            name:'List',
            component:List
        },
        {
            path:'/list/content:id',
            name:'Content',
            component:Content,
            props:true
        },
        {
            path:'/',redirect:'/home'
        },
        {
            path:'/home',
            name:'First',
            component:First
        }
    ]
})