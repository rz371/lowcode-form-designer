import type { Directive } from 'vue'

export const vPermission: Directive = {
  mounted(el, binding) {
    const roles = binding.value as string[]
    const userRoles = JSON.parse(localStorage.getItem('roles') || '[]')
    const hasPermission = roles.some((role) => userRoles.includes(role))
    if (!hasPermission) {
      el.parentNode?.removeChild(el)
    }
  },
}