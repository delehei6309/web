<template>
    <div class="solution">
        <div class="banner-box"><img src="../images/picture/pic1.jpg" alt=""></div>
        <div>
            <div class="clear box-width">
                <navigation-list :navItems="navItems"></navigation-list>
                <!--<router-view  class="content-view"></router-view>-->
                关于我们{{navItems.children}}
                <a type="button">点我</a>
            </div>
            <ul>
                <li v-for="item in navItems">
                    <dl>
                        <dt>{{item.title}}</dt>
                        <dd>
                            <div v-for="child in item.children">
                                <div>{{child.catename}}</div>
                                <div>
                                    <p v-for="list in child.articleList">{{list.title}}</p>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-information.less';
    import NavigationList from '../components/NavigationChild';
    import {mapState} from 'vuex';
    //import store from '../store';
    export default {
        name: 'about',
        data(){
            return {
                /*navItems:[
                {
                    name:'数据中心建设',
                    link:'my',
                    val:1,
                    child:[
                        {
                            name:'数据中心建设',
                            link:'/parent/solution/data-center'
                        },
                        {
                            name:'网络及安全',
                            link:'/parent/solution/network-security'
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
            ]*/

            }
        },
        created(){
            console.log('000000000000000----------->>>>',this.merchantNumStatus);
            this.$store.dispatch('getNavigation',2);
            console.log('000000000000000----------->>>>',this.navItems);
        },
        components: {
            NavigationList
        },
        computed: {
            ...mapState([
                'merchantNumStatus','navItems'
            ])
        },
        methods: {

        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
