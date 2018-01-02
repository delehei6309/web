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
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/press-list.less';
    import axios from 'axios';
    import Toast from '../components/Toast';
    export default {
        props:['articleList'],
        name: 'product-list',
        data(){
            return {
                router: 'ppp'
            }
        },
        created(){
            if(this.$route.params.id){
                $api.post('/index/article/getArticleList.html').then((res)=>{
                    if(res.code == 200){
                        res.data.articleList.map((item)=>{
                            this.articleList.push(item);
                        });
                    }else{
                        Toast(res.message || '服务器错误！');
                    }
                });
            }

            this.getData();

        },
        components: {

        },
        computed: {},
        methods: {
            getData(){
                //let id = this.$route.params.id;
                /*$api.post('/index/cate/moveOnCate.html',{id}).then((res)=>{
                    console.log(res.data);
                });*/
            }
        },

        watch: {

        },
        destroyed(){

        }
    }
</script>
