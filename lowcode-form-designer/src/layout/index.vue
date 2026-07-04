<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<template>
  <div class="layout h-screen w-screen flex overflow-hidden">
    <Sidebar />
    <div class="flex flex-col flex-1 overflow-hidden">
      <Header />
      <main class="flex-1 overflow-auto p-6 bg-gray-50">
        <router-view />
      </main>
    </div>
  </div>
</template>