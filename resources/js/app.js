
import router from './router'

import Vue from 'vue';

import VueRouter from 'vue-router';

import App from './components/App';
Vue.use(VueRouter);

require('./bootstrap');

//window.Vue = require('vue').default;

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
});
