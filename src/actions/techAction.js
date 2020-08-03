import * as ACTIONS from './types';

// Get techs from server 

export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: ACTIONS.GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

// Set Loading to true
export const setLoading = () => {
    return {
        type: ACTIONS.SET_LOADING
    }
}