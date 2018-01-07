<template>
    <div class="navigation-child">
        <div class="nav-title">{{title}}</div>
        <ul class="nav-items">
            <li v-for="(item,index) in navs" class="item">
                <template v-if="id == 2">
                    <div class="title-first"
                         :class="{'active':item.id == activeId}"
                         @click.stop="navChange(item)">{{item.catename}}</div>
                    <div class="child-items animate":style="{'height':item.id == activeId?item.secondCateList.length*40 + 'px' : 0}">
                        <div v-for="(child,key) in item.secondCateList" class="child-list">
                            <router-link :to="{name:'product-list',params:{id:child.id}}"
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
                //navs:[]
            }
        },
        created(){
            console.log('-------->>>>>>>>>>',this.$route.params.id,this.navs);
            //if(this.navs)
            this.paramsId = this.$route.params.id;
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
                    console.log(val);
                    if(this.$route.query.pid == '0' || this.$route.path.indexOf('product')<0){
                        this.activeId = this.paramsId;
                    }else{
                        val.forEach(m=>{
                            m.secondCateList.forEach(el=>{
                                if(el.id == this.paramsId){
                                    this.activeId = el.pid;
                                    return false;
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
