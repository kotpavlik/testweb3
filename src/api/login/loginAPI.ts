import { instance } from "../api";
import { RequestLoginDataType, ResponseLoginDataType } from "./loginTypes";

export const loginApi = {
    async login(login_data: RequestLoginDataType) {
        const user = await instance.post<RequestLoginDataType, ResponseLoginDataType>('login', login_data)
        return user.data

    },
    authUser() {
        return instance.post<ResponseLoginDataType>('/auth/me', {})
            .then(res => res.data)
    },
    logout() {
        return instance.delete('/auth/me', {})
            .then(res => res.data)
    }
}