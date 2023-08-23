import { defineStore } from 'pinia'
import { Company } from '@/models/user'

// 公司列表
export const useCompanyStore = defineStore('company', {



    state: () => ({
        companys: [
            new Company({
                id: '100',
                name: '吹风机集团',
                displayName: 'my name is kk',
                email: '0@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/coke-diet-logo.svg',
                status: 'Hold',
                address: 'NanJing',
                description: '一家致力于吹风机制造研发地高精尖集团',
                vfunds: ['Fund1'],
                createTime: new Date('2022-1-3'),
                likes: ['123@163.com', '666@163.com', '777@163.com', '888@163.com'],
                sames: ['999@163.com'],
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '101',
                name: '洗衣机集团',
                displayName: 'my name is kk',
                email: '1@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/odp.svg',
                status: 'DD',
                address: 'BeiJing',
                description: '一家致力于洗衣机制造研发地高精尖集团',
                vfunds: ['Fund1', 'GoT F03'],
                createTime: new Date('2023-3-3'),
                likes: ['123@163.com'],
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '102',
                name: '炒菜锅集团',
                displayName: 'my name is kk',
                email: '2@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
                status: 'DD',
                address: 'BeiJing',
                description: '隔壁炒菜',
                createTime: new Date(),
                sames: ['123@163.com'],
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',

            }),
            new Company({
                id: '103',
                name: '在线学习',
                displayName: 'my name is kk',
                email: '3@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
                status: 'Failed',
                address: 'London',
                description: '一家致力于在线学习',
                vfunds: ['Fund1', 'Fund3'],
                createTime: new Date(new Date('2020-3')),
                likes: ['123@163.com'],
                sames: ['999@163.com'],
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '104',
                name: '办公家具',
                displayName: 'my name is kk',
                email: '4@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/apae.svg',
                status: 'Q/A',
                address: 'NanJing',
                description: '打造办公家具',
                vfunds: ['Fund3', 'WW', 'TF 03'],
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '105',
                name: '菠萝手机',
                displayName: 'my name is kk',
                email: '5@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/aluesis-alueminyum-cephe-sistemleri.svg',
                status: 'Q/A',
                address: 'China',
                description: '研发菠萝手机',
                vfunds: ['testFund'],
                createTime: new Date(),
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '106',
                name: '玻璃座椅',
                displayName: 'my name is kk',
                email: '6@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/zepter-international-1.svg',
                status: 'Failed',
                address: 'NanJing',
                description: '玻璃座椅好',
                vfunds: ['Fund1', 'Fund3'],
                likes: ['123@163.com'],
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '107',
                name: '',
                displayName: 'my name is kk',
                email: '7@123.com',
                logoUrl: 'https://worldvectorlogo.com/logo/bugatti-eb',
                status: 'To Invest',
                address: 'New Your',
                description: '',
                vfunds: ['GoT F03'],
                createTime: new Date('2020-3-1'),
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '108',
                name: '语言开发',
                displayName: 'my name is kk',
                email: '8@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/php-1.svg',
                status: 'Failed',
                address: 'NanJing',
                description: '世界上最好的语言',
                vfunds: ['TF 03'],
                createTime: new Date(),
                likes: ['123@163.com'],
                sames: ['999@163.com'],
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
            new Company({
                id: '109',
                name: 'Next',
                displayName: 'my name is kk',
                email: '9@123.com',
                logoUrl: 'https://worldvectorlogo.com/logo/armor-all-55075',
                status: 'To Invest',
                address: 'ShangHai',
                description: '下一个',
                createTime: new Date('2021'),
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',

            }),
            new Company({
                id: '110',
                name: '企鹅寻亲项目',
                displayName: 'my name is kk',
                email: '10@123.com',
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/trustedteller-1.svg',
                status: 'Hold',
                address: 'NeiJI',
                description: '',
                vfunds: [],
                createTime: new Date('1999'),
                industrys: ['B2B Software and Services', 'Engineering', 'Product and Design'],
                tags: ['Artifical Intelligence', 'Machine Learning', 'Developer Tools', 'YCW23'],
                referral: 'YC',
            }),
        ] as Array<Company>,
    }),

    actions: {
        updateCompanys(company: Company) {

            for (let item of this.companys) {
                if (item?.id == company?.id) {
                    item = company
                }
            }


        },


    }
})