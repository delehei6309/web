const picSolution = require('./images/yy89.jpg');
const picNews = require('./images/yy90.jpg');
const picTechnical = require('./images/yy93.jpg');
const picSuccess = require('./images/yy91.jpg');
const picAbout = require('./images/yy92.jpg');
let navItems = [
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
]
export default  navItems;
