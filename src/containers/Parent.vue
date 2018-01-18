<template>
    <div class="parent">
        <index-header></index-header>
        <self-navigation :key="key"></self-navigation>
        <router-view  class="content-view" :key="key"></router-view>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import IndexHeader from '../components/IndexHeader';
    import SelfNavigation from '../components/Navigation';
    import IndexFooter from '../components/IndexFooter';
    import $api from '../tools/api';
    import '../less/parent.less';
    export default {
        name: 'parent',
        data(){
            return {
            }
        },
        created(){

        },
        components: {
            IndexHeader,SelfNavigation,IndexFooter
        },
        computed: {
            key() {
                return this.$route.name !== undefined? this.$route.name +new Date().getTime(): this.$route +new Date().getTime();
            }
        },
        methods: {

        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
