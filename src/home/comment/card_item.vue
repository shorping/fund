<script setup lang="ts">

import { Company } from '@/models/user';
import { useUserStore } from '@/store/modules/user';
import { useCompanyStore } from '@/store/modules/company';
import { ref } from 'vue';
import { useRouter, } from 'vue-router';

const props = defineProps({
    company: Company
})
const router = useRouter();
const userStore = useUserStore()
const companyStore = useCompanyStore()
// 当前公司
const company = ref<Company>(props.company!)
// 用户信息
const { email } = userStore.userInfo!
// 是否聚焦
const showFocus = ref(false);

// 点赞
const linkFn = () => {
    let likes: Array<string> = company.value.likes ?? []
    if (likes?.includes(email ?? '') ?? false) {
        likes = likes?.filter((item) => item != email)
    } else {
        likes?.push(email!)
    }
    company.value.likes = likes;
    company.value.sames = company.value.sames?.filter((item) => item != email)
    companyStore.updateCompanys(company.value!);
}

// 点踩
const sameFn = () => {
    let sames: Array<string> = company.value.sames ?? []
    if (sames?.includes(email ?? '') ?? false) {
        sames = sames?.filter((item) => item != email)
    } else {
        sames?.push(email!)
    }
    company.value.sames = sames;
    company.value.likes = company.value.likes?.filter((item) => item != email)
    companyStore.updateCompanys(company.value!);
}

// 置顶公司
const topCompany = () => {
    let tops: Array<string> = userStore.userInfo?.companysTop ?? []
    if (tops?.includes(company.value.id)) {
        tops = tops.filter((item) => item != company.value.id)
    } else {
        tops.push(company.value.id)
    }
    userStore.$patch((state) => {
        state.userInfo!.companysTop = tops;
    })
}

// 收藏公司
const collectCompany = () => {
    let collects: Array<string> = userStore.userInfo?.companys ?? []
    if (collects?.includes(company.value.id)) {
        collects = collects.filter((item) => item != company.value.id)
    } else {
        collects.push(company.value.id)
    }
    userStore.$patch((state) => {
        state.userInfo!.companys = collects;
    })
}

// 跳转
const goRouter = () => {
    router.push({
        name: 'Company',
        params: { 'id': company.value.id.toString(), }
    })
}

</script>

<template>
    <div class="container" @mouseenter="showFocus = true" @mouseleave="showFocus = false" @click="goRouter">
        <div class="logo">
            <el-image style="width: 100%; height: 100%;border-radius: 6px;" :src="company?.logoUrl">
            </el-image>
        </div>
        <div class="content">
            <div class="content_title">
                <div>{{ company?.name }}</div>
                <div style="background-color: #d4edeb; color: #3f9993;" v-for="item in company?.vfunds">{{ item }}
                </div>
                <div>{{ company?.status }}</div>
            </div>
            <div class="content_description">{{ company?.description }}</div>
            <div class="content_description">{{ company?.address }}</div>
            <div class="content_description" style="margin-top: auto;">{{
                company?.createTime?.toLocaleDateString() ?? '--'
                + ' create' }} </div>
        </div>
        <div class="like">
            <div class="iconfont" :class="company?.likes?.includes(userStore.userInfo?.email!) ? 'zan' : ''"
                @click="linkFn">
                <span v-if="company?.likes?.includes(userStore.userInfo?.email!)">&#xec8c;</span>
                <span v-else>&#xe601;</span>
                <el-avatar style="margin-left: 2px;" v-for="item in company?.likes" :size="22"
                    :src="'https://img.zcool.cn/community/01786557e4a6fa0000018c1bf080ca.png@1280w_1l_2o_100sh.png'" />
            </div>
            <div class="iconfont" :class="company?.sames?.includes(userStore.userInfo?.email!) ? 'zan' : ''"
                @click="sameFn">
                <span v-if="company?.sames?.includes(userStore.userInfo?.email!)">&#xe69f;</span>
                <span v-else>&#xe62d;</span>
                <el-avatar style="margin-left: 2px;" v-for="item in company?.sames" :size="22"
                    :src="'https://img.zcool.cn/community/01786557e4a6fa0000018c1bf080ca.png@1280w_1l_2o_100sh.png'" />
            </div>
        </div>
        <div class="topBtn">
            <div class="iconfont" @click="topCompany"
                :class="userStore.userInfo?.companysTop?.includes(company.id) ? 'zan' : 'pu'"
                style="font-size: 20px; margin-bottom: 20px; transform: translateX(-2px);">
                <span v-if="userStore.userInfo?.companysTop?.includes(company.id)">&#xec41;</span>
                <span v-else-if="showFocus">&#xe7a5;</span>
            </div>
            <div class="iconfont" @click="collectCompany"
                :class="userStore.userInfo?.companys?.includes(company.id) ? 'collect' : 'pu'">
                <span v-if="userStore.userInfo?.companys?.includes(company.id)">&#xe8c6;</span>
                <span v-else-if="showFocus">&#xe602;</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    min-height: 100px;
    background-color: #fff;
    border-radius: 6px;
    padding: 24px;
}

.container:hover {
    box-shadow: 5px 5px 15px 5px #e5e7ea;
    cursor: pointer;
}

.logo {
    width: 100px;
    height: 100px;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
}

.content_title {
    display: flex;
    font-weight: 600;

}

.content_title :nth-child(n+2) {
    height: 20px;
    margin-left: 10px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #eef0f4;
    border-radius: 4px;
    color: #707988;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
}

.content_description {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #808999;
}

.like {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid #D6DDE9;
    padding-left: 10px;
}

.topBtn {
    min-width: 20px;
}

.iconfont {
    display: flex;
    align-items: center;
}

.zan {
    color: #543bef;
}

.collect {
    color: #e3b505;
}

.pu {
    color: #757275;
}
</style>
