<template>
    <div class="product-information">
        <div class="banner-box" @click="click"><img src="../images/picture/pic1.jpg" alt=""></div>
        <div>
            <div class="clear box-width">
                <navigation-list :title="'产品列表'" :navs="navItems"></navigation-list>
                <div class="right">
                    <router-view v-if="routeName!='product-information'"  class="content-view" :articleList="articleList"></router-view>
                    <div v-else>所有</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-information.less';
    import NavigationList from '../components/NavigationChild';
    //import {navItems} from '../../navigation.js';
    export default {
        name: 'product-information',
        data(){
            return {
                navItems:[],
                articleList:[],
                routeName:this.$route.name,
                data:123

            }
        },
        created(){
            console.log(this.navItems)
            //setTimeout(()=>{
                $api.post('/index/product/clickProductCate.html').then((res)=>{
                    if(res.code == 200){
                        res.data.productCateList.map((item)=>{
                            item.children = [];
                            this.navItems.push(item);

                        });
                        res.data.articleList.map((item)=>{
                            this.articleList.push(item);
                        });
                    }
                });

            //},3000);
        },
        components: {
            NavigationList
        },
        computed: {
            key() {
                return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
            }
        },
        methods: {
            click(){
                this.data = 1111111111111;
            }
        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
