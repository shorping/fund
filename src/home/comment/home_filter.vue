<script setup lang="ts">
import { ref, watch, onUpdated } from 'vue'
import { status, funds, meeting_Date, headquarters } from '@/models/filter_list'
const myList = ref(false);
const statusFilter = ref([]);
const fundsFilter = ref([]);
const meetingDateFilter = ref<string | undefined>('All');
const customDateRadio = ref<boolean>(false);
const data = new Date();
const customDate = ref([data.toLocaleDateString(), new Date(data.setMonth(data.getMonth() + 1)).toLocaleDateString()]);
const headquartersFilter = ref([]);

let $emit = defineEmits(['filter']);

// 侦听收藏
watch(myList, () => {
    $emit('filter', myList.value, statusFilter.value, fundsFilter.value, headquartersFilter.value)
})
// 侦听状态
watch(statusFilter, () => {
    $emit('filter', myList.value, statusFilter.value, fundsFilter.value, headquartersFilter.value)
})
// 侦听基金
watch(fundsFilter, () => {
    $emit('filter', myList.value, statusFilter.value, fundsFilter.value, headquartersFilter.value)
})
// 侦听日期
watch(meetingDateFilter, (newCount) => {
    if (newCount != undefined) {
        customDateRadio.value = false;
    }
})
// 侦听地址
watch(headquartersFilter, () => {
    $emit('filter', myList.value, statusFilter.value, fundsFilter.value, headquartersFilter.value)
})

// 变更日期回调
const customDateChange = () => {
    meetingDateFilter.value = undefined;

}



</script>

<template>
    <div>

        <el-checkbox class="filter_item" v-model="myList">
            <span class="filter_title" style="width: 30px;height: 30px;">My List</span>
        </el-checkbox>


        <el-collapse>

            <el-collapse-item class="filter_item" name="1">
                <template #title>

                    <span class="filter_title">Status</span>
                    <el-icon v-if="statusFilter.length > 0" class="header-icon">

                        <div class="checkcount">{{ statusFilter.length }}</div>
                    </el-icon>
                </template>
                <el-checkbox-group v-model="statusFilter">
                    <div v-for="(item, index) in status" :key="index"><el-checkbox :label="item" /></div>

                </el-checkbox-group>
            </el-collapse-item>


            <el-collapse-item class="filter_item" name="2">
                <template #title>

                    <span class="filter_title">Funds</span>
                    <el-icon v-if="fundsFilter.length > 0" class="header-icon">

                        <div class="checkcount">{{ fundsFilter.length }}</div>
                    </el-icon>
                </template>
                <el-checkbox-group v-model="fundsFilter">
                    <div v-for="(item, index) in funds" :key="index"><el-checkbox :label="item" /></div>

                </el-checkbox-group>
            </el-collapse-item>
            <el-collapse-item class="filter_item" name="3">
                <template #title>
                    <span class="filter_title">Meeting Date</span>
                    <el-icon v-if="meetingDateFilter != 'All'" class="header-icon">

                        <div class="checkcount">{{ 1 }}</div>
                    </el-icon>
                </template>
                <el-radio-group v-model="meetingDateFilter">
                    <div style="width: 100%;" v-for="(item, index) in meeting_Date" :key="index"><el-radio :label="item" />
                    </div>
                </el-radio-group>
                <div class="dateblock">
                    <el-radio v-model="customDateRadio" style="margin: 0;" @change="customDateChange" />
                    <el-date-picker style="width: 100%;" v-model="customDate" type="daterange" range-separator="To"
                        start-placeholder="Start date" end-placeholder="End date" size="default" />
                </div>
            </el-collapse-item>
            <el-collapse-item class="filter_item" name="4">
                <template #title>

                    <span class="filter_title">Headquarters</span>
                    <el-icon v-if="headquartersFilter.length > 0" class="header-icon">

                        <div class="checkcount">{{ headquartersFilter.length }}</div>
                    </el-icon>
                </template>
                <el-checkbox-group v-model="headquartersFilter">
                    <div v-for="(item, index) in headquarters" :key="index"><el-checkbox :label="item" /></div>

                </el-checkbox-group>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<style scoped>
.filter_item {
    margin-top: 10px;
}

/* 
:deep .el-checkbox__inner {
    width: 20px;
    height: 20px;
}

:deep .el-checkbox__inner::after {
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    left: 5px;
    top: 5px;
}

:deep .el-checkbox__input.is-checked .el-checkbox__inner::after {
    transform: rotate(50deg) scaleY(1.3);
} */


.el-collapse,
.el-collapse-item_wrap {
    border: none;
}

.filter_title {
    font-size: 16px;
    font-weight: 400;
    color: black;
}

.header-icon {
    padding-left: 10px;
}

.checkcount {
    height: 20px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #e3ecff;
    color: #543bef;
}



.dateblock {
    display: flex;
    margin-top: 10px;
    align-items: center;
    text-align: center;
}
</style>
