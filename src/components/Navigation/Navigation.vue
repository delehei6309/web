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
                            <div class="nav-child" :style="{'width':'500px'}" v-show="item.show" @click="item.show=false">
                                <dl v-for="(child,k) in item.children" class="clear">
                                    <dt class="nav-child-view">
                                        <router-link :to="{name: 'product-list', params: { id: child.id },query:{pid:child.pid}}"
                                                     active-class="menu-active"
                                        >{{child.catename}}</router-link>
                                    </dt>
                                    <dd v-for="grandson in child.secondCateList">
                                        <router-link :to="{name:'product-list',params:{id:grandson.id},query:{second_cateid:grandson.pid}}"
                                                     active-class="menu-active"
                                        >{{grandson.catename}}</router-link>
                                    </dd>
                                </dl>
                            </div>
                        </template>
                        <template v-if="item.id != 2 && item.id != 1">
                            <div class="nav-child clear" :style="{'width':item.width || '300px'}" v-show="item.show" @click="item.show=false">
                                <dl v-for="(child,k) in item.children" class="no-product">
                                    <dt class="nav-child-view">
                                        <router-link :to="{name:linkConfig[item.link].link,params:{id:child.id }}" target="_blank"
                                                     active-class="menu-active"
                                        >{{child.catename}}</router-link>
                                    </dt>
                                </dl>
                            </div>
                        </template>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './navigation.less';
    import $api from '../../tools/api';
    import Toast from '../Toast';
    import navItems from '../../navigation.js';
    import linkConfig from '../../linkConfig.js';
    import {mapState} from 'vuex';
    import store from '../../store';
    export default {
        name: 'navigation-child',
        //props:['navItems'],
        data(){
            return {
                linkConfig,
                navArray:[]
            }
        },
        created(){
            //Toast('服务器错误！');
            for(let i in navItems){
                this.navArray.push(navItems[i]);
                console.log(navItems[i]);
            }
            this.navArray.forEach((item,index)=>{
                if(this.$route.path.indexOf(item.link)>-1){
                    this.mouseenterEvent(item,index);
                }
            });

        },
        computed: {
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
