<script setup lang="ts">
import { inject, computed } from 'vue'
import { ElInput, ElFormItem } from 'element-plus'
import type { Component } from 'vue'
import type { ComponentNode } from '@/packages/core/src/types/schema'
import { FORM_DATA_KEY } from './injectionKeys'

const props = defineProps<{
  node: ComponentNode
}>()

const formData = inject<Record<string, any>>(FORM_DATA_KEY)!

/* ===== 组件映射：Schema type → Vue 组件 ===== */
const componentMap: Record<string, Component> = {
  input: ElInput,
  // 未来可扩展：select → ElSelect, switch → ElSwitch, ...
}

const resolvedComponent = computed(() => componentMap[props.node.type])

/* ===== 为当前字段创建 v-model 双向绑定 ===== */
const modelValue = computed({
  get() {
    return formData[props.node.field!]
  },
  set(val: any) {
    formData[props.node.field!] = val
  },
})

/* ===== 将 Schema rules 转为 ElForm 校验规则 ===== */
const resolvedRules = computed(() => {
  if (!props.node.rules || props.node.rules.length === 0) return undefined
  return props.node.rules.map((rule) => ({
    required: rule.required,
    message: rule.message,
    trigger: rule.trigger ?? 'blur',
    pattern: rule.pattern,
    min: rule.min,
    max: rule.max,
  }))
})
</script>

<template>
  <el-form-item
    v-if="resolvedComponent"
    :label="node.label"
    :prop="node.field"
    :rules="resolvedRules"
  >
    <component
      :is="resolvedComponent"
      v-model="modelValue"
      v-bind="node.props"
      :style="{ width: node.layout?.width ?? '100%' }"
    />
  </el-form-item>

  <!-- 未知组件类型时的降级提示 -->
  <el-form-item v-else :label="node.label">
    <el-tag type="warning" size="small">
      未注册组件: {{ node.type }}
    </el-tag>
  </el-form-item>
</template>