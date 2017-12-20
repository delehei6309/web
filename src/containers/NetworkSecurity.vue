<template>
    <div class="network-security">
        <input type="text">
       计算机安全
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/solution.less';
    import Navigation from '../components/NavigationChild';
    console.log('-------------->>>>>>>',$api);
    export default {
        name: 'network-security',
        data(){
            return {}
        },
        created(){

        },
        components: {
            Navigation
        },
        computed: {},
        methods: {

        },
        watch: {

        },
        destroyed(){

        }
    }
</script>
