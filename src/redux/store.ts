import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { loginReducer } from "./loginReducer/loginReducer";
import { appReducer } from "./appReducer/appReducer";
import { profileReducer } from "./profileReducer/profileReducer";




const rootReducer = combineReducers({
    Login: loginReducer,
    App: appReducer,
    Profile: profileReducer

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch() as AppDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


