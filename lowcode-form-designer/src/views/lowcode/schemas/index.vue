<script setup lang="ts">
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Schema 管理</h2>
    <el-card>
      <el-table :data="[]" border stripe>
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="version" label="版本" width="100" />
        <el-table-column prop="updatedAt" label="更新时间" width="180" />
        <el-table-column label="操作" width="240" />
      </el-table>
    </el-card>
  </div>
</template>