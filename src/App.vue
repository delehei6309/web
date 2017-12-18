<template>
    <div id="app" class="app">
        <!-- <index-footer></index-footer> -->
        <router-view class="app-wrapper"></router-view>
        <!-- <index-footer></index-footer> -->
    </div>
</template>

<script>
    import './less/app.less';
    /*import IndexHeader from './components/IndexHeader';
    import IndexFooter from './components/IndexFooter';*/
    export default {
        name: 'app',
        data(){
            return{

            }
        },
        components: {
            /*IndexHeader,
            IndexFooter*/
        },
        methods:{

        }
    }
</script>
