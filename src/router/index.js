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
                    title: title,
                    scrollToTop: true
                },
            },{
                path:'solution',
                name:'solution',
                redirect:'/parent/solution/data-center',
                component:Solution,
                meta: {
                    title: title,
                    scrollToTop: true
                },
                children:[
                    {
                        path:'data-center',
                        name:'data-center',
                        component:DataCenter,//
                        meta: {
                            title: title,
                            sss:true
                        },
                    },
                    {
                        path:'network-security',
                        name:'network-security',
                        component:NetworkSecurity,//网络及安全
                        meta: {
                            title: title,
                            sss:true
                        },
                    }
                ]
            }
        ]
    }
];
/*const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            console.log('hash');
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            console.log('top');
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        console.log(position);
        return position
    }
}*/
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
    routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
