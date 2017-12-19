<template>
    <div class="solution">

        解决方案
        <navigation></navigation>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/solution.less';
    import Navigation from '../components/Navigation';
    export default {
        name: 'solution',
        data(){
            return {
                template:''

            }
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
