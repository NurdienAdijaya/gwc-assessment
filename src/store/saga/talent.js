import axios from "axios";
import {
  // API_KEY,
  BASE_URL,
} from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getTalents(actions) {
  const { error, page, genre } = actions;
  const genres = genre ? `&genres=${genre}` : "";
  try {
    const res = yield axios.get(
      `${BASE_URL}/games?key=
      &page=${page}${genres}`
    );
    yield put({
      type: types.GET_TALENT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_TALENT_FAIL,
      error: error,
    });
  }
}

export function* watchGetTalents() {
  yield takeEvery(types.GET_TALENT_BEGIN, getTalents);
}
