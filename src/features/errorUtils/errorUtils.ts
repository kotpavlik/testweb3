import axios, { AxiosError } from "axios";
import { setError } from "../../redux/appReducer/appReducer";
import { Dispatch } from "redux";

export const handleError = (err: Error | AxiosError, dispatch: Dispatch) => {
    if (axios.isAxiosError(err)) {
        const error = err.response?.data ? (err.response.data as { error: string }).error : err.message
        dispatch(setError({ error }))
    } else {
        dispatch(setError({
            error: `Native error ${err.message}`
        }))
    }
}