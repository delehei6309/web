<template>
    <div class="nav">
        <div class="nav-content box-width">
            <ul class="clear ul-navigation">
                <li v-for="(item,index) in navItems"
                    @mouseenter="mouseenterEvent(item,index,1)"
                    @mouseleave="mouseleaveEvent(item)"
                    @click="item.show=false"
                    >
                    <div class="nav-view">
                        <router-link :to="{path:item.link}"
                                     active-class="menu-active"
                        >{{item.title}}</router-link>
                    </div>
                    <template v-if="item.children && item.children.length>0">
                        <template v-if="item.id == 2"><!--产品信息-->
                            <div class="nav-child delet-before" :style="{'width':'500px',left:0}" v-show="item.show" @click="item.show=false">
                                <!--<div><img :src="picNews" alt=""></div>-->
                                <dl v-for="(child,k) in item.children" class="clear">
                                    <dt class="nav-child-view" style="width:126px;">
                                        <router-link :to="{name: 'product-list', params: { id: child.id },query:{pid:child.pid}}"
                                                     active-class="menu-active"
                                        >{{child.catename}}</router-link>
                                    </dt>
                                    <dd class="clear" style="width: 340px;">
                                        <div style="min-width:100px; padding:0 10px" v-for="grandson in child.secondCateList">
                                            <router-link :to="{name:'product-list',params:{id:grandson.id},query:{second_cateid:grandson.pid}}"
                                                         active-class="menu-active"
                                            >{{grandson.catename}}</router-link>
                                        </div>
                                    </dd>
                                </dl>

                            </div>
                        </template>
                        <template v-if="item.id == 4"><!--解决方案-->
                            <div class="nav-child clear" :style="{'width':'990px'}" v-show="item.show" @click="item.show=false">
                                <div><img :src="item.picNav" style="width:160px;" alt=""></div>
                                <div style="width:796px">
                                    <dl v-for="(child,k) in item.children" class="clear">
                                        <dt class="nav-child-view" style="width:160px;">
                                            <router-link :to="{name: 'successful-list', params: { id: child.id },query:{pid:child.pid}}"
                                                         active-class="menu-active"
                                            >{{child.catename}}</router-link>
                                        </dt>
                                        <dd class="clear" style="width: 636px;">
                                            <div v-for="grandson in child.secondCateList" style="min-width:120px; padding:0 15px">
                                                <router-link :to="{name:'successful-list',params:{id:grandson.id},query:{second_cateid:grandson.pid}}" target="_blank"
                                                             active-class="menu-active"
                                                >{{grandson.catename}}</router-link>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                        </template>
                        <template v-if="item.id != 2 && item.id != 1 && item.id != 4">
                            <div class="nav-child clear" v-show="item.show" @click="item.show=false" :style="{'width':item.width?(item.width+200) +'px':'496px'}">
                                <div v-if="item.picNav"><img :src="item.picNav" style="width:160px;" alt=""></div>
                                <div class="clear" :style="{'width':item.width ? item.width+'px' : '300px'}"  style="borderLeft:solid 1px #0061ae;paddingLeft:8px">
                                    <dl v-for="(child,k) in item.children" class="no-product">
                                        <dt class="nav-child-view">
                                            <router-link :to="{name:linkConfig[item.link].link,params:{id:child.id }}" target="_blank"
                                                         active-class="menu-active"
                                            >{{child.catename}}</router-link>
                                        </dt>
                                    </dl>
                                </div>
                            </div>
                        </template>
                    </template>
                </li>
            </ul>
        </div>
        <div style="display: none !important;">{{_navItems}}}</div>
    </div>
</template>

<script>
    import './navigation.less';
    import $api from '../../tools/api';
    import Toast from '../Toast';
    import $navigation from '../../navigation.js';
    let {navItems} = $navigation;
    import linkConfig from '../../linkConfig.js';
    import {mapState} from 'vuex';
    import store from '../../store';
    //const picNews = require('../../images/yy89.jpg');

    export default {
        name: 'navigation-child',
        //props:['navItems'],
        data(){
            return {
                linkConfig,
                navArray:[],
                //picNews
            }
        },
        created(){


        },
        computed: {
            _navItems:function(){
                console.log(this.navItems);
                this.navItems.map((el,index)=>{
                    console.log(el);
                    if(this.$route.path.indexOf(el.link)>-1){
                        this.mouseenterEvent(el,index);
                    }
                });
                return this.navItems;
            },
            ...mapState([
                'navItems'
            ])
        },
        methods: {
            mouseenterEvent(item,index,hover){
                console.log('999999999999999',item,index,hover);
                if(index == 0){
                    //首页没有子导航
                    return false;
                }

                if(!item.children || item.children.length<1){

                    this.$store.dispatch('getNavigation',item.id);
                }
                if(hover){
                    console.log('---------------------------')
                    item.show = true;
                }
            },
            mouseleaveEvent(item){
                item.show = false;
                console.log(item.show)
            },
            navChange(item){
                //item.val == this.activeVal ? this.activeVal = '' : this.activeVal = item.val;
            },
            getThisNavigation(){

            }
        },
        destroyed(){

        }
    }
</script>
