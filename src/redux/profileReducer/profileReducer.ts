import { LoginResponseData, UserDataType } from "@/api/login/loginTypes"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const initialState: UserDataType = {
    _id: '',
    avatar: null,
    avatarId: null,
    email: '',
    name: '',
    password: '',
    activaitionLink: '',
    isActivated: false
}


const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<UserDataType>) {
            state = action.payload
        }
    }
})

export const profileReducer = slice.reducer
export const { setProfile } = slice.actions