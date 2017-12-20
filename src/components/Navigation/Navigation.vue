<template>

</template>

<script>
    import './navigation.less';
    export default {
        name: 'navigation-child',
        props:['navItems'],
        data(){
            return {
                navItems:[
                    {
                        link:'home',
                        name:'首页'
                    },{
                        link:'solution',
                        name:'解决方案'
                    },{
                        link:'',
                        name:'新闻中心'
                    },{
                        link:'',
                        name:'服务中心'
                    },{
                        link:'',
                        name:'成功案例'
                    },{
                        link:'',
                        name:'关于我们'
                    }
                ]
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
