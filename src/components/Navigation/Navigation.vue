<template>
    <div class="nav">
        <div class="nav-content box-width">
            <ul class="clear">
                <li v-for="(item,index) in navItems"
                    @mouseenter="mouseenterEvent(item,index)"
                    @mouseleave="mouseleaveEvent(item)"
                    @click="item.show=false"
                    >
                    <div class="nav-view">
                        <router-link :to="{path:item.link}"
                                     active-class="menu-active"
                        >{{item.title}}</router-link>
                    </div>
                    <template v-if="item.children && item.children.length>0">
                        <template v-if="item.id == 2"><!--产品信息-->
                            <div class="nav-child" :style="{'width':'500px'}" v-show="item.show" @click="item.show=false">
                                <dl v-for="(child,k) in item.children" class="clear">
                                    <dt class="nav-child-view">
                                        <router-link :to="{name: 'product-list', params: { id: child.id },query:{pid:child.pid}}"
                                                     active-class="menu-active"
                                        >{{child.catename}}</router-link>
                                    </dt>
                                    <dd v-for="grandson in child.secondCateList">
                                        <router-link :to="{name:'product-list',params:{id:grandson.id || '234'}}"
                                                     active-class="menu-active"
                                        >{{grandson.catename}}</router-link>
                                    </dd>
                                </dl>
                            </div>
                        </template>
                        <template v-if="item.id != 2 && item.id != 1">
                            <div class="nav-child clear" :style="{'width':item.width || '300px'}" v-show="item.show" @click="item.show=false">
                                <dl v-for="(child,k) in item.children" class=" t">
                                    <dt class="nav-child-view">
                                        <router-link :to="{name:item.name,params:{id:child.id || '234'}}"
                                                     active-class="menu-active"
                                        >{{child.catename}}</router-link>
                                    </dt>
                                </dl>
                            </div>
                        </template>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './navigation.less';
    import $api from '../../tools/api';
    import Toast from '../Toast';
    import {navItems} from '../../../navigation.js';
    export default {
        name: 'navigation-child',
        //props:['navItems'],
        data(){
            return {
                navItems:[
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
                        show:false
                    },{
                        id:4,
                        link:'/parent/successful-case',
                        title:'成功案例',
                        children:null,
                        show:false
                    },{
                        id:6,
                        link:'/parent/solution',
                        name:'solution-list',
                        title:'解决方案',
                        children:null,
                        width:'400px',
                        show:false
                    },{
                        id:7,
                        link:'/parent/technical-support',
                        title:'技术支持',
                        children:null
                    },{
                        id:8,
                        link:'/parent/about',
                        title:'关于我们',
                        children:null,
                        show:false
                    }/*,{
                        id:9,
                        link:'/parent/join-us',
                        title:'加入我们',
                        children:null,
                        show:false
                    },{
                        id:10,
                        link:'/parent/contact-us',
                        title:'联系我们',
                        children:null,
                        show:false
                    }*/
                ]
            }
        },
        created(){
            //Toast('服务器错误！');
        },
        computed: {},
        methods: {
            mouseenterEvent(item,index){
                if(index == 0){
                    //首页没有子导航
                    return false;
                }
                let url = '/index/cate/moveOnCate.html';
                if(index == 1){
                    //产品
                    url = '/index/product_cate/getProductCateList.html';
                }
                let cateid = item.id;
                console.log(cateid);
                if(!item.children || item.children.length<1){
                    $api.post(url,{cateid}).then((res)=>{
                        if(res.code == 200){
                            item.children = res.data.secondCateList;
                            if(index == 1){
                                //产品真是特殊
                                item.children = res.data.productCateList;
                            }
                        }else{
                            Toast(res.message || '服务器错误！');
                        }
                    });
                }
                console.log(item.children);
                item.show = true;
            },
            mouseleaveEvent(item){
                item.show = false;
                console.log(item.show)
            },
            navChange(item){
                //item.val == this.activeVal ? this.activeVal = '' : this.activeVal = item.val;
            }
        },
        destroyed(){

        }
    }
</script>
