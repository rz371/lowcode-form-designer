import { ref } from 'vue'
import type { FormSchema } from '@/packages/core/src/types/schema'

export function useFormSchema() {
  const schema = ref<FormSchema | null>(null)
  const loading = ref(false)

  async function loadSchema(_id: string) {
    loading.value = true
    try {
      // 后续调用 API
      // schema.value = await getSchemaApi(id)
    } finally {
      loading.value = false
    }
  }

  function setSchema(raw: FormSchema) {
    schema.value = raw
  }

  return { schema, loading, loadSchema, setSchema }
}