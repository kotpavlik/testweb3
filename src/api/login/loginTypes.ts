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
    session_id: string
    user: UserDataType
    token: TokensType
}

export type TokensType = {
    refresh_token: string
    access_token: string
}
export type SessionDataType = {
    user_id: string
    _id: string
    refreshToken: string
    __v?: number
}
export type UserDataType = {
    activaitionLink: string | null
    avatar: null | string
    avatarId: null | string
    role?: roleEnum
    _id: string
    email: string
    password: string
    name: string
    isActivated: boolean
    __v?: number
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
