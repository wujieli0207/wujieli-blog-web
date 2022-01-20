// 引入 windiCSS 样式
import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
// 引入自定义样式
import "/@/design/index.less";

import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "/@/store";
import { setupRouter } from "/@/router";

async function boostrap() {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  app.mount("#app");
}

boostrap();
