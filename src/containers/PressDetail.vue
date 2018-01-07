<template>
    <div class="inner-detail">
        <!--详细内容-->
        <div class="inner-main">
            <h6>{{title}}</h6>
            <ul class="clear">
                <li>
                    <span>时间：</span>
                    <span>{{create_time}}</span>
                </li>
                <li>
                    <span>作者：</span>
                    <span>{{author}}</span>
                </li>
                <li>
                    <span>点击：</span>
                    <span>{{click}}次</span>
                </li>
            </ul>
            <p class="desc">{{desc}}</p>
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/press-detail.less';
    import axios from 'axios';
    import Toast from "../components/Toast/toast";
    export default {
        props:[],
        name: 'inner-detail',
        data(){
            return {
                router: 'ppp',
                title:'title',
                create_time:'2018-01-01',
                author:'作者',
                click:'1000',
                desc:'摘要',
                content:'content'
            }
        },
        created(){
            $api.post('/index/article/articleDetail.html',{
                id:this.$route.params.id
            }).then((res)=>{
                if(res.code == 200){
                    for(let i in res.data.articleInfo){
                        this[i] = res.data.articleInfo[i];
                    }
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
