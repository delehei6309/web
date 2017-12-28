<template>
    <div class="nav">
        <div class="nav-content">
            <ul class="clear">
                <li v-for="(item,index) in navItems" @mouseenter="item.show = true;" @mouseleave="item.show = false;">
                    <div class="nav-view">
                        <router-link :to="{path:item.link}"
                                     active-class="menu-active"
                        >{{item.title}}</router-link>
                    </div>
                    <template v-if="item.children && item.children.length>0">
                        <div class="nav-child" :style="{'width':item.width}" v-show="item.show">
                            <dl v-for="(child,k) in item.children" class="clear">
                                <dt class="nav-child-view">
                                    <router-link :to="{path:child.link}"
                                                 active-class="menu-active"
                                    >{{child.title}}</router-link>
                                </dt>
                                <dd v-for="grandson in child.children">
                                    <router-link :to="{path:child.link}"
                                                 active-class="menu-active"
                                    >{{grandson.title}}</router-link>
                                </dd>
                            </dl>
                        </div>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './navigation.less';
    export default {
        name: 'navigation-child',
        //props:['navItems'],
        data(){
            return {
                navItems:[
                    {
                        link:'/parent/home',
                        title:'首页'
                    },{
                        link:'/parent/product-information',
                        title:'产品信息',
                        width:'600px',
                        show:true,
                        children:[
                            {
                                link:'',
                                title:'HP产品',
                                children:[
                                    {
                                        link:'',
                                        title:'商用台式机'
                                    },{
                                        link:'',
                                        title:'服务器'
                                    },{
                                        link:'',
                                        title:'存储'
                                    }
                                ]
                            },{
                                link:'',
                                title:'IBM产品',
                                children:[
                                    {
                                        link:'',
                                        title:'IBM服务器',
                                    },{
                                        link:'',
                                        title:'存储',
                                    }
                                ]
                            },{
                                link:'',
                                title:'lenovo产品',
                                children:[
                                    {
                                        link:'',
                                        title:'台式机'
                                    },{
                                        link:'',
                                        title:'服务器'
                                    }
                                ]
                            },{
                                link:'',
                                title:'DELL产品',
                                children:[
                                    {
                                        link:'',
                                        title:'台式机'
                                    },{
                                        link:'',
                                        title:'服务器'
                                    }
                                ]
                            },{
                                link:'',
                                title:'浪潮产品',
                                children:[
                                    {
                                        link:'',
                                        title:'服务器'
                                    },{
                                        link:'',
                                        title:'存储'
                                    }
                                ]
                            },{
                                link:'',
                                title:'Cisco产品',
                                children:[
                                    {
                                        link:'',
                                        title:' 网络产品'
                                    }
                                ]
                            },{
                                link:'',
                                title:'H3C产品',
                                children:[
                                    {
                                        link:'',
                                        title:' 网络产品'
                                    }
                                ]
                            }
                        ]
                    },{
                        link:'/parent/press-center',
                        title:'新闻中心'
                    },{
                        link:'/parent/successful-case',
                        title:'成功案例'
                    },{
                        link:'/parent/solution',
                        title:'解决方案'
                    },{
                        link:'/parent/technical-support',
                        title:'技术支持'
                    },{
                        link:'/parent/about',
                        title:'关于公司'
                    },{
                        link:'/parent/join-us',
                        title:'加入我们'
                    },{
                        link:'/parent/contact-us',
                        title:'联系我们'
                    }
                ]
            }
        },
        created(){
        },
        computed: {},
        methods: {
            navChange(item){
                //item.val == this.activeVal ? this.activeVal = '' : this.activeVal = item.val;
            }
        },
        destroyed(){

        }
    }
</script>
