<template>
    <div class="inner-list product-list">
        <div v-if="articleList && articleList.length>0" class="product-content">
            <!--产品列表-->
            <div class="clear product-items">
                <dl v-for="(item) in articleList">
                    <dt>
                        <router-link :to="{name:'product-detail',params:{id:item.id},query:{second_cateid:item.second_cateid}}"><img  v-lazy="item.image" alt=""></router-link>

                    </dt>
                    <dd class="ellipsis">
                        <span>名称：</span><router-link
                            :to="{name:'product-detail',params:{id:item.id},query:{second_cateid:item.second_cateid}}"
                            :title="item.name">{{item.name}}</router-link>
                    </dd>
                    <dd>
                        <span>编号：</span><span>{{item.number}}</span>
                    </dd>
                </dl>
            </div>
            <!--分页-->
            <div class="pagination-wrap">
                <b-pagination size="md" :total-rows="productCount" v-model="pageCount" :per-page="pageSize" align="center" @change="pageChange"></b-pagination>
            </div>
        </div>
        <div v-else>
            <p v-if="articleList">暂无相关内容！</p>
            <p v-else>加载中，请稍后......</p>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-list.less';
    import axios from 'axios';
    import Toast from '../components/Toast';
    export default {
        //props:[''],
        name: 'product-list',
        data(){
            return {
                pageSize:15,
                pageCount:1,
                productCount:0,
                articleList:null
            }
        },
        created(){
            console.log(this.articleList)
            this.getProductList();

        },
        components: {},
        computed: {},
        methods: {
            getProductList(){
                let paramsId = this.$route.params.id || null;
                let {pageCount,pageSize} = this;
                let url = '/index/product/clickProductCate.html';
                let data = {
                    pageCount,
                    pageSize
                };
                if(paramsId){
                    //若存在id
                    url = '/index/product/getProductListBySecondCateid.html';
                    data = {
                        second_cateid:paramsId,
                        pageCount,
                        pageSize
                    };
                    if(this.$route.query.pid == '0'){
                        url = '/index/product/getProductListByCateid.html';
                        data = {
                            cate_id:paramsId,
                            pageCount,
                            pageSize
                        }
                    }
                }
                $api.post(url,data).then((res)=>{
                    if(res.code == 200){
                        this.articleList = res.data.articleList;
                        this.productCount = res.data.productCount;
                    }else{
                        Toast(res.message || '服务器错误！');
                    }
                });
            },
            //分页
            pageChange(){
                this.$nextTick(()=>{
                    this.getProductList();
                });
            }
        },

        watch: {

        },
        destroyed(){

        }
    }
</script>
