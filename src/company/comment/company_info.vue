<script setup lang="ts">
import { ref } from 'vue';
import { status } from '@/models/filter_list';
import { useUserStore } from '@/store/modules/user';
import { Company } from '@/models/user';

const userStore = useUserStore()
const props = defineProps({
    company: Company
})
const $emit = defineEmits(['statusChange'])

const handleCommand = (value: String) => {
    $emit('statusChange', value)

}

// 置顶公司
const topCompany = () => {
    let tops: Array<String> = userStore.userInfo?.companysTop ?? []
    if (tops?.includes(props.company!.id)) {
        tops = tops.filter((item) => item != props.company?.id)
    } else {
        tops.push(props.company!.id)
    }
    userStore.$patch((state) => {
        state.userInfo!.companysTop = tops;
    })
}

// 收藏公司
const collectCompany = () => {
    let collects: Array<String> = userStore.userInfo?.companys ?? []
    if (collects?.includes(props.company!.id)) {
        collects = collects.filter((item) => item != props.company!.id)
    } else {
        collects.push(props.company!.id)
    }
    userStore.$patch((state) => {
        state.userInfo!.companys = collects;
    })
}


</script>

<template>
    <div class="container">
        <div class="header">
            <div class="statusButton">
                <el-dropdown trigger="click" size="large" @command="handleCommand">
                    <el-button type="primary"
                        style="width: 100px;height: 36px; background-color: #543bef; font-weight: 600; font-size: 16px;">
                        {{ company?.status ?? '' }}
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item, index) in status" :key="index" :command="item">{{ item
                            }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="fundBox" v-for="(item, index) in company?.vfunds" :key="index">
                {{ item }}
            </div>
            <div class="topBtn">
                <el-button class="iconfont" @click="topCompany"
                    :class="userStore.userInfo?.companysTop?.includes(company!.id) ? 'zan' : 'pu'">
                    <span v-if="userStore.userInfo?.companysTop?.includes(company!.id)">&#xec41;</span>
                    <span v-else>&#xe7a5;</span>
                </el-button>
                <el-button class="iconfont" @click="collectCompany"
                    :class="userStore.userInfo?.companys?.includes(company!.id) ? 'collect' : 'pu'">
                    <span v-if="userStore.userInfo?.companys?.includes(company!.id)">&#xe8c6;</span>
                    <span v-else>&#xe602;</span>
                </el-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    flex-wrap: wrap;
}

.statusButton {
    margin-right: 40px;
}

.iconfont {
    width: 50px;
    height: 36px;
    margin-right: 20px;
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

.fundBox {
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;
    box-sizing: border-box;
    background-color: #d4edeb;
    color: #278b84;
    border-radius: 4px;
    font-weight: 600;
}
</style>
