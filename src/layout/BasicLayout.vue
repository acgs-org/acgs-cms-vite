<script setup lang="ts">
import { ref } from "vue";
import { FileTextOutlined, FundOutlined, MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from "@ant-design/icons-vue";

import { stage } from "../common/config";

const selectedKeys = ref<Array<string>>([]);
const collapsed = ref<boolean>(false);
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">ACGS CMS</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="menu in stage">

          <a-sub-menu>
            <template #title>
              <file-text-outlined v-if="menu.icon === 'file-text-outlined'"></file-text-outlined>
              <fund-outlined v-if="menu.icon === 'fund-outlined'"></fund-outlined>
              <user-outlined v-if="menu.icon === 'user-outlined'"></user-outlined>
              <span>{{ menu.title }}</span>
            </template>
            <a-menu-item v-for="subMenu in menu.children" :key="subMenu.id">{{ subMenu.title }}</a-menu-item>
          </a-sub-menu>

          <!-- <a-menu-item v-else :key="menu.id">
            <template #title>
              <fund-outlined v-show="menu.icon === 'fund-outlined'"></fund-outlined>
              <user-outlined v-show="menu.icon === 'user-outlined'"></user-outlined>
              <span>{{ menu.title }}</span>
            </template>
          </a-menu-item> -->
          
        </template>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background-color: #fff; padding: 0;">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '4px 6px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.layout {
  height: 100%;

  .logo {
    color: #fff;
    font-size: 18px;
    text-align: center;
    height: 32px;
    margin: 16px;
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>