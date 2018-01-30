<template>
    <div class="product-information">
        <div class="banner-box" >
            <img class="banner-img" v-for="item in navItems" v-if="$route.path.indexOf(item.link)>-1"
                 :src="item.image" alt="">
        </div>
        <div>
            <div class="clear box-width">
                <navigation-list  v-if="$route.path.indexOf(item.link)>-1" :title="item.title" :id="item.id" v-for="item in navItems"></navigation-list>
                <div class="right inner-right">
                    <div class="inner-list-title">
                        <h6>{{listName}}</h6>
                    </div>
                    <router-view ></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-information.less';
    import NavigationList from '../components/NavigationChild';
    import Toast from '../components/Toast';
    import {mapState} from 'vuex';
    export default {
        name: 'product-information',
        data(){
            return {
                listName:'产品信息',
                //navItems:[],
                articleList:[],
                routeName:this.$route.name,
                data:123,
                pageObject:{
                    pageNo:0,
                    pageSize:20,
                    totalRows:100
                }

            }
        },
        created(){
            console.log(this.navItems);

        },
        components: {
            NavigationList
        },
        computed: {
            ...mapState([
                'navItems'
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
