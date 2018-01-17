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
                <li class="right">
                    <span class="tit">点击：</span>
                    <span>{{click}}次</span>
                </li>
            </ul>
            <p class="desc">{{desc}}</p>
            <div v-html="content"></div>
        </div>
        <p v-else>此处空空，没有内容！</p>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/press-detail.less';
    import axios from 'axios';
    import Toast from "../components/Toast/toast";
    export default {
        props:['navId'],
        name: 'other-detail',
        data(){
            return {
                router: '',
                title:'',
                create_time:'',
                author:'',
                click:'',
                desc:'',
                content:''
            }
        },
        created(){
            this.getSecondCateid()
            console.log(this.navId);
        },
        components: {

        },
        computed: {},
        methods: {
            getData(){
                $api.post('/index/article/getArticleList.html',{
                    second_cateid:this.secondCateid
                }).then((res)=>{
                    if(res.code == 200){
                        for(let i in res.data.articleList){
                            this[i] = res.data.articleList[i];
                        }
                    }else{
                        Toast(res.message || '服务器错误！')
                    }
                });
            },
            getSecondCateid(){
                if(this.$route.params.id){
                    this.secondCateid = this.$route.params.id;
                    this.getData();
                }else{
                    //默认显示第一条
                    $api.post('/index/article/clickCate.html',{
                        cateid:this.navId
                    }).then((res)=>{
                        if(res.code == 200){
                            this.secondCateid = res.data.secondCateList[0].id;
                            this.getData();
                        }else{
                            Toast(res.message || '服务器错误！')
                        }
                    });
                }
            }
        },

        watch: {
            /*listData(val){
                this.data = val;
            }*/
        },
        destroyed(){

        }
    }
</script>
