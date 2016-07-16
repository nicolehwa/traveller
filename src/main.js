import Vue from 'vue';
import $ from 'jquery';
import NProgress from 'nprogress';
import App from './app.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import registerRouters from './routers';
import VueChartist from 'vue-resource';
import Session from './services/session';
import ls from './services/ls'

window.Vue = Vue;

Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueChartist);

var router = new VueRouter();

registerRouters(router);
router.start(App, 'app');
