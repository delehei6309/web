<template>
    <div class="index-header">
        <div class="header-content clear box-width">
            <div class="logo">
                <img src="../../images/logo.png" alt="logo">
            </div>
            <div class="intro">
                <!--<ul class="small-op clear">
                    <li v-for="(item,index) in smallLinks">{{item.text}}</li>
                </ul>-->
                <div class="tel">
                    <div>咨询热线</div>
                    <div class="tel-number">010-62155676</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './index-header.less';
    export default {
        name: 'index-header',
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
