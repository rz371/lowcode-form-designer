<script setup lang="ts">
import { reactive, ref, provide } from 'vue'
import type { FormSchema, FormConfig } from '@/packages/core/src/types/schema'
import FieldRenderer from './FieldRenderer.vue'
import { FORM_DATA_KEY, FORM_REF_KEY } from './injectionKeys'

const props = defineProps<{
  schema: FormSchema
}>()

/** 表单数据对象 */
const formData = reactive<Record<string, any>>({})
/** ElForm 实例引用 */
const formRef = ref()

provide(FORM_DATA_KEY, formData)
provide(FORM_REF_KEY, formRef)

/** 表单全局配置，带默认值兜底 */
const formConfig: FormConfig = {
  labelWidth: 100,
  labelAlign: 'right',
  ...props.schema.form,
}

/** 获取表单数据 */
function getFormData() {
  return formData
}

/** 设置/回填表单数据 */
function setFormData(data: Record<string, any>) {
  Object.assign(formData, data)
}

/** 校验 */
async function validate() {
  return await formRef.value?.validate()
}

/** 重置 */
function reset() {
  formRef.value?.resetFields()
}

defineExpose({ getFormData, setFormData, validate, reset })
</script>

<template>
  <el-form
    ref="formRef"
    :model="formData"
    :label-width="formConfig.labelWidth"
    :label-position="formConfig.labelAlign"
    :size="formConfig.size ?? 'default'"
  >
    <FieldRenderer
      v-for="node in schema.container.children"
      :key="node.id"
      :node="node"
    />
  </el-form>
</template>