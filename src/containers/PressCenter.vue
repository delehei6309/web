<template>
    <div class="press-center">
        <div class="banner-box"><img src="../images/picture/pic1.jpg" alt=""></div>
        <div>
            <div class="clear box-width">
                <navigation-list :title="'网站导航'" :navs="navItems"></navigation-list>
                <div class="right inner-right">
                    <div class="inner-list-title">
                        <h6>{{innerTitle}}</h6>
                    </div>
                    <router-view  class="content-view" :articleList="articleList"></router-view>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/press-center.less';
    import NavigationList from '../components/NavigationChild';
    import Toast from '../components/Toast';
    export default {
        name: 'about',
        data(){
            return {
                navItems:[],
                articleList:[],
                htmlConfig:{
                    solution:{
                        innerTitle:'解决方案',
                        id:4,
                    },
                    press:{
                        innerTitle:'新闻中心',
                        id:4,
                    }
                },
                innerTitle:''

            }
        },
        created(){
            let paramId = this.$route.params.id;
            let path = this.$route.path;
            for(let ind in this.htmlConfig){
                console.log(path.indexOf(ind))
                if(path.indexOf(ind)>-1){
                    console.log('----------->>>>>>>>>>>>>',this.innerTitle)
                    this.innerTitle = this.htmlConfig[ind].innerTitle;
                }
            }
            $api.post('/index/article/clickCate.html').then((res)=>{
                if(res.code == 200){
                    res.data.secondCateList.map((item)=>{
                        this.navItems.push(item);
                    });
                    //默认展示的内容
                    if(!paramId){
                        res.data.articleList.map((item)=>{
                            this.articleList.push(item);
                        });
                    }
                }else{
                    Toast(res.message || '服务器错误！');
                }
            });
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
