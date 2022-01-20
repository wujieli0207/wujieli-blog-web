import { AppRouteRecordRaw } from "../types";

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  component: () => import("/@/views/home/Home.vue"),
  meta: {
    title: "主页",
  },
};

export const basicRoutes = [RootRoute];
