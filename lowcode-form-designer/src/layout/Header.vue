<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'

const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()

function handleLogout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <header class="header h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 flex-shrink-0">
    <div class="flex items-center gap-4">
      <el-icon class="cursor-pointer text-lg" @click="appStore.toggleSidebar">
        <Fold v-if="!appStore.sidebarCollapsed" />
        <Expand v-else />
      </el-icon>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-sm text-gray-600">{{ userStore.username }}</span>
      <el-button size="small" @click="handleLogout">退出</el-button>
    </div>
  </header>
</template>