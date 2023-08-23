<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { Company } from '@/models/user';
import PageHeader from '@/home/comment/header.vue'
import CompanyInfo from '@/company/comment/company_info.vue'
import { useRoute } from 'vue-router'
import { useCompanyStore } from '@/store/modules/company'
import { industry } from '@/models/filter_list'

const route = useRoute();
const companyStore = useCompanyStore()
// 弹窗显示
const dialogVisible = ref(false)
let showIndysury = false;
// 当前公司
let currentCompany: Company | undefined;
//
let fixedIndustry: Array<Object> = [];
// 初始化当前公司
onBeforeMount(() => {
    for (let index = 0; index < companyStore.companys.length; index++) {
        if (companyStore.companys[index].id == route.params.id) {
            currentCompany = companyStore.companys[index];
        }
    }
    let lis = []
    let keys = Object.keys(industry);
    // for (let index = 0; index < keys.length; index++) {
    //     industry[keys[index]]
    // }
})

// 状态更新
const updateStatus = (value: string) => {
    currentCompany!.status = value;
    companyStore.updateCompanys(currentCompany!)

}

// link跳转    
const jumpLink = (value?: string) => {
    window.open(value ?? 'https://www.baidu.com', '_blank')
}

const removeIndustry = (value: string) => {
    let lis = currentCompany!.industrys?.filter((item) => item != value);
    currentCompany!.industrys = lis;
    companyStore.updateCompanys(currentCompany!)
}

const removeTag = (value: string) => {
    let lis = currentCompany!.tags?.filter((item) => item != value);
    currentCompany!.tags = lis;
    companyStore.updateCompanys(currentCompany!)
}

const addIndustry = (value: boolean) => {
    showIndysury = value;
    dialogVisible.value = true;
}






</script>

<template>
    <div class="main">
        <PageHeader />
        <div class="body">

            <div class="leftBox">
                <el-scrollbar max-height="90vh">
                    <div style="height: 32px;"></div>
                    <CompanyInfo :company="currentCompany" @statusChange="updateStatus"></CompanyInfo>
                    <div class="left_info">
                        <div style="display: flex;">
                            <div class="logo">
                                <el-image style="width: 100%; height: 100%;border-radius: 6px;"
                                    :src="currentCompany?.logoUrl">
                                </el-image>
                            </div>
                            <div class="content">
                                <h1 class="content_title" style="color: #394251; margin-top: 5px;">
                                    {{ currentCompany?.name }}
                                </h1>
                                <div class="content_describe">
                                    2022 founded USD San Francisco, California, United States
                                </div>
                            </div>
                        </div>
                        <div class="font_color_dakr" style="margin-bottom: 10px;margin-top: 10px;">
                            {{ currentCompany?.description }}
                        </div>
                        <div class="font_color_dakr">
                            YC W23
                        </div>
                        <div class="min_title">
                            Links
                        </div>
                        <div class="min_title link_box" @click="jumpLink()">
                            Website
                        </div>
                        <div class="min_title">
                            Documents
                        </div>
                        <div style="display: flex;">
                            <div class="min_title link_box" @click="jumpLink()">
                                Google Drive
                            </div>
                            <div class="min_title link_box" @click="jumpLink()">
                                Deck
                            </div>
                            <div class="min_title link_box" @click="jumpLink()">
                                DD
                            </div>
                            <div class="min_title link_box" @click="jumpLink()">
                                Invest
                            </div>
                        </div>
                        <div class="min_title">
                            Legal Name
                        </div>
                        <div class="min_box font_color_dakr">
                            my name is kk
                        </div>
                        <div class="min_title">
                            Headquarters
                        </div>
                        <div class="min_box font_color_dakr">
                            {{ currentCompany?.address }}
                        </div>
                        <div class="min_title">
                            Detailed Headquarters Address
                        </div>
                        <div class="min_box font_color_dakr">
                            San Francisco, CA, USA
                        </div>
                        <div class="min_title">
                            Referral
                        </div>
                        <div class="min_box font_color_dakr">
                            YC
                        </div>

                    </div>
                    <div class="left_info">
                        <h3>Industry/Tag</h3>
                        <h5 style="margin-top: 10px;margin-bottom: 10px;">Industry</h5>
                        <div class="industryBox font_color_dakr">
                            <div class="industry_tag" v-for="(item, index) in currentCompany?.industrys"
                                :key="item + index">{{ item }}
                                <span class="iconfont" @click="removeIndustry(item)">
                                    &#xe8e7;
                                </span>
                            </div>
                            <div class="iconfont add_industry" @click="addIndustry(true)">
                                &#xe664;
                                Add
                            </div>
                        </div>
                        <h5 style="margin-top: 10px;margin-bottom: 10px;">Tag</h5>
                        <div class="industryBox font_color_dakr">
                            <div class="industry_tag" v-for="(item, index) in currentCompany?.tags" :key="item + index">{{
                                item
                            }}
                                <span class="iconfont" @click="removeTag(item)">
                                    &#xe8e7;
                                </span>
                            </div>
                            <div class="iconfont add_industry" @click="addIndustry(false)">
                                &#xe664;
                                Add
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
            <div style="width: 30px;"></div>
            <div class="rightBox">7</div>
        </div>
        <!-- dialog -->
        <el-dialog v-model="dialogVisible" title="Tips" width="50%" draggable>
            <template #header v-if="showIndysury">Add Industry</template>
            <template #header v-else>Add Tag</template>
            <div>6</div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #eff1f5;
}

.body {
    display: flex;
    padding: 32px;
    padding-top: 0;
    padding-bottom: 0;
}

.leftBox,
.rightBox {
    flex: 1;
}

.left_info {
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px;
    margin-top: 20px;
    box-sizing: border-box;

}

.logo {
    width: 80px;
    height: 80px;
    margin-right: 20px;
}

.content_describe {
    display: flex;
    margin-top: 10px;
    color: #8b929e;
}

.min_title {
    font-size: 12px;
    color: #8b929e;
    margin-top: 10px;
}

.link_box {
    height: 20px;
    line-height: 20px;
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 5px;
    margin-right: 15px;
    border: 1px solid #d6dde9;
    border-radius: 4px;
    cursor: pointer;
}

.min_box {
    font-size: 14px;
    margin-top: 5px;

}

.industryBox {
    display: flex;
    flex-wrap: wrap;
}

.industry_tag {
    padding: 3px;
    padding-left: 6px;
    padding-right: 6px;
    margin-right: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
    font-size: 12px;
    background-color: #eef0f4;
}

.industry_tag>span {
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
}

.add_industry {
    padding: 3px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #d6dde9;
}
</style>
