import { defineStore } from 'pinia'
import { User, UserType } from '@/models/user'

const key = 'userInfo'
// 用户信息
export const useUserStore = defineStore('user', {



    state: () => ({
        userInfo: localStorage.getItem(key) == null ? null : JSON.parse(localStorage.getItem(key)!) as User | null,
    }),

    actions: {
        createUserInfo() {
            this.userInfo = new User({
                id: '001',

                email: '123@163.com',

                type: UserType.Manage,

                name: 'kk',

                companys: ['101', '102', '106'],
                companysTop: ['101', '103', '102', '108'],
            });

            localStorage.setItem(key, JSON.stringify(this.userInfo))
        },

        removeUserInfo() {
            this.userInfo = null;
            localStorage.removeItem(key);
        }
    }
})