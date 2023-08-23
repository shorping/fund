import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store/modules/user'
import routers from '@/router/routers'



// 创建路由
const router = createRouter({
    // 路由模式
    history: createWebHistory(),
    // 路由集合
    routes: routers
})

// 前置首位
router.beforeEach((_to, _from, next) => {
    const store = useUserStore();
    if (store.userInfo?.id == null && _to.path != '/login') {

        next({ path: '/login' });
    } else {
        // 放行
        next();
    }

})

export default router;