import type { Router } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/store/user'

export function setupRouterGuard(router: Router) {
  router.beforeEach((to, _from, next) => {
    nprogress.start()

    const userStore = useUserStore()
    const requiresAuth = to.matched.some((r) => r.meta.requiresAuth)

    if (!requiresAuth || to.meta.noAuth) {
      next()
      return
    }

    if (!userStore.isLoggedIn) {
      next('/login')
      return
    }

    next()
  })

  router.afterEach(() => {
    nprogress.done()
  })
}