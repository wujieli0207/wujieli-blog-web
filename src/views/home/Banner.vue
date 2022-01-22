<template>
  <div class="banner">
    <nav>
      <div class="absolute top-2 left-5 m-5 hidden <lg:inline-block">
        <!-- 侧边栏 -->
        <SideBar v-model:visiable="sideBarVisible" />
        <a-button
          ghost
          shape="circle"
          size="middle"
          @click="
            () => {
              sideBarVisible = !sideBarVisible;
            }
          "
        >
          <template #icon> <menu-outlined /> </template>
        </a-button>
      </div>

      <!-- 顶部导航栏 -->
      <div class="absolute top-5 right-20 <lg:hidden">
        <NavBar />
      </div>

      <!-- 搜索按钮 -->
      <div class="absolute top-2 right-5 m-5">
        <SideBar v-model:visiable="sideBarVisible" />
        <a-button
          ghost
          shape="circle"
          size="middle"
          @click="
            () => {
              sideBarVisible = !sideBarVisible;
            }
          "
        >
          <template #icon> <search-outlined /> </template>
        </a-button>
      </div>
    </nav>

    <div class="text-6xl font-medium text-light-100">
      {{ blogTitle }}
    </div>
    <!-- TODO 副标题打字机效果 -->
    <div class="m-20 mb-20">
      <a-button class="m-5" ghost shape="round" size="large">
        <template #icon> <double-right-outlined :rotate="90" />开始阅读 </template>
      </a-button>
      <a-button class="m-5" ghost shape="round" size="large" @click="openWindow(githubUrl)">
        <template #icon><github-outlined /> GITHUB </template>
      </a-button>
    </div>
    <div>
      <a-popover content="我的掘金主页">
        <span class="anticon anticon-mail navigate-icon"
          ><img :src="juejin" class="w-5 h-5" @click="openWindow(JuejinUrl)"
        /></span>
      </a-popover>
      <a-popover content="我的领英主页">
        <linkedin-outlined class="navigate-icon" @click="openWindow(linkedInUrl)"
      /></a-popover>
      <a-popover content="邮件联系我"
        ><mail-outlined class="navigate-icon" @click="openWindow(mailUrl)"
      /></a-popover>
      <a-popover title="微信联系我">
        <template #content>
          <img :src="wechatQRCode" class="w-40 h-40" />
        </template>
        <wechat-filled class="navigate-icon"
      /></a-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {
    DoubleRightOutlined,
    GithubOutlined,
    MailOutlined,
    WechatFilled,
    LinkedinOutlined,
    MenuOutlined,
    SearchOutlined,
  } from "@ant-design/icons-vue";
  import { ref } from "vue";
  import SideBar from "./SideBar.vue";
  import NavBar from "./NavBar.vue";
  import wechatQRCode from "/@/assets/images/wechatQRCode.jpg";
  import juejin from "/@/assets/svg/juejin.svg";
  import { useBlogSetting } from "/@/hooks/useBlogSetting";
  import { openWindow } from "/@/utils";

  const { blogTitle, githubUrl, JuejinUrl, mailUrl, linkedInUrl } = useBlogSetting();

  const sideBarVisible = ref(false);
</script>

<style lang="less">
  @import "/@/design/color.less";

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: url(/@/assets/images/banner.jpg) @light-gray center center / cover;
    background-blend-mode: multiply;
  }

  .navigate-icon {
    padding: 0 1vw;
    font-size: 1.2rem;
    color: @white;
  }
</style>
