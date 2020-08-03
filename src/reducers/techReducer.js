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
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
