<template>
    <div class="navigation-child">
        <div class="nav-title">网站导航</div>
        <ul class="nav-items">
            <li v-for="(item,index) in navItems" class="item">
                <div class="title-first" :class="{'active':item.val == activeVal}" @click.stop="navChange(item)">{{item.name}}</div>
                <div class="child-items animate":style="{'height':item.val == activeVal?item.child.length*40 + 'px' : 0}">
                    <div v-for="(child,key) in item.child" class="child-list">
                        <router-link :to="{path:child.link}"
                                     active-class="menu-active"
                                     replace>{{child.name}}</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import './navigation-child.less';
    export default {
        name: 'navigation',
        props:['navItems'],
        data(){
            return {
                activeVal:1,
            }
        },
        created(){
        },
        computed: {},
        methods: {
            navChange(item){
                item.val == this.activeVal ? this.activeVal = '' : this.activeVal = item.val;
            }
        },
        destroyed(){

        }
    }
</script>
