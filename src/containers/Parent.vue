<template>
    <div class="parent">
        <index-header></index-header>
        <div class="nav">
            <div class="nav-content">
                <ul class="clear">
                    <li v-for="(item,index) in navItems">
                        <router-link class="menu" :to="{path:item.link}"
                            active-class="menu-active"
                            replace>{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view  class="content-view"></router-view>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import IndexHeader from '../components/IndexHeader';
    import IndexFooter from '../components/IndexFooter';
    import $api from '../tools/api';
    import '../less/parent.less';
    export default {
        name: 'parent',
        data(){
            return {
                navItems:[
                    {
                        link:'home',
                        name:'首页'
                    },{
                        link:'solution',
                        name:'解决方案'
                    },{
                        link:'',
                        name:'新闻中心'
                    },{
                        link:'',
                        name:'服务中心'
                    },{
                        link:'',
                        name:'成功案例'
                    },{
                        link:'',
                        name:'关于我们'
                    }
                ]
            }
        },
        created(){

        },
        components: {
            IndexHeader,IndexFooter
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
