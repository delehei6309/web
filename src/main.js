import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import VueLazyload from 'vue-lazyload';
const loading = require('./images/loading2.gif');
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './img/error.jpg',
    loading: loading,
    //attempt: 1,
    //listenEvents: [ 'scroll', 'mousewheel' ]
});
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'flex.css/dist/flex.css';
import './less/base.less';
import './less/public.less';
import App from './App';
import router from './router';
import * as filters from './filters';
import store from './store';

Object.keys(filters).forEach(key=>{
    Vue.filter(key, filters[key]);
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});


