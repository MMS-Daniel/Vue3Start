import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
    dsn: 'https://814d2e32e255410bbe251487c886482a@sentry.io/1550805',
    integrations: [new Integrations.Vue({
        Vue, 
        attachProps: true,
        logErrors:true
    })]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
