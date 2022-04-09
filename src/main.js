import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// // 引入antd
// import { createApp } from "vue";
import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
// const app = createApp();
// app.config.productionTip = false;
Vue.use(Antd);
// import { createApp } from "vue";
// import Antd from "ant-design-vue";
// // import App from "./App";
// import "ant-design-vue/dist/antd.css";

// const app = createApp();
// app.config.productionTip = false;

// app.use(Antd);

// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入axios
import axios from "axios";
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
