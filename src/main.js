import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// // 引入antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入axios
import axios from "axios";
Vue.prototype.$axios = axios;
// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
