import { defineStore } from 'pinia'
import { User } from '@/models/user'

// 用户信息
export const useUserStore = defineStore('user', {

    state: () => ({
        userInfo: new User(),
    }),
})