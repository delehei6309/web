<template>
    <div class="inner-title clear">
        <div class="title">{{title || 'title'}}</div>
        <div class="more right">
            <router-link :to="{path:link}"
                         active-class="active">{{more || 'MORE'}}</router-link>
        </div>
    </div>
</template>

<script>
    import './inner-title.less';
    export default {
        name: 'inner-title',
        props:['title','more','link'],
        data(){
            return {
                smallLinks:[
                    {
                        link:'',
                        text:'加入收藏'
                    },{
                        link:'',
                        text:'设为首页'
                    },{
                        link:'',
                        text:'返回首页'
                    }
                ]
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
