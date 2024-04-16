import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type requestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type initialStateType = {
    error: null | string
    status: requestStatusType
    initialized: boolean
}

const initialState: initialStateType = {
    error: null,
    status: 'idle',
    initialized: false
}
const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initialization() { },
        setError(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        },
        setStatus(state, action: PayloadAction<{ status: requestStatusType }>) {
            state.status = action.payload.status
        }
    }
})

export const appReducer = slice.reducer
export const { initialization, setError, setStatus } = slice.actions