import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false;
Vue.filter('removedText', (value) => {
    return value.slice(1)
});
new Vue({
    render: h => h(App),
}).$mount('#app');
