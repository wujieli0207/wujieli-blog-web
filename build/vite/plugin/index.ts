import { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import windiCSS from "vite-plugin-windicss";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [vue()];

  // 引入 windiCSS 插件
  vitePlugins.push(windiCSS());

  // 引入 自动引入 antd UI 组件插件
  vitePlugins.push(
    Components({
      resolvers: [AntDesignVueResolver()],
    })
  );

  return vitePlugins;
}
