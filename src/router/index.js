// 引入需要的模块
import { createRouter, createWebHistory } from "vue-router"
// 下面使用了es6的对象增强写法，命名必须是routes
const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        // 已经配置了路径别名，@/view 就可以写成 view
        // 配置了extensions，login.vue可以写成login
        component: () => import('@/views/login/login')
    },
    {
        path: '/home',
        component: () => import('views/home/home')
    }
]
// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 导出路由
export default router