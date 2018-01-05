<template>
    <div class="inner-list product-list">
        <div class="product-content">
            <!--产品列表-->
            <div class="clear product-items">
                <dl v-for="(item) in articleList">
                    <dt>
                        <router-link :to="{name:'product-detail',params:{id:item.id}}"><img  v-lazy="item.image" alt=""></router-link>

                    </dt>
                    <dd>
                        <span>名称：</span><router-link :to="{name:'product-detail',params:{id:item.id}}">{{item.name}}</router-link>
                    </dd>
                    <dd>
                        <span>编号：</span><span>{{item.number}}</span>
                    </dd>
                </dl>
            </div>
            <!--分页-->
            <div class="pagination-wrap">
                <b-pagination size="md" :total-rows="totalRows" v-model="pageNo" :per-page="pageSize" align="center" @change="pageChange"></b-pagination>
            </div>
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
                pageSize:20,
                pageNo:0,
                totalRows:100,
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
                let {pageSize,pageNo} = this;
                let url = '/index/product/clickProductCate.html';
                if(paramsId){
                    //若存在id
                    url = '/index/product/getProductListBySecondCateid.html';
                }
                $api.post(url,{paramsId,pageSize,pageNo}).then((res)=>{
                    if(res.code == 200){
                        this.articleList = res.data.articleList;
                        /*res.data.articleList.map((item)=>{
                            this.articleList.push(item);
                        });*/
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
