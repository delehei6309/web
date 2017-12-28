<template>
    <div class="parent">
        <index-header></index-header>
        <self-navigation></self-navigation>
        <router-view  class="content-view"></router-view>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import IndexHeader from '../components/IndexHeader';
    import SelfNavigation from '../components/Navigation';
    import IndexFooter from '../components/IndexFooter';
    import $api from '../tools/api';
    import '../less/parent.less';
    export default {
        name: 'parent',
        data(){
            return {
                navItems:[
                    {
                        link:'/parent/home',
                        name:'首页'
                    },{
                        link:'/parent/product-information',
                        name:'产品信息'
                    },{
                        link:'/parent/press-center',
                        name:'新闻中心'
                    },{
                        link:'/parent/successful-case',
                        name:'成功案例'
                    },{
                        link:'/parent/solution',
                        name:'解决方案'
                    },{
                        link:'/parent/technical-support',
                        name:'技术支持'
                    },{
                        link:'/parent/about',
                        name:'关于公司'
                    },{
                        link:'/parent/join-us',
                        name:'加入我们'
                    },{
                        link:'/parent/contact-us',
                        name:'联系我们'
                    }
                ]
            }
        },
        created(){

        },
        components: {
            IndexHeader,SelfNavigation,IndexFooter
        },
        computed: {},
        methods: {

        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
