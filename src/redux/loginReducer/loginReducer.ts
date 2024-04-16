import { LoginResponseData, RequestLoginDataType, ResponseLoginDataType } from "@/api/login/loginTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { setStatus } from "../appReducer/appReducer";
import { loginApi } from "@/api/login/loginAPI";
import { handleError } from "@/features/errorUtils/errorUtils";
import { AxiosError } from "axios";
import Cookies from 'js-cookie';
import { setProfile } from "../profileReducer/profileReducer";
import { ReqRegestrationType } from "@/api/registration/registrationTypes";
import { regAPI } from "@/api/registration/registrationAPI";



type initialStateType = {
    user_id: string
    message: string
    email: string
    password: string
    session_id: string
    auth: boolean

}

const initialState: initialStateType = {
    user_id: '',
    message: '',
    email: '',
    password: '',
    session_id: '',
    auth: false
}

const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginResponseData>) {
            state.email = action.payload.user.email
            state.user_id = action.payload.user._id
            state.message = action.payload.message
            state.password = action.payload.user.password
            state.session_id = action.payload.session._id
            state.auth = true
        },
        signup(state, action: PayloadAction<LoginResponseData>) {
            state.email = action.payload.user.email
            state.user_id = action.payload.user._id
            state.message = action.payload.message
            state.password = action.payload.user.password
            state.session_id = action.payload.session._id
            state.auth = true
        }
    }
})

export const loginReducer = slice.reducer
export const { login, signup } = slice.actions



export const loginTC = (data: RequestLoginDataType) => async (dispatch: AppDispatch) => {
    dispatch(setStatus({ status: 'loading' }))
    try {
        const login_data = await loginApi.login(data)
        const { user } = login_data
        dispatch(login(login_data))
        dispatch(setStatus({ status: 'succeeded' }))
        dispatch(setProfile(user))
        Cookies.set('sessionId', login_data.session._id, { expires: 7 });
        // dispatch(setProfileDataAC({ data: res })) need create this logic
    } catch (e) {
        const err = e as Error | AxiosError
        handleError(err, dispatch)
    }
}

export const registrationTC = (data: ReqRegestrationType) => async (dispatch: AppDispatch) => {
    dispatch(setStatus({ status: 'loading' }))
    try {
        const login_data = await regAPI.signup(data)
        const { user } = login_data
        console.log(user)
        dispatch(signup(login_data))
        dispatch(setStatus({ status: 'succeeded' }))
        dispatch(setProfile(user))
        Cookies.set('sessionId', login_data.session._id, { expires: 7 });
        // dispatch(setProfileDataAC({ data: res })) need create this logic
    } catch (e) {
        const err = e as Error | AxiosError
        handleError(err, dispatch)
    }
}