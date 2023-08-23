

const routers: any = [
    // 重定向
    { path: '/', redirect: '/home' },
    // 登录
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/login/index.vue')
    },
    // 首页
    {
        name: 'Home',
        path: '/home',
        component: () => import('@/home/index.vue')
    },
    // 详情页
    {
        name: 'Company',
        path: '/company/:id',
        component: () => import('@/company/index.vue')
    }
];


export default routers;