
export enum UserType {
    Client,
    Employee,
    Manage
}

interface IUser {
    id?: string,
    displayName?: string,
    email?: string,
    photoUrl?: string,
    type?: UserType,
    phone?: string,
    name?: string,
    companys?: Array<string> | undefined,
    companysTop?: Array<string> | undefined,

}

export class User {
    // id
    id: string | undefined;
    // 名称
    name: string | undefined;
    // 昵称
    displayName: string | undefined;
    // 邮箱
    email: string | undefined;
    // 头像
    photoUrl: string | undefined;
    // 类型
    type: UserType | undefined;
    // 电话
    phone: string | undefined;
    // 收藏公司
    companys: Array<string> | undefined;
    companysTop: Array<string> | undefined;

    // 检查是否为客户
    static checkClient(user: User): boolean {

        return user.type != UserType.Client;
    }

    constructor(
        user: IUser,
    ) {
        this.id = user.id;
        this.name = user.name;
        this.displayName = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoUrl;
        this.type = user.type;
        this.phone = user.phone;
        this.companys = user.companys;
        this.companysTop = user.companysTop;
    }
}

interface ICompany {
    id: string,
    displayName?: string,
    email?: string,
    logoUrl?: string,
    status?: string,
    phone?: string,
    name?: string,
    address?: string,
    createTime?: Date,
    description?: string,
    vfunds?: Array<string>,
    likes?: Array<string>,
    sames?: Array<string>,
    industrys?: Array<string> | undefined,
    tags?: Array<string> | undefined,
    referral?: string,
}

export class Company {
    // id
    id: string;
    // 名称
    name: string | undefined;
    // 昵称
    displayName: string | undefined;
    // 邮箱
    email: string | undefined;
    // 照片
    logoUrl: string | undefined;
    // 状态
    status: string | undefined;
    // 电话
    phone: string | undefined;
    // 地址
    address: string | undefined;
    // 创建时间
    createTime: Date | undefined;
    // 描述
    description: string | undefined;
    // 基金
    vfunds: Array<string> | undefined;
    // 点赞公司
    likes: Array<string> | undefined;
    // 点踩公司
    sames: Array<string> | undefined;
    industrys: Array<string> | undefined;
    tags: Array<string> | undefined;
    referral: string | undefined;


    constructor(
        user: ICompany,
    ) {
        this.id = user.id;
        this.name = user.name;
        this.displayName = user.displayName;
        this.email = user.email;
        this.logoUrl = user.logoUrl;
        this.status = user.status;
        this.phone = user.phone;
        this.address = user.address;
        this.address = user.address;
        this.createTime = user.createTime;
        this.description = user.description;
        this.vfunds = user.vfunds;
        this.likes = user.likes;
        this.sames = user.sames;
        this.industrys = user.industrys;
        this.tags = user.tags;
        this.referral = user.referral;
    }
}