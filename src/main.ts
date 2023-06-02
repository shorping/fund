import { createApp } from 'vue'
// 组件库
import ElementPlus from 'element-plus';
// pinia
import store from '@/store/index';
// 全局样式
import './global_style.css'
// 主文件
import App from './App.vue'
// 路由
import router from '@/router/route';

// 初始化
const app = createApp(App);

// 注册
app.use(ElementPlus)
app.use(store)
app.use(router)

// 挂载到index.html id=#app节点
app.mount('#app');
