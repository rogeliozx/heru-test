import { put, takeLatest, call } from 'redux-saga/effects';
import {
  GET_TRENDING,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAILED,
  SEARCH_GIFS,
  SEARCH_GIF_FAILED,
  SEARCH_GIF_SUCCESS,
} from '../actions/gifs';
import { trendingApi, searchApi } from '../api/gifs';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTrending(action) {
  try {
    const data = yield call(trendingApi);
    yield put({ type: GET_TRENDING_SUCCESS, data });
  } catch (e) {
    yield put({ type: GET_TRENDING_FAILED, message: e });
  }
}
function* fetchSearch(action) {
  try {
    const data = yield call(searchApi, action.payload);
    yield put({ type: SEARCH_GIF_SUCCESS, data });
  } catch (e) {
    console.log(e);
    yield put({ type: SEARCH_GIF_FAILED, message: e });
  }
}

function* mySaga() {
  yield takeLatest(GET_TRENDING, fetchTrending);
  yield takeLatest(SEARCH_GIFS, fetchSearch);
}

export default mySaga;
