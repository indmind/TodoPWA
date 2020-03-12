import Vue from "vue";
import App from "./App.vue";

import VueFirestore from "vue-firestore";

import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueFirestore);

new Vue({
  render: h => h(App)
}).$mount("#app");
