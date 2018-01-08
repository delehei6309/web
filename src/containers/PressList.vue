<template>
    <div class="inner-list press-list">
        <template v-if="articleList && articleList.length>0">
            <!--产品列表-->
            <div class=" press-items">
                <dl v-for="(item) in articleList" class="clear">
                    <dt class="ellipsis">
                        <router-link :to="{'name':routeName[routePath],params:{id:item.id}}">{{item.title}}</router-link>
                    </dt>
                    <dd class="right">{{item.create_time}}</dd>
                </dl>
            </div>
            <!--分页-->
            <div class="pagination-wrap">
                <b-pagination size="md" :total-rows="totalRows" v-model="pageCount" :per-page="pageSize" align="center" @change="pageChange"></b-pagination>
            </div>
        </template>
        <template v-else>
            <div>
                没有相关内容
            </div>
        </template>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/press-list.less';
    import axios from 'axios';
    import Toast from '../components/Toast';
    export default {
        props:['id'],
        name: 'product-list',
        data(){
            return {
                pageSize:15,
                pageCount:1,
                totalRows:0,
                articleList:null,
                routeName:{
                    'press-list':'press-detail',
                    'solution-list':'solution-detail',
                    'successful-list':'successful-detail'
                },
                routePath:'press-list'

            }
        },
        created(){
            console.log(this.$route);
            let path = this.$route.path;
            if(this.$route.name.indexOf('first')>-1){
                let pathArr = path.split('/');
                if(pathArr && pathArr.length>0){
                    this.routePath = pathArr[pathArr.length-1];
                }
            }else{
                this.routePath = this.$route.name;
            }

            this.getPressList();
        },
        components: {

        },
        computed: {},
        methods: {
            getPressList(){
                let paramsId = this.$route.params.id;
                let {pageSize,pageCount} = this;
                let url = '/index/article/clickCate.html';
                let data = {
                    cateid:this.id,
                    pageCount,
                    pageSize
                };
                if(paramsId){
                    url = '/index/article/getArticleList.html';
                    data = {
                        second_cateid:paramsId,
                        pageCount,
                        pageSize
                    };
                }
                $api.post(url,data).then((res)=>{
                    if(res.code == 200){
                        this.articleList = res.data.articleList;
                        this.totalRows = res.data.articleCount;
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
