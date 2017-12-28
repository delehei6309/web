<template>
    <div class="successful-case">
        <div class="banner-box"><img src="../images/picture/pic1.jpg" alt=""></div>
        <div>
           <!-- <div class="clear box-width">
                <navigation-list :navItems="navItems"></navigation-list>
                <router-view  class="content-view"></router-view>
            </div>-->
            案例
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-information.less';
    import NavigationList from '../components/NavigationChild';
    export default {
        name: 'successful-case',
        data(){
            return {
                navItems:[
                {
                    name:'数据中心建设',
                    link:'my',
                    val:1,
                    child:[
                        {
                            name:'数据中心建设',
                            link:'/parent/product-information/data-center'
                        },
                        {
                            name:'网络及安全',
                            link:'/parent/product-information/network-security'
                        },
                        {
                            name:'云计算',
                            link:'solution/cloud-computing'
                        },
                        {
                            name:'云桌面',
                            link:'solution/cloud-desktop'
                        }
                    ]
                },{
                    name:'开场白',
                    link:'speak',
                    val:2,
                    child:[
                        {
                            name:'说点吧',
                            link:'birth'
                        },
                        {
                            name:'随意一些',
                            link:'place'
                        },
                        {
                            name:'那就来',
                            link:'status'
                        }
                    ]
                },{
                    name:'才艺展示',
                    link:'show'
                },{
                    name:'获奖感言',
                    link:'thanks'
                }
            ]

            }
        },
        created(){

        },
        components: {
            NavigationList
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
