import { instance } from "../api";
import { ResponseLoginDataType } from "../login/loginTypes";
import { ReqRegestrationType } from "./registrationTypes";

export const regAPI = {
    async signup(signup_data: ReqRegestrationType) {
        const user = await instance.post<ReqRegestrationType, ResponseLoginDataType>('signup', signup_data)
        return user.data

    }
}