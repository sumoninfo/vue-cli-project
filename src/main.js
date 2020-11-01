import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.directive('awesome', {
    bind(el, binding) {
        el.innerText = binding.value;
        // el.style.color = 'red'
        // if (binding.arg == 'green') {
        //     el.style.color = 'green'
        // } else {
        //     el.style.color = 'red'
        // }

        if (binding.modifiers.green) {
            el.style.color = 'green'
        }
        if (binding.modifiers.red) {
            el.style.color = 'red'
        }
        if (binding.modifiers.big) {
            el.style.fontSize = '30px'
        }
        if (binding.modifiers.small) {
            el.style.fontSize = '20px'
        }
    }

});
Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
    render: h => h(App),
}).$mount('#app');
