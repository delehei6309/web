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
                    <div class="news-content com-content">
                        <text-iscroll></text-iscroll>
                    </div>
                </div>
                <div class="big-con right">
                    <inner-title :title="'公司简介'"></inner-title>
                    <div class="intro com-content">
                        <div class="img-box">
                            <img src="../images/picture/kaka.jpg" alt="" >
                        </div>
                        <span>
                            2006-07赛季意甲联赛里，卡卡打入8球，被评为意甲联赛最佳球员和最佳外援。在欧洲冠军联赛里，卡卡在1/8决赛射入致胜的一球；在1/4决赛，半决赛中，卡卡都有进球，协助AC米兰杀入决赛。在决赛中，卡卡助攻因扎吉射入一球，协助AC米兰第七次夺取冠军杯。卡卡以10球成为本届冠军联赛的最佳射手并被评为最佳球员和最佳前锋。
                            2007年12月，在日本举行的世界俱乐部杯决赛中，卡卡两次助攻因扎吉并打入一球，帮助AC米兰以4比2完胜博卡青年，夺得冠军，同时卡卡也被评为2007年世界俱乐部杯最佳球员、2007年金球奖及世界足球先生等多个奖项。
                            2007-08赛季，卡卡在意甲联赛里打入15球，是AC米兰队中的头号射手。卡卡也是联赛助攻第二多的球员。但AC米兰整体表现不佳，没有获得2008-09赛季冠军联赛的参赛资格
                        </span>
                    </div>
                </div>
            </div>
            <div class="box-width clear">

                <div class="big-con">
                    <inner-title :title="'解决方案'"></inner-title>
                    <div class="intro com-content">
                        <div class="img-box">
                            <img src="../images/picture/kaka.jpg" alt="" >
                        </div>
                        <span>
                            2006-07赛季意甲联赛里，卡卡打入8球，被评为意甲联赛最佳球员和最佳外援。在欧洲冠军联赛里，卡卡在1/8决赛射入致胜的一球；在1/4决赛，半决赛中，卡卡都有进球，协助AC米兰杀入决赛。在决赛中，卡卡助攻因扎吉射入一球，协助AC米兰第七次夺取冠军杯。卡卡以10球成为本届冠军联赛的最佳射手并被评为最佳球员和最佳前锋。
                            2007年12月，在日本举行的世界俱乐部杯决赛中，卡卡两次助攻因扎吉并打入一球，帮助AC米兰以4比2完胜博卡青年，夺得冠军，同时卡卡也被评为2007年世界俱乐部杯最佳球员、2007年金球奖及世界足球先生等多个奖项。
                            2007-08赛季，卡卡在意甲联赛里打入15球，是AC米兰队中的头号射手。卡卡也是联赛助攻第二多的球员。但AC米兰整体表现不佳，没有获得2008-09赛季冠军联赛的参赛资格
                        </span>
                    </div>
                </div>
                <div class="small-con right">
                    <inner-title :title="'案例展示'" :link="'/parent/solution/data-center'"></inner-title>
                    <div class="news-content com-content">
                        <text-iscroll></text-iscroll>
                    </div>
                </div>
            </div>
            <div class="box-width clear">

                <div class="big-con">
                    <inner-title :title="'合作伙伴'"></inner-title>
                    <div class="friend com-content">
                        <ul class="clear">
                            <li v-for="(item,index) in friends">
                                <img :src="item" >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="small-con right">
                    <inner-title :title="'我们的位置'"></inner-title>
                    <div style="height:200px;">
                        <el-amap class="amap-box"
                                 vid="amap" :plugin="plugin"
                                 :center="center"></el-amap>
                    </div>
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
    import TextIscroll from '../components/TextIscroll';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    const pic1 = require('../images/picture/pic1.jpg');
    const pic2 = require('../images/picture/pic2.jpg');
    const pic3 = require('../images/picture/pic3.jpg');
    const pic4 = require('../images/picture/pic4.jpg');
    const friend1 = require('../images/friend1.jpg');
    const friend2 = require('../images/friend2.jpg');
    const friend3 = require('../images/friend3.jpg');
    import Vue from 'vue';
    import AMap from 'vue-amap';
    Vue.use(AMap);
    AMap.initAMapApiLoader({
        key: 'your amap key',
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
    });
    export default {
        name: 'home',
        data(){
            let self = this;
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
                },
                newSwiperItems:[

                ],
                newSwiperOption:{
                    loop: true,
                    direction : 'vertical',
                    slidesPerView:8,
                    autoplay: {
                        delay: 0,
                        //disableOnInteraction: false
                    }
                },
                friends:[friend1,friend2,friend3,friend1,friend2,friend3,friend1,friend3],
                zoom: 12,
                center: [116.312878,39.872414],
                lng: 0,
                lat: 0,
                loaded: false,
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                if (result && result.position) {
                                    self.lng = result.position.lng;
                                    self.lat = result.position.lat;
                                    self.center = [self.lng, self.lat];
                                    self.loaded = true;
                                    self.$nextTick();
                                }
                            });
                        }
                    }
                }]
                /*address: '',
                events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        o.getCurrentPosition((status, result) => {
                            if (result && result.position) {
                                self.lng = result.position.lng;
                                self.lat = result.position.lat;
                                self.center = [self.lng, self.lat];
                                self.loaded = true;
                                self.$nextTick();
                            }
                        });
                    },
                    click(e) {
                        let { lng, lat } = e.lnglat;
                        self.lng = lng;
                        self.lat = lat;

                        // 这里通过高德 SDK 完成。
                        var geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });
                        geocoder.getAddress([lng ,lat], function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    self.address = result.regeocode.formattedAddress;
                                    self.$nextTick();
                                }
                            }
                        });
                    }
                }*/
            }
        },
        created(){

        },
        components: {
            swiper,swiperSlide,InnerTitle,TextIscroll,AMap
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
