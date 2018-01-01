<template>
    <div class="navigation-child">
        <div class="nav-title">{{title}}</div>
        <ul class="nav-items">
            <li v-for="(item,index) in navs" class="item">
                <template v-if="type == 'product'">
                    <div class="title-first"
                         :class="{'active':item.id == activeId}"
                         @click.stop="navChange(item)">{{item.catename}}</div>
                    <div class="child-items animate":style="{'height':item.id == activeId?item.articleList.length*40 + 'px' : 0}">
                        <div v-for="(child,key) in item.articleList" class="child-list">
                            <router-link :to="{name:'product-list',params:{id:child.id || '234'}}"
                                         active-class="menu-active"
                                         replace>{{child.title}}</router-link>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="title-first"
                         :class="{'active':item.id == activeId}">
                        <router-link :to="{name:'press-list',params:{id:item.id || '234'}}"
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
        props:['title','navs','type'],
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
            console.log('-------->>>>>>>>>>',this.$route.params.id,this.navItems);
            let paramsId = this.$route.params.id;
            if(paramsId){
                this.activeId = paramsId.toString().substring(0,2);
            }

        },
        computed: {},
        /*watch(){
            /!*navs(o){
                console.log(o);
            }*!/
        },*/
        methods: {
            navChange(item){
                /*if(!item.children || item.children.length<1){
                    $api.post('/index/product/getProductListByCateid.html').then((res)=>{
                        if(res.code == 200){
                            res.data.secondCateList.map((m)=>{
                                this.activeId = item.id;
                                item.children.push(m);
                            });
                        }else{
                            Toast(res.message || '服务器错误！');
                            return false;
                        }
                    });
                }*/
                item.id == this.activeId ? this.activeId = '' : this.activeId = item.id;

            }
        },
        destroyed(){

        }
    }
</script>
