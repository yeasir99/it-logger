import * as ACTIONS from './types';


// Get all Logs 
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = res.json();
        dispatch({
            type: ACTIONS.GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.LOGS_ERROR,
            payload: err.response.data
        })
    }
}


// Set Loading to true
export const setLoading = () => {
    return {
        type: ACTIONS.SET_LOADING
    }
}