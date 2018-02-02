const picSolution = require('./images/yy89.jpg');
const picNews = require('./images/yy90.jpg');
const picTechnical = require('./images/yy93.jpg');
const picSuccess = require('./images/yy91.jpg');
const picAbout = require('./images/yy92.jpg');
//banner 图
const product = require('./images/banner/product.jpg');
const press = require('./images/banner/news.jpg');
const successful = require('./images/banner/case.jpg');
const solution = require('./images/banner/solution.jpg');
const technical = require('./images/banner/technical.jpg');
const about = require('./images/banner/about.jpg');

import $api from './tools/api';
let navConfig = {
    '1':{
        link:'/parent/home',
    },
    '2':{
        link:'/parent/product-information',
        image:product
    },
    '3':{
        link:'/parent/press-center',
        name:'press-list',
        picNav:picNews,
        image:press
    },
    '4':{
        link:'/parent/successful-case',
        picNav:picSuccess,
        image:successful
    },
    '6':{
        link:'/parent/solution',
        width:400,
        picNav:picSolution,
        iamge:solution
    },
    '7':{
        link:'/parent/technical-support',
        picNav:picTechnical,
        image:technical
    },
    '8':{
        link:'/parent/about',
        picNav:picAbout,
        image:about
    }
};
let linkConfig = {
    '/parent/solution': {
        innerTitle: '解决方案',
        link: 'solution-list',
        id: 6,
    },
    '/parent/press-center': {
        innerTitle: '新闻中心',
        link: 'press-list',
        id: 3,
    },
    '/parent/successful-case': {
        innerTitle: '成功案例',
        link: 'successful-list',
        id: 4
    },
    '/parent/technical-support': {
        innerTitle: '技术支持',
        link: 'technical-list',
        id: 7
    },
    '/parent/about': {
        innerTitle: '关于我们',
        link: 'about-list',
        id: 8
    }
}
let navItems = [];
$api.get('/index/cate/getTopCateList').then(res=>{
    if(res.code == 200){
        let obj = {};
        res.data.navigationBars.map(({catename,id,image})=>{
            obj = {
                children:null,
                show:false,
                id,image,
                title:catename,
            };
            for(let k in navConfig[id]){
                if(navConfig[id][k]){
                    if(k == 'image'){
                        image ?  obj[k] = image : obj[k] = navConfig[id][k];
                    }else{
                        obj[k] = navConfig[id][k];
                    }

                }

            }
            navItems.push(obj);
        });
    }
    return res;
}).then(res=>{
    console.log(res);
    if(res.code == 200){
        navItems.map(({link,title})=>{
            if(linkConfig[link]){
                linkConfig[link].innerTitle = title;
            }
        });
    }
});
/*let navItems0 = [
    {
        id:1,
        title:'首页',
        link:'/parent/home',
        children:null,
        show:false
    },{
        id:2,
        title:'产品信息',
        link:'/parent/product-information',
        children:null,
        show:false
    },{
        id:3,
        link:'/parent/press-center',
        name:'press-list',
        title:'新闻中心',
        children:null,
        show:false,
        picNav:picNews
    },{
        id:4,
        link:'/parent/successful-case',
        title:'成功案例',
        children:null,
        show:false,
        picNav:picSuccess
    },{
        id:6,
        link:'/parent/solution',
        name:'solution-list',
        title:'解决方案',
        children:null,
        width:400,
        show:false,
        picNav:picSolution
    },{
        id:7,
        link:'/parent/technical-support',
        title:'技术支持',
        children:null,
        show:false,
        picNav:picTechnical
    },{
        id:8,
        link:'/parent/about',
        title:'关于我们',
        children:null,
        show:false,
        picNav:picAbout
    }
];*/
let $navigation = {
    navItems,
    linkConfig
}

export default  $navigation;
