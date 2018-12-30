import Vue from 'vue'
import router from './router';
import App from './app.vue';
import './style.scss'
import BaseComponentsRegistry from './base-components-registry';

import VueSelect from 'vue-select'
Vue.component('v-select', VueSelect.VueSelect);
Object.keys(BaseComponentsRegistry).forEach(componentTag => Vue.component(componentTag, BaseComponentsRegistry[componentTag]));

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');