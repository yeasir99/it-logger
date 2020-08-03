import * as ACTIONS from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false,
      };
    case ACTIONS.ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.TECHS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
