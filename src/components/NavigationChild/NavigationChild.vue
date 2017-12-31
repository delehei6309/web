<template>
    <div class="navigation-child">
        <div class="nav-title">{{title}}</div>
        <ul class="nav-items">
            <li v-for="(item,index) in navs" class="item">
                <div class="title-first" :class="{'active':item.id == activeId}" @click.stop="navChange(item)">{{item.catename}}</div>
                <div class="child-items animate":style="{'height':item.id == activeId?item.children.length*40 + 'px' : 0}">
                    <div v-for="(child,key) in item.children" class="child-list">
                        <router-link :to="{name:'product-list',params:{id:child.id || '234'}}"
                                     active-class="menu-active"
                                     replace>{{child.title}}</router-link>
                    </div>
                </div>
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
        props:['title','navs'],
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
                activeId:'my1314520Deblov888889999',
                articleList:null
            }
        },
        created(){
            console.log(this.navs)
            /*$api.post('/index/product/clickProductCate.html').then((res)=>{
                if(res.code == 200){
                    res.data.productCateList.map((item)=>{
                        item.children = [];
                        this.navItems.push(item);
                    });
                    this.navItems[0].children = res.data.articleList
                }
            });*/
        },
        computed: {},
        /*watch(){
            /!*navs(o){
                console.log(o);
            }*!/
        },*/
        methods: {
            navChange(item){
                item.name == this.activeName ? this.activeName = '' : this.activeName = item.name;
            }
        },
        destroyed(){

        }
    }
</script>
