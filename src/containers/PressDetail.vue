<template>
    <div class="inner-detail">
        <!--详细内容-->
        <div class="inner-main" v-if="title || author || create_time || click || desc || content">
            <h6 class="tit">{{title}}</h6>
            <p><span class="tit">作者：</span><span>{{author}}</span></p>
            <ul class="clear">
                <li>
                    <span class="tit">时间：</span>
                    <span>{{create_time}}</span>
                </li>
                <!--<li>
                    <span>作者：</span>
                    <span>{{author}}</span>
                </li>-->
                <!--<li class="right">
                    <span class="tit">点击：</span>
                    <span>{{click}}次</span>
                </li>-->
            </ul>
            <p class="desc">{{desc}}</p>
            <div v-html="content"></div>
        </div>
        <div v-else>
            <p v-if="loaded">此处空空，没有内容！</p>
            <p v-else>加载中，请稍后......</p>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/press-detail.less';
    import axios from 'axios';
    import Toast from "../components/Toast/toast";
    export default {
        props:['navId'],
        name: 'inner-detail',
        data(){
            return {
                router: '',
                title:'',
                create_time:'',
                author:'',
                click:'',
                desc:'',
                content:'',
                loaded:false
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
                    //数据获取完毕
                    this.loaded = true;
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
