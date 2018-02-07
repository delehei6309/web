import Vue from 'vue';
//import store from '../store';
import Router from 'vue-router';
import {logout} from '../tools/operation';
Vue.use(Router)
import {setTitle} from '../tools/operation';
//import Parent from '../containers/Parent';
/*import Home from '../containers/Home';
import Solution from '../containers/Solution';
import DataCenter from '../containers/DataCenter';*/
const SuccessList = ()=> import ('../containers/SuccessList');
const Parent = () => import('../containers/Parent');
const Home = () => import('../containers/Home');
const ProductInformation = () => import('../containers/ProductInformation');
const ProductList = () => import('../containers/ProductList');
const PressCenter = () => import('../containers/PressCenter');
const Solution = () => import('../containers/PressCenter');
const PressList = () => import('../containers/PressList');
const ProductDetail = () => import('../containers/ProductDetail');
const PressDetail = () => import('../containers/PressDetail');
const OtherDetail = () => import('../containers/OtherDetail');
const title = '北京致远嘉禾科技发展有限公司';
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
                        component:ProductList,//
                        meta: {
                            title: title,
                            sss:true
                        },
                    },
                    {
                        path:'product-list/:id',
                        name:'product-list',
                        component:ProductList,//
                        meta: {
                            title: title,
                            sss:true
                        },
                    },
                    {
                        path:'product-detail/:id',
                        name:'product-detail',
                        component:ProductDetail,//详细
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
                redirect:'/parent/press-center/press-list',
                meta: {
                    title: '新闻中心',
                    scrollToTop: true
                },
                children:[
                    {
                        path:'press-list',
                        name:'press-list-first',
                        component:PressList,//
                        meta: {
                            title: title
                        },
                    },
                    {
                        path:'press-list/:id',
                        name:'press-list',
                        component:PressList,//商用台式机
                        meta: {
                            title: title
                        }
                    },
                    {
                        path:'press-detail/:id',
                        name:'press-detail',
                        component:PressDetail,//商用台式机
                        meta: {
                            title: title
                        }
                    }
                ]
            },{
                path:'successful-case',
                name:'successful-case',
                component:PressCenter,
                redirect:'/parent/successful-case/successful-list',
                meta: {
                    title: '成功案例',
                    scrollToTop: true
                },
                children:[
                    {
                        path:'successful-list',
                        name:'successful-list-first',
                        component:SuccessList,//
                        meta: {
                            title: title,
                            sss:true
                        },
                    },
                    {
                        path:'successful-list/:id',
                        name:'successful-list',
                        component:SuccessList,//
                        meta: {
                            title: title,
                            sss:true
                        },
                    },
                    {
                        path:'successful-detail/:id',
                        name:'successful-detail',
                        component:PressDetail,//详细
                        meta: {
                            title: title,
                            sss:true
                        },
                    }
                ]
            },{
                path:'solution',
                name:'solution',
                component:Solution,
                redirect:'/parent/solution/solution-list',
                meta: {
                    title: '成功案例',
                    scrollToTop: true
                },
                children:[
                    {
                        path:'solution-list',
                        name:'solution-list-first',
                        component:OtherDetail,//
                        meta: {
                            title: title
                        },
                    },
                    {
                        path:'solution-list/:id',
                        name:'solution-list',
                        component:OtherDetail,//
                        meta: {
                            title: title
                        }
                    },
                    {
                        path:'solution-detail/:id',
                        name:'solution-detail',
                        component:PressDetail,//
                        meta: {
                            title: title
                        }
                    }
                ]
            },{
                path:'technical-support',
                name:'technical-support',
                component:Solution,
                redirect:'/parent/technical-support/technical-list',
                meta: {
                    title: '技术支持',
                    scrollToTop: true
                },
                children:[
                    {
                        path:'technical-list',
                        name:'technical-list-first',
                        component:PressList,//
                        meta: {
                            title: title
                        },
                    },
                    {
                        path:'technical-list/:id',
                        name:'technical-list',
                        component:PressList,//
                        meta: {
                            title: title
                        }
                    },
                    {
                        path:'technical-detail/:id',
                        name:'technical-detail',
                        component:PressDetail,//
                        meta: {
                            title: title
                        }
                    }
                ]
            },{
                path:'about',
                name:'about',
                component:Solution,
                redirect:'/parent/about/about-list',
                meta: {
                    title: title,//关于我们
                    scrollToTop: true,
                },
                children:[
                    {
                        path:'about-list',
                        name:'about-list-first',
                        component:OtherDetail,//
                        meta: {
                            title: title
                        },
                    },{
                        path:'about-list/:id',
                        name:'about-list',
                        component:OtherDetail,//
                        meta: {
                            title: title
                        },
                    }/*,{
                        path:'about-detail/:id',
                        name:'about-detail',
                        component:PressDetail,//
                        meta: {
                            title: title
                        },
                    }*/
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
