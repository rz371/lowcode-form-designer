<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import { usePermission } from '@/hooks/usePermission'

const route = useRoute()
const appStore = useAppStore()
const { hasPermission } = usePermission()

/** 菜单配置：未来移到独立文件 */
const menuItems = computed(() => [
  {
    path: '/dashboard',
    title: '仪表盘',
    icon: 'Odometer',
    show: true,
  },
  {
    path: '/system',
    title: '系统管理',
    icon: 'Setting',
    show: hasPermission(['admin']),
    children: [
      { path: '/system/user', title: '用户管理', icon: 'User' },
      { path: '/system/role', title: '角色管理', icon: 'Avatar' },
    ],
  },
  {
    path: '/lowcode',
    title: '低代码表单',
    icon: 'MagicStick',
    show: true,
    children: [
      { path: '/lowcode/designer', title: '表单设计器', icon: 'Edit' },
      { path: '/lowcode/render', title: '表单渲染', icon: 'Monitor' },
      { path: '/lowcode/schemas', title: 'Schema 管理', icon: 'Document' },
    ],
  },
])
</script>

<template>
  <aside
    class="sidebar bg-gray-900 text-white flex flex-col transition-all duration-300"
    :class="appStore.sidebarCollapsed ? 'w-16' : 'w-60'"
  >
    <div class="h-12 flex items-center px-4 border-b border-gray-700 flex-shrink-0">
      <span v-show="!appStore.sidebarCollapsed" class="text-base font-semibold">Admin Pro</span>
    </div>
    <nav class="flex-1 overflow-auto py-2">
      <template v-for="item in menuItems" :key="item.path">
        <div v-if="item.show" class="px-2">
          <router-link
            v-if="!item.children"
            :to="item.path"
            class="menu-item"
            :class="{ active: route.path === item.path }"
          >
            <el-icon><component :is="item.icon" /></el-icon>
            <span v-show="!appStore.sidebarCollapsed" class="ml-2">{{ item.title }}</span>
          </router-link>
          <div v-else>
            <div class="menu-item text-gray-400">
              <el-icon><component :is="item.icon" /></el-icon>
              <span v-show="!appStore.sidebarCollapsed" class="ml-2">{{ item.title }}</span>
            </div>
            <div v-show="!appStore.sidebarCollapsed" class="pl-6">
              <router-link
                v-for="child in item.children"
                :key="child.path"
                :to="child.path"
                class="menu-item text-sm"
                :class="{ active: route.path === child.path }"
              >
                <el-icon><component :is="child.icon" /></el-icon>
                <span class="ml-2">{{ child.title }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </nav>
  </aside>
</template>

<style scoped>
.menu-item {
  @apply flex items-center px-3 py-2 rounded cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white no-underline mb-1;
}
.menu-item.active {
  @apply bg-gray-700 text-white;
}
</style>