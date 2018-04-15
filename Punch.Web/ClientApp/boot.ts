import './css/site.css';
import 'bootstrap';
import Vue from 'vue';

import RouterConfig from './routerConfig';
import LanguageService from './services/Language/LanguageService';

const i18n = LanguageService.init();

new Vue({
    el: '#app-root',
    router: new RouterConfig().getRouter(),
    i18n,
    render: h => h(require('./components/app/app.vue.html'))
});
