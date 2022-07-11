import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import { getToken as getTokenAction } from "./actions";
import slice from "./slice";

const authUrl =
  "https://platform.sandbox.trustmeup.com/api/e-merchant/v1.1/auth/login/";

export function* getToken(action) {
  try {
    const { data } = yield call(axios.post, authUrl, action.payload);

    yield put(slice.actions.setTokenData(data.token));
    yield put(slice.actions.setLoadingData(true));
  } catch (e) {
    console.log(e);
  }
}

export default function* users() {
  yield takeLatest(getTokenAction.type, getToken);
}
