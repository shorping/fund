<script setup lang="ts">

import PageHeader from '@/home/comment/header.vue'
import HomeFilter from '@/home/comment/home_filter.vue'
import CardItem from '@/home/comment/card_item.vue'
import { ref, onBeforeMount, onUpdated } from 'vue'
import { useCompanyStore } from "@/store/modules/company";
import { useUserStore } from "@/store/modules/user";
import { Company } from "@/models/user";

// 引用存储库
const companyList = useCompanyStore()
let { userInfo } = useUserStore()

// 展示列表
let companys = ref([...companyList.companys]);

// 置顶排序方法
const dataSort = () => {
    companys.value.sort((a, b) => {
        return (b.createTime?.getTime() ?? 0) - (a.createTime?.getTime() ?? 0);
    })

    let lis = [...companys.value];
    let noTop: Array<Company> = [];

    lis = lis.filter((key) => {
        if (userInfo?.companysTop?.includes(key.id)) {
            return true
        } else {
            noTop.push(key)
            return false;
        }
    });
    companys.value = [...lis, ...noTop];



}

// 初始化排序
onBeforeMount(() => {
    dataSort();
})

// 筛选方法
const filterChange = (my: boolean, status: Array<String>, funds: Array<String>, headquarters: Array<String>) => {
    let lis = [...companyList.companys];

    if (my) {
        lis = [...lis].filter((value) => {
            return userInfo?.companys?.includes(value.id)
        })
    }

    if (status.length != 0) {
        lis = lis.filter((value) => {
            return status.includes(value.status ?? '')
        })
    }
    if (funds.length != 0) {
        lis = lis.filter((value) => {
            return funds.some((key) => value?.vfunds?.includes(key))
        })
    }
    if (headquarters.length != 0) {
        lis = lis.filter((value) => {
            return headquarters.includes(value.address ?? '')
        })
    }
    companys.value = [...lis];
    dataSort();
}

</script>

<template>
    <div class="main">
        <PageHeader />
        <div class="body">
            <div class="filter">
                <el-scrollbar max-height="80vh" style="margin:20px">
                    <HomeFilter @filter="filterChange" />
                </el-scrollbar>
            </div>
            <div class="list">
                <el-scrollbar max-height="86vh">
                    <CardItem class="card_item" v-for="item in companys" :company="item" :key="item.id.toString" />
                    <div class="page_count">
                        <el-pagination background layout="prev, pager, next" :total="1000" />
                    </div>
                </el-scrollbar>

            </div>

        </div>
    </div>
</template>

<style scoped>
.main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #eff1f5;
}

.body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;

}

.filter {
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 6px;
    background-color: #fff;

}

.list {
    flex: 4;
    border-radius: 6px;
    margin-right: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.card_item:last-child {
    margin-bottom: 0;
}

.card_item {
    margin-bottom: 20px;
}

.page_count {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
