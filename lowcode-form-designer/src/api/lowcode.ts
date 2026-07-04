import request from './request'
import type { FormSchema } from '@/packages/core/src/types/schema'

export function saveSchemaApi(schema: FormSchema) {
  return request.post('/lowcode/schema', schema)
}

export function getSchemaApi(id: string): Promise<FormSchema> {
  return request.get(`/lowcode/schema/${id}`)
}

/**
 * 获取 Schema 列表
 * @returns {Promise<any>} Schema 列表数据
 */
export function getSchemaListApi() {
  return request.get('/lowcode/schemas')
}