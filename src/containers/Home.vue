<template>
    <div class="home">
        <div class="banner-box">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,index) in slideImages">
                    <a :href="item.url">
                        <!--<img :src="item.image" :alt="item.title">-->
                        <div class="slide-child" :style="{backgroundImage:item.image}"></div>
                    </a>
                </swiper-slide>
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
                    <inner-title :title="'新闻动态'"
                                 :link="'/parent/press-center/press-list'"></inner-title>
                    <div class="news-content com-content">
                        <text-iscroll :items="newsList" :link="'/parent/press-center/press-detail/'"></text-iscroll>
                    </div>
                </div>
                <div class="big-con right">
                    <inner-title :title="'公司简介'" :link="'/parent/about/about-list'"></inner-title>
                    <div class="intro com-content" style="padding:25px 0;">
                        <div class="img-box">
                            <img src="../images/intro1.jpg" alt="" >
                        </div>
                        <span>
                            北京致远嘉禾科技发展有限公司，是一家一直致力于成为具有卓越企业精神的IT经营及增值服务的企业。公司总部位于有中国硅谷之称的中关村核心地带，集合中关村技术园区数家高新技术企业资源，为客户提供商用的HP服务器、存储、工作站、 磁带机、IBM服务器等设备，是惠普授权的钻石级经销商。
                        </span>
                    </div>
                </div>
            </div>
            <div class="box-width clear">

                <div class="big-con">
                    <inner-title :title="'解决方案'" :link="'/parent/solution/solution-list'"></inner-title>
                    <div class="intro com-content solution">
                        <ul class="clear solution-items">
                            <li class="clear solution-item" v-for="item in projectList">
                                <div class="imgs">
                                    <img :src="item.pic || defaultPic" alt="">
                                </div>
                                <div class="right">
                                    <div class="title ellipsis">
                                        <router-link
                                            :to="{path:'/parent/solution/solution-detail/'+item.id}">{{item.title}}</router-link>
                                    </div>
                                    <div class="">{{item.desc}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="small-con right">
                    <inner-title :title="'案例展示'" :link="'/parent/successful-case/successful-list'"></inner-title>
                    <div class="news-content com-content">
                        <text-iscroll :items="caseShowList" :link="'/parent/successful-case/successful-detail/'"></text-iscroll>
                    </div>
                </div>
            </div>
            <div class="box-width clear">

                <div class="big-con">
                    <inner-title :title="'合作伙伴'" :more="'none'"></inner-title>
                    <div class="friend com-content">
                        <ul class="clear">
                            <li v-for="(item,index) in partnerList">
                                <a :href="item.url">
                                    <img :src="item.image" >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="small-con right">
                    <inner-title :title="'我们的位置'" :more="'none'"></inner-title>
                    <div style="height:222px;">
                        <el-amap class="amap-box" :vid="'amap'" :center="center" :zoom="zoom">
                            <el-amap-info-window
                                :position="contentWindow.position"
                                :content="contentWindow.content"
                                :visible = "contentWindow.visible"
                                :events="contentWindow.events">
                            </el-amap-info-window>
                            <el-amap-marker :position="center" ></el-amap-marker>
                        </el-amap>
                    </div>
                </div>
            </div>
            <div class="box-width link-list">
                <dl class="clear">
                    <dt tit="友情链接">
                        <img :src="friendLink" alt="">
                    </dt>
                    <dd>
                        <a v-for="item in linkList"
                            :href="item.url">{{item.title}}</a>
                    </dd>
                </dl>
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
    /*const friend1 = require('../images/friend1.jpg');
    const friend2 = require('../images/friend2.jpg');
    const friend3 = require('../images/friend3.jpg');*/
    const defaultPic = require('../images/defaultpic.gif');
    const friendLink = require('../images/friend-link.jpg');
    import Vue from 'vue';
    import AMap from 'vue-amap';
    import Toast from "../components/Toast/toast";
    Vue.use(AMap);
    AMap.initAMapApiLoader({
        key: '4e4f60b6ba1c6d1ced6c01e3777e7b01',
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
    });
    export default {
        name: 'home',
        data(){
            return {
                defaultPic:defaultPic,
                friendLink:friendLink,
                slideImages:[],
                newsList:[],
                caseShowList:[],
                projectList:[],//解决方案
                partnerList:[],//合作伙伴
                linkList:[],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    effect: 'fade',
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false
                    }
                },
                zoom: 14,
                lng: 0,
                lat: 0,
                loaded: false,
                center: [116.33351,39.97011],
                contentWindow: {
                    position: [116.33351,39.97011],
                    content: '北京致远嘉禾科技发展有限公司',
                    visible: true,
                    events: {
                        close() {
                            //console.log('close infowindow');
                        }
                    }
                },
            }
        },
        created(){
            this.getData();
        },
        components: {
            swiper,swiperSlide,InnerTitle,TextIscroll
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted(){
            /*console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)*/
        },
        methods: {
            getData(){
                $api.post('/index/index/index1.html').then((res)=>{
                    if(res.code == 200){
                        //轮播图
                        res.data.slideImages.map(el=>{
                            let slide = `<div class="swiper-slide"><a href="${el.url}"><img class="banner-img" src="${el.image}" alt="${el.title}"></a></div>`;
                            //let slide = `<div class="swiper-slide"><a href="${el.url}"><div class="slide-child" style="background-image:url(${el.image})"></div></a></div>`;
                            this.swiper.appendSlide(slide)
                        });
                        //更新轮播图
                        this.swiper.update();
                        console.log(this.swiper);
                        //新闻列表
                        this.newsList = res.data.newsList;
                        //案列
                        this.caseShowList = res.data.caseShowList;
                        //随意模拟一下
                        //this.caseShowList = this.caseShowList.concat(this.caseShowList).concat(this.caseShowList);
                        //解决方案
                        this.projectList = res.data.projectList;
                        //合作伙伴
                        this.partnerList = res.data.partnerList;
                        //友链
                        this.linkList = res.data.linkList;
                    }else{
                        Toast(res.message || '服务器错误！');
                    }
                });
            }
        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
