import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'uno.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { setupRouterGuard } from './router/guard'
import { vPermission } from './directives/permission'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.directive('permission', vPermission)

setupRouterGuard(router)

app.mount('#app')