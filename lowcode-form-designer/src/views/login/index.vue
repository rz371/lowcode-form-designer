<script setup lang="ts">
</script>

<template>
  <div class="login-page h-screen w-screen flex-center">
    <div class="bg-white rounded-lg shadow-lg p-8 w-96">
      <h2 class="text-xl font-semibold text-center mb-6">后台管理系统</h2>
      <el-form label-width="0">
        <el-form-item>
          <el-input placeholder="用户名" />
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-full">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>