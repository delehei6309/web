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

            }
        },
        created(){
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
