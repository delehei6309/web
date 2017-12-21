<template>
    <div class="home">
        <div class="banner-box">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,index) in swiperItems"><img :src="item" alt=""></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>
        </div>
        <div class="bulletin-box">
            <div class="box-width">
                公告
            </div>
        </div>
        <div class="inner-box">
            <div class="box-width clear">
                <div class="small-con">
                    <inner-title :title="'新闻动态'" :link="'/parent/solution/data-center'"></inner-title>
                </div>
                <div class="big-con right">
                    <inner-title :title="'公司简介'"></inner-title>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/home.less';
    import 'swiper/dist/css/swiper.css';
    import InnerTitle from '../components/InnerTitle';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    const pic1 = require('../images/picture/pic1.jpg');
    const pic2 = require('../images/picture/pic2.jpg');
    const pic3 = require('../images/picture/pic3.jpg');
    const pic4 = require('../images/picture/pic4.jpg');
    console.log(swiper,'222', swiperSlide);
    export default {
        name: 'home',
        data(){
            return {
                swiperItems:[pic1,pic2,pic3,pic4],
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    effect: 'fade',
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        //disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        created(){

        },
        components: {
            swiper,swiperSlide,InnerTitle
        },
        computed: {
            /*swiper() {
                return this.$refs.mySwiper.swiper
            }*/
        },
        mounted(){
            /*console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)*/
        },
        methods: {

        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
