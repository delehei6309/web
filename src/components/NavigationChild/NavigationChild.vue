<template>
    <div class="navigation-child">
        <div class="nav-title">{{title}}</div>
        <div>
            <ul class="nav-items"  v-for="firstItem in navItems" v-if="$route.path.indexOf(firstItem.link)>-1">
                <li v-for="(item,index) in firstItem.children" class="item">
                    <template v-if="firstItem.id == 2">
                        <div class="title-first product-title-first"
                             :class="{'active':item.id == activeId}"
                             @click.stop="navChange(item)">{{item.catename}}</div>
                        <div class="child-items animate":style="{'height':item.id == activeId?item.secondCateList.length*40 + 'px' : 0}">
                            <div v-for="(child,key) in item.secondCateList" class="child-list">
                                <router-link :to="{name:'product-list',params:{id:child.id},query:{second_cateid:child.pid}}"
                                             :class="{'menu-active':menuActive == child.id}"
                                             active-class="menu-active"
                                             replace>{{child.catename}}</router-link>
                            </div>
                        </div>
                    </template>
                    <template v-if="firstItem.id == 4">
                        <div class="title-first product-title-first"
                             :class="{'active':item.id == activeId}"
                             @click.stop="navChange(item)">{{item.catename}}</div>
                        <div class="child-items animate":style="{'height':item.id == activeId?item.secondCateList.length*40 + 'px' : 0}">
                            <div v-for="(child,key) in item.secondCateList" class="child-list">
                                <router-link :to="{name:'successful-list',params:{id:child.id},query:{second_cateid:child.pid}}"
                                             :class="{'menu-active':menuActive == child.id }"
                                             active-class="menu-active"
                                             replace>{{child.catename}}</router-link>
                            </div>
                        </div>
                    </template>
                    <template v-if="firstItem.id != 2 && firstItem.id != 4">
                        <div class="title-first"
                             :class="{'active':item.id == activeId}">
                            <router-link :to="{name:linkConfig[firstItem.link].link,params:{id:item.id}}"
                                         active-class="menu-active">{{item.catename}}</router-link>
                        </div>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './navigation-child.less';
    import $api from '../../tools/api';
    import Toast from '../Toast';
    import {mapState} from 'vuex';
    import store from '../../store';
    import linkConfig from '../../linkConfig.js';
    export default {
        name: 'navigation',
        props:['title','id'],
        data(){
            return {
                activeId:'',
                articleList:null,
                menuActive:'',
                path:'',
                linkConfig
            }
        },
        created(){
            this.paramsId = this.$route.params.id;
            (this.$route.query.second_cateid) ? this.activeId = this.$route.query.second_cateid : this.activeId = this.paramsId;
            this.path = this.$route.path;
        },
        computed: {
            ...mapState([
                'navItems'
            ])
        },
        watch:{
        },
        methods: {
            navChange(item){
                console.log(item.id)
                item.id == this.activeId ? this.activeId = '' : this.activeId = item.id;

            }
        },
        mounted(){
            /*if(this.id != 1){
                //非产品

            }*/

        },
        destroyed(){

        }
    }
</script>
