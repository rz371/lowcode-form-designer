<script setup lang="ts">
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">用户管理</h2>
    <el-card>
      <template #header>
        <div class="flex-between">
          <el-input placeholder="搜索用户名" style="width: 240px" />
          <el-button type="primary">新增用户</el-button>
        </div>
      </template>
      <el-table :data="[]" border stripe>
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="role" label="角色" />
        <el-table-column label="操作" width="200" />
      </el-table>
    </el-card>
  </div>
</template>