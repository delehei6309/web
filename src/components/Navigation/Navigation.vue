<template>
    <div class="navigation">
        <div class="nav-title">网站导航</div>
        <ul class="nav-items">
            <li v-for="(item,index) in navItems" class="item">
                <div class="title-first" @click.stop="item.show = !item.show">{{item.name}}</div>
                <div class="child-items animate":style="{'height':item.show?item.child.length*32 + 'px' : 0}">
                    <div v-for="(child,key) in item.child" class="child-list">
                        <router-link class="menu" :to="{path:child.link}"
                                     active-class="menu-active"
                                     replace>{{child.name}}</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import './navigation.less';
    export default {
        name: 'navigation',
        props:['navItems'],
        data(){
            return {

            }
        },
        created(){
        },
        computed: {},
        methods: {},
        destroyed(){

        }
    }
</script>
