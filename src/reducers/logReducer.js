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
    case ACTIONS.DELETE_LOGS:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== payload),
        loading: false,
      };
    case ACTIONS.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => (log.id === payload.id ? payload : log)),
        loading: false,
      };
    case ACTIONS.SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case ACTIONS.SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case ACTIONS.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
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
