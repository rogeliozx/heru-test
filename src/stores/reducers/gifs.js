import {
  GET_TRENDING_FAILED,
  GET_TRENDING_SUCCESS,
  SEARCH_GIF_SUCCESS,
  SEARCH_GIF_FAILED,
} from '../actions/gifs';

const initialState = {
  gifs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_SUCCESS:
      return { ...state, gifs: action.data };
    case GET_TRENDING_FAILED:
      return { ...state };
    case SEARCH_GIF_SUCCESS:
      return { gifs: action.data };
    case SEARCH_GIF_FAILED:
      return { ...state };
    default:
      return state;
  }
};
