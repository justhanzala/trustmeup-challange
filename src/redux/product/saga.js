import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import { getProduct as getProductsAction } from "./actions";
import slice from "./slice";
import siteSlice from "../site/slice";

const productUrl =
  "https://platform.sandbox.trustmeup.com/api/e-merchant/v1.1/merchants/offers/";

export function* getProducts(action) {
  try {
    const { data } = yield call(axios.get, productUrl, {
      headers: {
        Accept: "application/json",
        Authorization: "Token " + action.payload,
      },
    });

    yield put(slice.actions.setProductsData(data.results));
    yield put(siteSlice.actions.setLoadingData(false));
  } catch (e) {
    console.log(e);
  }
}

export default function* users() {
  yield takeLatest(getProductsAction.type, getProducts);
}
