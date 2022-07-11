import { all, fork } from "redux-saga/effects";
import product from "./product/saga";
import getToken from "./site/saga";

export default function* rootSaga() {
  yield all([fork(product), fork(getToken)]);
}
