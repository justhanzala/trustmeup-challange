import productSlice from "./product/slice";
import siteSlice from "./site/slice";

export const reducers = {
  product: productSlice.reducer,
  site: siteSlice.reducer,
};
