<template>
    <div v-if="items && items.length>0" class="text-iscroll" style="height:260px;overflow: hidden">
        <ul :style="{transform:`translateY(${translate}px)`}" @mouseenter="animateStop" @mouseleave="animateStart">
            <li class="clear" v-for="(item,index) in items2" :style="{height:`${liHeight}px`}">
                <div class="ellipsis">
                    <router-link :to="{path:link+item.id}">{{item.title}}</router-link>
                </div>
                <div class="right">{{item.time}}</div>
            </li>
        </ul>
    </div>
    <div v-else>暂无内容</div>
</template>

<script>
    import './text-iscroll.less';
    export default {
        name: 'text-iscroll',
        props:['items','viewSize','link'],
        data(){
            return {
                styleObject:{
                    transform:'translateY(0px)'
                },
                translate:0,
                liHeight:26,
                /*items:[
                    {
                        text:'在那遥远的地方，有位好姑娘111122222222222221',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘',
                        date:'2017-12-22'
                    },
                    {
                        text:'在那遥远的地方，有位好姑娘0',
                        date:'2017-12-22'
                    }
                ],*/
                items2:[],
                animateStopState:false
            }
        },
        created(){
            this.compatible();

        },
        mounted(){
            //items

        },
        watch:{
            items(val) {
                console.log('-------->>>>>>',val)
                this.translate = 0;
                this.animateStopState = false;
                this.items2 = [];
                if(val && val.length>0){
                    if(val.length>10){
                        this.items2 = val.concat(val);
                        console.log(this.items2);
                        this.animate();
                    }else{
                        this.items2 = this.items;
                    }
                }
            }
        },
        computed: {},
        methods: {
            compatible(){/*兼容性*/
                if (!window.requestAnimationFrame) {
                    window.requestAnimationFrame = (function () {
                        return window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function (callback, element) {
                                window.setTimeout(callback, 1000 / 60);
                            };
                    })();
                }
            },
            animate(){
                if(this.animateStopState){
                    return false;
                }
                let leng = this.items.length;
                if(this.translate <= -1*leng*(this.liHeight)){
                    this.translate = 0;
                }else{
                    this.translate -= .5 ;
                }
                window.requestAnimationFrame(() => {
                    this.animate();
                });
            },
            animateStop(){
                this.animateStopState = true;
            },
            animateStart(){
                if(this.items.length>10){
                    this.animateStopState = false;
                    this.animate();
                }

            }
        },
        destroyed(){

        }
    }
</script>
