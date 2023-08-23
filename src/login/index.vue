<script setup lang="ts">
import type { FormRules } from 'element-plus/lib/components/form/index.js';
import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';
import { useRouter } from "vue-router";
import { reactive, ref, triggerRef } from 'vue'
import { useUserStore } from "@/store/modules/user";

// 路由
const router = useRouter();

// 是否处于loading状态
const loading = ref(false)

// 用户存储
const userInfo = useUserStore()

// 表单数据
const form = reactive({
    email: '123@163.com',
    password: '123456',
})

// 校验规则
const fromRules = reactive<FormRules>({
    email: [
        {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
        }
    ],
    passawd: [
        {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
        }
    ]
})



const onSubmit = async () => {
    if (form.email != '123@163.com' || form.password != '123456') {
        ElMessage({
            message: '邮箱或密码错误.',
            type: 'warning',
        })
        return;
    }
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        userInfo.createUserInfo();
        router.push({
            path: '/home'
        })
    }, 2000);


}

</script>



<template>
    <div class="container">

        <el-form :model="form" class="from" :rules="fromRules" hide-required-asterisk>
            <h2 class="heard">
                投资管理系统
            </h2>
            <el-form-item label="" prop="email">
                <el-input v-model="form.email" placeholder="请输入邮箱" class="input" clearable />
            </el-form-item>
            <el-form-item label="" prop="passawd">
                <el-input v-model="form.password" type="password" placeholder="请输入密码" class="input" show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="input" @click="onSubmit" :loading="loading">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background: url(@/assets/login_bgc.jpg) no-repeat;
    background-size: 100% 100%;
}

.heard {
    color: #fff;
    margin-bottom: 20px;
}

.from {
    width: 50%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input {
    width: 300px;
    height: 36px;

}
</style>
