<template>
  <div>
    <a-button class="m-2" type="text" shape="round" size="middle">
      <template #icon>
        <div class="text-light-100"><home-outlined class="navbar" /> 首页</div>
      </template>
    </a-button>
    <a-button class="m-2" type="text" shape="round" size="middle">
      <template #icon>
        <div class="text-light-100"><tags-outlined class="navbar" /> 标签</div>
      </template>
    </a-button>
    <a-button class="m-2" type="text" shape="round" size="middle">
      <template #icon>
        <div class="text-light-100"><paper-clip-outlined class="navbar" /> 分类</div>
      </template>
    </a-button>
    <a-button class="m-2" type="text" shape="round" size="middle">
      <template #icon>
        <div class="text-light-100"><inbox-outlined class="navbar" /> 归档</div>
      </template>
    </a-button>
    <a-button class="m-2" type="text" shape="round" size="middle">
      <template #icon>
        <div class="text-light-100"><user-outlined class="navbar" /> 关于</div>
      </template>
    </a-button>
  </div>
</template>

<script lang="ts" setup>
  import {
    HomeOutlined,
    TagsOutlined,
    PaperClipOutlined,
    InboxOutlined,
    UserOutlined,
  } from "@ant-design/icons-vue";
</script>
