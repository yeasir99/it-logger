import * as ACTIONS from './types';


// Get all Logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
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

// Add new logs 

export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        dispatch({
            type: ACTIONS.ADD_LOG,
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