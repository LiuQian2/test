import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'
// 使用路由
const vue = createApp(App)
vue.use(router)
vue.mount('#app')
