<template>
    <div class="product-information">
        <div class="banner-box" @click="click"><img src="../images/picture/pic1.jpg" alt=""></div>
        <div>
            <div class="clear box-width">
                <navigation-list :title="'产品列表'" :navs="navItems" :type="'product'"></navigation-list>
                <div class="right inner-right">
                    <div class="inner-list-title">
                        <h6>{{listName}}</h6>
                    </div>
                    <router-view :articleList="articleList"></router-view>
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
                data:123

            }
        },
        created(){
            let paramId = this.$route.params.id;
            $api.post('/index/cate/moveOnCate.html').then((res)=>{
                if(res.code == 200){
                    res.data.secondCateList.map((item)=>{
                        this.navItems.push(item);
                        if(paramId && (item.id == paramId.toString().substring(0,2))){//id之间的关系
                            this.listName = item.catename;
                        }
                    });
                }else{
                    Toast(res.message || '服务器错误！');
                }
            });
            let url = '/index/product/clickProductCate.html';
            if(paramId){
                //url = '/index/product/getProductListBySecondCateid.html';
            }
            $api.post(url,{/*pageCount*/}).then((res)=>{
                if(res.code == 200){
                    res.data.articleList.map((item)=>{
                        this.articleList.push(item);
                    });
                }else{
                    Toast(res.message || '服务器错误！');
                }
            });
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
