<template>
    <div class="press-center">
        <div class="banner-box"><img src="../images/picture/pic1.jpg" alt=""></div>
        <!--<swiper></swiper>-->
        <div>
            <div class="clear box-width">
                <navigation-list :title="'网站导航'" :navs="navItems" :id="id"></navigation-list>
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
    import $api from '../tools/api';
    import '../less/press-center.less';
    import NavigationList from '../components/NavigationChild';
    import Swiper from '../components/Swiper';
    import Toast from '../components/Toast';
    export default {
        name: 'about',
        data(){
            return {
                navItems:[],
                //items:[],//列表
                articleList:[],
                htmlConfig:{
                    solution:{
                        innerTitle:'解决方案',
                        link:'solution-list',
                        id:6,
                    },
                    press:{
                        innerTitle:'新闻中心',
                        link:'press-list',
                        id:3,
                    },
                    successful:{
                        innerTitle:'成功案例',
                        link:'successful-list',
                        id:4
                    },
                    technical:{
                        innerTitle:'技术支持',
                        link:'innerTitle-list',
                        id:7
                    },
                    about:{
                        innerTitle:'关于我们',
                        link:'about-list',
                        id:8
                    }
                },
                innerTitle:'',
                id:'1',

            }
        },
        created(){
            console.log(this.id);
            let paramId = this.$route.params.id;
            //匹配当前是哪个
            let path = this.$route.path;
            for(let ind in this.htmlConfig){
                console.log(path.indexOf(ind))
                if(path.indexOf(ind)>-1){
                    console.log('----------->>>>>>>>>>>>>',this.innerTitle)
                    let thatObj = this.htmlConfig[ind];
                    for(let j in thatObj){
                        this[j] = thatObj[j];
                    }
                }
            }
            let cateid = this.id;
            console.log(cateid)
            //获取左边导航与首次展示内容
            $api.post('/index/article/clickCate.html',{cateid}).then((res)=>{
                if(res.code == 200){
                    res.data.secondCateList.map((item)=>{
                        item.link = this.link;

                        this.navItems.push(item);
                    });
                    /*//默认展示的内容
                    if(!paramId){
                        res.data.articleList.map((item)=>{
                            this.articleList.push(item);
                        });
                    }
                    console.log(this.articleList);*/
                }else{
                    Toast(res.message || '服务器错误！');
                }
            });
        },
        components: {
            NavigationList,Swiper
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
