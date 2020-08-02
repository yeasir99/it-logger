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

// Delete Log from the server 

export const deleteLog = id => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })
        dispatch({
            type: ACTIONS.DELETE_LOGS,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Update Log on server 

export const updateLog = log => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();

        dispatch({
            type: ACTIONS.UPDATE_LOG,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Set current Log 

export const setCurrent = log => {
    return {
        type: ACTIONS.SET_CURRENT,
        payload: log
    }
}

// Clear current log 

export const clearCurrent = () => {
    return {
        type: ACTIONS.CLEAR_CURRENT
    }
}

// Set Loading to true
export const setLoading = () => {
    return {
        type: ACTIONS.SET_LOADING
    }
}