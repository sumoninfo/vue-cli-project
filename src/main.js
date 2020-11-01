import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.filter('removedText', (value) => {
    return value.slice(1)
});
new Vue({
    render: h => h(App),
}).$mount('#app');
