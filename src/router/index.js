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
const ProductInformation = () => import('../containers/ProductInformation');
const ProductList = () => import('../containers/ProductList');
const PressCenter = () => import('../containers/PressCenter');
const SuccessfulCase = () => import('../containers/SuccessfulCase');
const About = () => import('../containers/About');
const DataCenter = () => import('../containers/DataCenter');
const NetworkSecurity = () => import('../containers/NetworkSecurity');
const title = '致远嘉禾';
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
                path:'product-information',
                name:'product-information',
                redirect:'/parent/product-information/product-list',
                component:ProductInformation,
                meta: {
                    title: '产品信息',
                    scrollToTop: true
                },
                children:[
                    {
                        path:'product-list',
                        name:'product-list-first',
                        component:ProductList,//商用台式机
                        meta: {
                            title: title,
                            sss:true
                        },
                    },
                    {
                        path:'product-list/:id',
                        name:'product-list',
                        component:ProductList,//商用台式机
                        meta: {
                            title: title,
                            sss:true
                        },
                    }/*,
                    {
                        path:'hp-server/:id',
                        name:'hp-server',
                        component:ProductList,//服务器
                        meta: {
                            title: title,
                            sss:true
                        },
                    },
                    {
                        path:'hp-storage',
                        name:'hp-storage',
                        component:ProductList,//存储
                        meta: {
                            title: title,
                            sss:true
                        },
                    }*/
                ]
            },{
                path:'press-center',
                name:'press-center',
                component:PressCenter,
                meta: {
                    title: '新闻中心',
                    scrollToTop: true
                }
            },{
                path:'successful-case',
                name:'successful-case',
                component:SuccessfulCase,
                meta: {
                    title: '成功案例',
                    scrollToTop: true
                }
            },{
                path:'about',
                name:'about',
                component:About,
                meta: {
                    title: title,
                    scrollToTop: true
                }
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
