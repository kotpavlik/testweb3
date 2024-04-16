export type ResponseLoginDataType = {
    data: LoginResponseData
    config?: {}
    headers?: {}
    request?: {}
    status?: number
    statusText: string
}

export type LoginResponseData = {
    message: string,
    session: SessionDataType
    user: UserDataType
}
type SessionDataType = {
    user_id: string
    _id: string
    __v?: number
}
export type UserDataType = {
    avatar: null | string
    avatarId: null | string
    role?: roleEnum
    _id: string
    email: string
    password: string
    firstName: string
    lastName: string
    gender?: genderEnum
    phone: null | string

}
export enum roleEnum {
    basic_user = 'basic_user',
    user = 'user',
    premium_user = 'premium_user',
    admin = 'admin',
    owner = 'owner',
}
export enum genderEnum {
    male = 'male',
    female = 'female'
}
export type RequestLoginDataType = {
    email: string
    password: string
}
