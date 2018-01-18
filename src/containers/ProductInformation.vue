<template>
    <div class="product-information">
        <div class="banner-box" ><img class="banner-img" src="../images/banner/product.jpg" alt=""></div>
        <div>
            <div class="clear box-width">
                <navigation-list :title="'产品列表'" :id="2"></navigation-list>
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
    //import {navItems} from '../../navigation.js';
    export default {
        name: 'product-information',
        data(){
            return {
                listName:'产品信息',
                navItems:[],
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


        },
        components: {
            NavigationList
        },
        computed: {
        },
        methods: {
        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
