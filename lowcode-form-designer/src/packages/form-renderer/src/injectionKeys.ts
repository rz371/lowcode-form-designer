import type { InjectionKey } from 'vue'

export const FORM_DATA_KEY: InjectionKey<Record<string, any>> = Symbol('formData')
export const FORM_REF_KEY: InjectionKey<any> = Symbol('formRef')