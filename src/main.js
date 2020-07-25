import Vue from 'vue'
import App from './App.vue'

import Components from '../packages/index'

Vue.use(Components)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')