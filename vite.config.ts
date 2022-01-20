import { ConfigEnv, loadEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { wrapperEnv } from "./build/utils";
import { createVitePlugins } from "./build/vite/plugin";
import { resolve } from "path/posix";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  "/#": pathResolve("types"),
};

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd();

  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === "build";

  return {
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias,
    },
  };
};
