<template>
    <div class="solution">

        解决方案
        <navigation :navItems="navItems"></navigation>
        <router-view  class="content-view"></router-view>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/solution.less';
    import Navigation from '../components/Navigation';
    export default {
        name: 'solution',
        data(){
            return {
                navItems:[
                {
                    name:'数据中心建设123',
                    link:'my',
                    show:false,
                    child:[
                        {
                            name:'网络及安全',
                            link:'solution/network-security'
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
                    show:true,
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
            Navigation
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
