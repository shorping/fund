<script setup lang="ts">

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";

const centerDialogVisible = ref(false)

const userStore = useUserStore()
const router = useRouter()

const logOut = () => {
    centerDialogVisible.value = false;
    userStore.removeUserInfo();
    router.push({ path: '/login' });
}

</script>

<template>
    <div class="body">
        <div class="container">
            <slot name="left">
                <div class="logo">
                    <span class="logo_text">Invest</span>
                    <span class="logo_text"> . </span>
                    <span class="logo_text">Fund</span>
                </div>
            </slot>
            <div class="iconfont logout" @click="centerDialogVisible = true">
                &#xe600;
            </div>
        </div>
    </div>
    <el-dialog v-model="centerDialogVisible" title="提示" width="30%" align-center>
        <span>是否确定退出?</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="logOut">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style scoped>
.container {
    width: 100%;
    height: 60px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: #543BEF;
}

.logo {
    width: 200px;
    height: 40px;
    border-right: #fff 1px solid;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 26px;
}

.logo_text:nth-child(2) {
    width: 50px;
    transform: translateY(-15px);
    display: inline-block;
    text-align: center;
    font-size: 50px;
}

.logout {
    color: #fff;
    font-size: 30px;
    cursor: pointer
}
</style>
