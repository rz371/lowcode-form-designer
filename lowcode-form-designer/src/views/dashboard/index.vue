<script setup lang="ts">
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">仪表盘</h2>
    <el-row :gutter="16">
      <el-col v-for="i in 4" :key="i" :span="6">
        <el-card shadow="hover" class="mb-4">
          <div class="text-2xl font-bold text-blue-500">--</div>
          <div class="text-sm text-gray-500 mt-1">统计项 {{ i }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>