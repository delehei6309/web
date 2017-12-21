<template>
    <div class="data-center">
       <div>
           <div>数据中心建设</div>
           <div>
               <dl clear>
                   <dt></dt>
                   <dd class="right"></dd>
               </dl>
           </div>
       </div>
        <div class="pagination">分页</div>
    </div>
</template>

<script>
    import $api from '../tools/api';
    import '../less/data-center.less';
    //import NavigationList from '../components/NavigationChild';
    export default {
        name: 'data-center',
        data(){
            return {
                navItems:[
                ]
            }
        },
        created(){

        },
        components: {
            //NavigationList
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
