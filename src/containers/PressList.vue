<template>
    <div class="inner-list press-list">
        <!--产品列表-->
        <div class=" press-items">
            <dl v-for="(item) in articleList" class="clear">
                <dt class="ellipsis">
                    <router-link :to="{'name':'press-detail',params:{id:item.id}}">{{item.title}}</router-link>
                </dt>
                <dd class="right">{{item.create_time}}</dd>
            </dl>
        </div>
        <!--分页-->
        <div class="pagination-wrap">
            <b-pagination size="md" :total-rows="totalRows" v-model="pageNo" :per-page="pageSize" align="center" @change="pageChange"></b-pagination>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/press-list.less';
    import axios from 'axios';
    import Toast from '../components/Toast';
    export default {
        //props:['articleList'],
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
            this.getPressList();
        },
        components: {

        },
        computed: {},
        methods: {
            getPressList(){
                let paramsId = this.$route.params.id;
                let {pageSize,pageNo} = this;
                let url = '/index/article/clickCate.html';
                if(paramsId){
                    url = '/index/article/getArticleList.html';
                }
                $api.post(url,{paramsId,pageSize,pageNo}).then((res)=>{
                    if(res.code == 200){
                        this.articleList = res.data.articleList;
                    }else{
                        Toast(res.message || '服务器错误！');
                    }
                });
            },
            pageChange(){
                this.$nextTick(()=>{
                    this.getPressList();
                });
            }
        },

        watch: {

        },
        destroyed(){

        }
    }
</script>
