<script setup lang="ts">
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">角色管理</h2>
    <el-card>
      <el-table :data="[]" border stripe>
        <el-table-column prop="name" label="角色名称" />
        <el-table-column prop="code" label="角色编码" />
        <el-table-column prop="description" label="描述" />
        <el-table-column label="操作" width="200" />
      </el-table>
    </el-card>
  </div>
</template>