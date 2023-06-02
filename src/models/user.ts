
enum UserType {
    Client,
    Employee,
    Manage
}

export class User {
    // id
    id: String | undefined;
    // 名称
    name: String | undefined;
    // 昵称
    displayName: String | undefined;
    // 邮箱
    email: String | undefined;
    // 头像
    photoUrl: String | undefined;
    // 类型
    type: UserType | undefined;
    // 电话
    phone: String | undefined;

    // 检查是否为客户
    static checkClient(user: User): boolean {

        return user.type != UserType.Client;
    }

}