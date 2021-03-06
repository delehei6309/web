import Vue from 'vue';
//import store from '../store';
import Router from 'vue-router';
import {logout} from '../tools/operation';
Vue.use(Router)
import {setTitle} from '../tools/operation';
import Parent from '../containers/Parent';
import Home from '../containers/Home';
import Solution from '../containers/Solution';
const title = '富源天成';
let routes = [
    {
        path:'/home',
        component:Home,
        meta: {
            title: title,
        }
    },
    {
        path:'/parent',
        name:'Parent',
        component:Parent,
        meta: {
            title: title
        },
        children:[
            {
                path:'home',
                name:'home',
                component:Home,
                meta: {
                    title: title
                },
            },{
                path:'solution',
                name:'solution',
                component:Solution,
                meta: {
                    title: title
                },
            }
        ]
    }
];
routes.map(route => {
    route.beforeEnter = (to, from, next)=>{
        let {meta} = to;
        let {title} = meta;
        setTitle(title);
        next();
    };
});
routes.push({
    path: '*',
    redirect: '/parent/home'
});
export default new Router({
    mode: 'history',
    routes
})