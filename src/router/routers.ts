

const routers: any = [
    // 重定向
    { path: '/', redirect: '/home' },
    // 登录
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/login/index.vue')
    },
    // 首页
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/home/index.vue')
    }
];


export default routers;