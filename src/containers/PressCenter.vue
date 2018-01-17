<template>
    <div class="press-center">
        <div class="banner-box" v-for="(item,key) in bannerItems"
             v-if="$route.path.indexOf(key)>-1">
            <img :src="item" alt="">
        </div>
        <!--<swiper></swiper>-->
        <div>
            <div class="clear box-width">
                <navigation-list :title="'网站导航'" :id="id"></navigation-list>
                <div class="right inner-right">
                    <div class="inner-list-title">
                        <h6>{{innerTitle}}</h6>
                    </div>
                    <router-view :nav-id="id"></router-view>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import '../less/press-center.less';
    import NavigationList from '../components/NavigationChild';
    import linkConfig from '../linkConfig.js';
    const press = require('../images/banner/news.jpg');
    const successful = require('../images/banner/case.jpg');
    const solution = require('../images/banner/solution.jpg');
    const technical = require('../images/banner/technical.jpg');
    const about = require('../images/banner/about.jpg');
    //import Swiper from '../components/Swiper';
    import Toast from '../components/Toast';
    export default {
        name: 'about',
        data(){
            return {
                navItems:[],
                //items:[],//列表
                articleList:[],
                innerTitle:'',
                id:'1',
                bannerItems:{
                    press:press,
                    case:successful,
                    solution:solution,
                    technical:technical,
                    about:about
                }
            }
        },
        created(){
            console.log(this.id);
            let paramId = this.$route.params.id;
            //匹配当前是哪个
            let path = this.$route.path;
            for(let ind in linkConfig){
                console.log(path.indexOf(ind))
                if(path.indexOf(ind)>-1){
                    console.log('----------->>>>>>>>>>>>>',this.innerTitle)
                    let thatObj = linkConfig[ind];
                    for(let j in thatObj){
                        this[j] = thatObj[j];
                    }
                }
            }
            let cateid = this.id;
            console.log(cateid)
            //获取左边导航与首次展示内容

        },
        components: {
            NavigationList
        },
        computed: {},
        methods: {

        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
