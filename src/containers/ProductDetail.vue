<template>
    <div class="inner-detail product-detail">
        <!--详细内容-->
        <div class="inner-main">
            <div class="product-detail-img">
                <img :src="productInfor.image" alt="">
            </div>
            <div>{{productInfor.content}}}</div>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/product-detail.less';
    import axios from 'axios';
    import Toast from "../components/Toast/toast";
    export default {
        props:[],
        name: 'product-detail',
        data(){
            return {
                router: 'ppp',
                productInfor:{}
            }
        },
        created(){
            $api.post('/index/product/productDetail.html',{
                id:123
            }).then((res)=>{
                if(res.code == 200){
                    this.productInfor = res.data.productInfor;
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
