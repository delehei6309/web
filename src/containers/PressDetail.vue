<template>
    <div class="inner-detail">
        <!--详细内容-->
        <div class="inner-main">
            <h6>{{articleInfor.title}}</h6>
            <ul class="clear">
                <li>
                    <span>时间：</span>
                    <span>{{articleInfor.create_time}}</span>
                </li>
                <li>
                    <span>作者：</span>
                    <span>{{articleInfor.author}}</span>
                </li>
                <li>
                    <span>点击：</span>
                    <span>{{articleInfor.click}}次</span>
                </li>
            </ul>
            <p>{{articleInfor.desc}}</p>
            <div v-html="articleInfor.content">

            </div>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-list.less';
    import axios from 'axios';
    import Toast from "../components/Toast/toast";
    export default {
        props:[],
        name: 'inner-detail',
        data(){
            return {
                router: 'ppp',
                articleInfor:{}
            }
        },
        created(){
            $api.post('/index/article/articleDetail.html',{
                article_id:123
            }).then((res)=>{
                if(res.code == 200){
                    this.articleInfor = res.data.articleInfor;
                }else{
                    Toast(res.message || '服务器错误！')
                }
            });

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
