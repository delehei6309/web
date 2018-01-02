<template>
    <div class="inner-list product-list">
        <!--产品列表-->
        <div class="clear product-items">
            <dl v-for="(item) in articleList">
                <dt>
                    <router-link :to="{name:'product-detail',params:{id:item.id}}"><img :src="item.image" alt=""></router-link>

                </dt>
                <dd>
                    <span>名称：</span><router-link :to="{name:'product-detail',params:{id:item.id}}">{{item.name}}</router-link>
                </dd>
                <dd>
                    <span>编号：</span><span>{{item.number}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-list.less';
    import axios from 'axios';
    export default {
        props:['articleList'],
        name: 'product-list',
        data(){
            return {
                router: 'ppp'
            }
        },
        created(){
            console.log(this.articleList)
            this.getData();

        },
        components: {

        },
        computed: {},
        methods: {
            getData(){
                let id = this.$route.params.id;
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
