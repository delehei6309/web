<template>
    <div class="navigation-child">
        <div class="nav-title">{{title}}</div>
        <ul class="nav-items">
            <li v-for="(item,index) in navs" class="item">
                <template v-if="id == 2">
                    <div class="title-first product-title-first"
                         :class="{'active':item.id == activeId}"
                         @click.stop="navChange(item)">{{item.catename}}</div>
                    <div class="child-items animate":style="{'height':item.id == activeId?item.secondCateList.length*40 + 'px' : 0}">
                        <div v-for="(child,key) in item.secondCateList" class="child-list">
                            <router-link :to="{name:'product-list',params:{id:child.id}}"
                                         :class="{'menu-active':menuActive == child.id}"
                                         active-class="menu-active"
                                         replace>{{child.catename}}</router-link>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="title-first"
                         :class="{'active':item.id == activeId}">
                        <router-link :to="{name:item.link,params:{id:item.id}}"
                                     active-class="menu-active">{{item.catename}}</router-link>
                    </div>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
    import './navigation-child.less';
    import $api from '../../tools/api';
    import Toast from '../Toast';
    export default {
        name: 'navigation',
        props:['title','navs','id'],
        data(){
            return {
                /*navItems:[/!*
                    {
                        id:'my1314520Deblov888889999',
                        catename:'甭管我',
                        children:null
                    }
                *!/],*/
                navItems:null,
                activeId:'',
                articleList:null,
                menuActive:'',
                path:''
                //navs:[]
            }
        },
        created(){
            console.log('-------->>>>>>>>>>',this.$route.params.id,this.navs);
            //if(this.navs)
            this.paramsId = this.$route.params.id;
            this.path = this.$route.path;
            /*if(paramsId){
                if(this.id == 2){
                    //产品类
                    this.activeId = paramsId.toString().substring(0,2);
                }else{
                    this.activeId = paramsId;
                }

            }*/

        },
        computed: {},
        watch:{
            navs(val) {
                if(val && val.length>0){
                    //导航选中设置
                    if(!this.paramsId){
                        if(this.path.indexOf('successful-list')>-1 || this.path.indexOf('about')>-1 || this.path.indexOf('technical-list')>-1){
                            this.activeId = val[0].id;
                            console.log(this.menuActive)
                            return false;
                        }
                    }
                    if(this.$route.query.second_cateid &&  this.path.indexOf('product')<0){
                        this.activeId = this.$route.query.second_cateid;
                        /*if(this.$route.path.indexOf('product')>-1){
                            //这是产品详情

                        }*/
                    }else if(this.$route.query.pid == '0' || this.path.indexOf('product')<0){
                        this.activeId = this.paramsId;
                    }else{
                        //处理产品导航
                        val.forEach(m=>{
                            m.secondCateList.forEach(el=>{
                                if(this.$route.query.second_cateid && this.$route.query.second_cateid == el.id){
                                    //处理详情下
                                    this.activeId = el.pid;//一级选中
                                    this.menuActive = el.id;//二级选中
                                    return false;
                                }else{
                                    if(el.id == this.paramsId){
                                        this.activeId = el.pid;
                                        return false;
                                    }
                                }
                            });

                        });
                    }
                }
            }
        },
        methods: {
            navChange(item){
                console.log(item.id)
                item.id == this.activeId ? this.activeId = '' : this.activeId = item.id;

            }
        },
        destroyed(){

        }
    }
</script>
