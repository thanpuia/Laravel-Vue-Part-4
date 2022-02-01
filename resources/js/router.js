
import VueRouter from "vue-router";
 
import Vue from 'vue';
 
Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/a', 
     
            component: () =>import( "./components/Test.vue"),
            meta: { title: 'Welcome' }
        }, 
    ],

    mode: 'history'
});
