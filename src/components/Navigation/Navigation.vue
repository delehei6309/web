<template>
    <div class="nav">
        <div class="nav-content">
            <ul class="clear">
                <li v-for="(item,index) in navItems"
                    @mouseenter="mouseenterEvent(item)"
                    @mouseleave="mouseleaveEvent(item)"
                    @click="item.show=false">
                    <div class="nav-view">
                        <router-link :to="{path:item.link}"
                                     active-class="menu-active"
                        >{{item.title}}</router-link>
                    </div>
                    <template v-if="item.children && item.children.length>0">
                        <template v-if="item.id == 1"><!--产品信息-->
                            <div class="nav-child" :style="{'width':'600px'}" v-show="item.show" @click="item.show=false">
                                <dl v-for="(child,k) in item.children" class="clear">
                                    <dt class="nav-child-view">
                                        <router-link :to="{name: 'product-list', params: { id: child.id }}"
                                                     active-class="menu-active"
                                        >{{child.catename}}</router-link>
                                    </dt>
                                    <dd v-for="grandson in child.articleList">
                                        <router-link :to="{name:'',params:{id:grandson.id || '234'}}"
                                                     active-class="menu-active"
                                        >{{grandson.title}}</router-link>
                                    </dd>
                                </dl>
                            </div>
                        </template>
                        <template v-if="item.id != 1 && item.id != 0">
                            <div class="nav-child" :style="{'width':'300px'}" v-show="item.show" @click="item.show=false">
                                <dl v-for="(child,k) in item.children" class="clear">
                                    <dt class="nav-child-view">
                                        <router-link :to="{name:'',params:{id:child.id || '234'}}"
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
                        id:0,
                        title:'首页',
                        link:'/parent/home',
                        children:null,
                        show:false
                    },{
                        id:1,
                        title:'产品信息',
                        link:'/parent/product-information',
                        children:null,
                        show:false
                    },{
                        id:2,
                        link:'/parent/press-center',
                        title:'新闻中心',
                        children:null,
                        show:false
                    },{
                        id:3,
                        link:'/parent/successful-case',
                        title:'成功案例',
                        children:null,
                        show:false
                    },{
                        id:4,
                        link:'/parent/solution',
                        itle:'解决方案',
                        children:null,
                        show:false
                    },{
                        id:5,
                        link:'/parent/technical-support',
                        title:'技术支持',
                        children:null
                    },{
                        id:6,
                        link:'/parent/about',
                        title:'关于公司',
                        children:null,
                        show:false
                    },{
                        id:7,
                        link:'/parent/join-us',
                        title:'加入我们',
                        children:null,
                        show:false
                    },{
                        id:8,
                        link:'/parent/contact-us',
                        title:'联系我们',
                        children:null,
                        show:false
                    }
                ]
            }
        },
        created(){

        },
        computed: {},
        methods: {
            mouseenterEvent(item){
                if(!item.children || item.children.length<1){
                    $api.post('/index/cate/moveOnCate.html').then((res)=>{
                        if(res.code == 200){
                            item.children = res.data.secondCateList;
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
