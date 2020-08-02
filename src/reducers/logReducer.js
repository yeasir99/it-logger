import * as ACTIONS from '../actions/types';
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case ACTIONS.ADD_LOG:
      return {
        ...state,
        logs: [payload, ...state.logs],
        loading: false,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.LOGS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
