<template>
    <div class="inner-detail product-detail">
        <!--详细内容-->
        <div class="inner-main" v-if="productInfor">
            <div class="product-detail-img img-box">
                <img v-lazy="productInfor.image" alt="">
            </div>
            <div v-html="productInfor.content" class="content-wrap"></div>
        </div>
        <div class="inner-main" v-else>
            <p v-if="productInfor">此处空空，没有内容！</p>
            <p v-else>加载中，请稍后......</p>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-detail.less';
    //import axios from 'axios';
    import Toast from "../components/Toast/toast";
    export default {
        props:[],
        name: 'product-detail',
        data(){
            return {
                router: 'ppp',
                productInfor:null
            }
        },
        created(){
            $api.post('/index/product/productDetail.html',{
                id:this.$route.params.id
            }).then((res)=>{
                if(res.code == 200){
                    this.productInfor = res.data.productInfo;
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
