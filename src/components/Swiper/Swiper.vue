<template>
    <div class="swiper-box">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in swiperItems">
                <router-link :to="{path:'#'}"><img :src="item" alt=""></router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css';
    import './swiper.less';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    /*const banner1 = require('../../images/banner/banner1.jpg');
    const banner2 = require('../../images/banner/banner2.jpg');
    const banner3 = require('../../images/banner/banner3.jpg');
    const banner4 = require('../../images/banner/banner4.jpg');
    const banner5 = require('../../images/banner/banner5.jpg');*/
    /*const pic2 = require('../../images/picture/pic2.jpg');
    const pic3 = require('../../images/picture/pic3.jpg');
    const pic4 = require('../../images/picture/pic4.jpg');
    const friend1 = require('../../images/friend1.jpg');
    const friend2 = require('../../images/friend2.jpg');
    const friend3 = require('../../images/friend3.jpg');*/
    export default {
        name: 'swiper-demo',
        props:['scrollItems','viewSize'],
        data(){
            return {
                swiperItems:['banner1','banner2','banner3','banner4','banner5'],
                swiperOption:{
                    /*autoplay: {
                        delay: 3000,
                        disableOnInteraction:false,

                    },*/
                    loop:true,
                    centeredSlides:true,
                    slidesPerView:2,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable:true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on:{
                        init:function(){
                            this.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
                        },
                    },
                    breakpoints: {
                        668: {
                            slidesPerView: 1,
                        }
                    }

                }
            }
        },
        created(){
            //this.compatible();
        },
        components: {
            swiper,swiperSlide
        },
        mounted(){

        },
        computed: {},
        methods: {

        },
        destroyed(){

        }
    }
</script>
