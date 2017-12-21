import Vue from 'vue';
//import store from '../store';
import Router from 'vue-router';
import {logout} from '../tools/operation';
Vue.use(Router)
import {setTitle} from '../tools/operation';
//import Parent from '../containers/Parent';
/*import Home from '../containers/Home';
import Solution from '../containers/Solution';
import DataCenter from '../containers/DataCenter';
import NetworkSecurity from '../containers/NetworkSecurity';*/
const Parent = () => import('../containers/Parent');
const Home = () => import('../containers/Home');
const Solution = () => import('../containers/Solution');
const DataCenter = () => import('../containers/DataCenter');
const NetworkSecurity = () => import('../containers/NetworkSecurity');
const title = '富源天成';
let routes = [
    /*{
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta: {
            title: title,
        }
    },*/
    {
        path:'/parent',
        component:Parent,
        redirect:'/home',
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
                redirect:'/parent/solution/data-center',
                component:Solution,
                meta: {
                    title: title
                },
                children:[
                    {
                        path:'data-center',
                        name:'data-center',
                        component:DataCenter,//
                        meta: {
                            title: title
                        },
                    },
                    {
                        path:'network-security',
                        name:'network-security',
                        component:NetworkSecurity,//网络及安全
                        meta: {
                            title: title
                        },
                    }
                ]
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
