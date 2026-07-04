<script setup lang="ts">
import type { FormSchema } from '@/packages/core/src/types/schema'
import { FormRenderer } from '@/packages/form-renderer/src'

const demoUsernameSchema: FormSchema = {
  version: '1.0',
  form: { labelWidth: 100, labelAlign: 'right' },
  container: {
    id: 'root',
    type: 'root',
    children: [
      {
        id: 'field_username',
        type: 'input',
        label: '用户名',
        field: 'username',
        props: { placeholder: '请输入用户名', clearable: true },
        rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        layout: { width: '100%' },
      },
    ],
  },
}
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">表单渲染</h2>
    <div class="bg-white rounded-lg shadow-sm p-6" style="max-width: 600px">
      <FormRenderer :schema="demoUsernameSchema" />
    </div>
  </div>
</template>