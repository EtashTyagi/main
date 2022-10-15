import {OptionsObject, SnackbarKey, SnackbarMessage, SnackbarProvider} from "notistack";
import {ApiResponseType} from "../api/requests";
import {SnackbarOrigin} from "@mui/material";

const SNACKBAR_ORIGIN: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'right'
}

export const handleApiErrorSnackbar = (
    enqueueSnackbar: (message: SnackbarMessage,
                      options?: OptionsObject) => SnackbarKey,
    apiResult: ApiResponseType) => {

    if (apiResult.status !== 200) {
        enqueueSnackbar(apiResult.data.toString(), {
            variant: 'error',
            anchorOrigin: SNACKBAR_ORIGIN
        })
        return true
    }
    return false

}