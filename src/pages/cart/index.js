import * as React from "react";
import { Link } from "gatsby";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import slice from "../../redux/product/slice";
import siteSlice from "../../redux/site/slice";
import Toast from "../../components/Toast";
import { getCartTotalPrice } from "../../utils/cart";

const Cart = () => {
  const { cartData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id, name) => {
    const updatedProducts = cartData.filter((item) => item.id !== id);

    dispatch(slice.actions.setCartData(updatedProducts));
    dispatch(
      siteSlice.actions.setMessageData(`Removed ${name} product from cart!`)
    );
  };

  const handleIncreaseQuantity = (id, quantity) => {
    let updatedCartData = JSON.parse(JSON.stringify(cartData));
    const objIndex = updatedCartData.findIndex((itme) => itme.id === id);

    updatedCartData[objIndex].quantity = quantity + 1;
    dispatch(slice.actions.setCartData([...updatedCartData]));
  };

  const handleDecreaseQuantity = (id, quantity) => {
    let updatedCartData = JSON.parse(JSON.stringify(cartData));
    const objIndex = updatedCartData.findIndex((itme) => itme.id === id);

    if (updatedCartData[objIndex].quantity === 1) {
      const updatedProducts = cartData.filter((item) => item.id !== id);

      dispatch(slice.actions.setCartData(updatedProducts));
    } else {
      updatedCartData[objIndex].quantity = quantity - 1;
      dispatch(slice.actions.setCartData([...updatedCartData]));
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="pt-4 mt-5">
        <div className="container">
          <div className="mb-5 position-relative">
            <Link to="/" className="fs-3 text-black position-absolute start-0">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <h1 className="text-black fw-bold text-center">Shopping cart</h1>
          </div>
          <div className="col-lg-8 d-block m-auto">
            {cartData.length === 0 ? (
              <p className="font-roboto fw-bold text-center">
                No products added!
              </p>
            ) : (
              cartData.map((item, index) => (
                <div
                  className="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center"
                  key={index}
                >
                  <div className="d-flex align-items-center w-100">
                    <img
                      src={item.image || "/images/pic-1.png"}
                      alt="alternative"
                      className="product-image me-3"
                    />
                    <h1 className="text-black product-name mb-0 fs-5 w-100">
                      {item.name}
                    </h1>
                  </div>
                  <div className="d-flex align-items-center w-100 justify-content-between pt-3">
                    <div className="d-flex w-50 justify-content-between">
                      <button
                        className="btn fs-5 text-blue"
                        onClick={() => handleDeleteProduct(item.id, item.name)}
                      >
                        <i className="fa-solid fa-trash fs-5"></i>
                      </button>

                      <div className="d-flex align-items-center">
                        <button
                          className="btn fs-4 text-blue"
                          onClick={() =>
                            handleDecreaseQuantity(item.id, item.quantity)
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>

                        <span className="mx-3">{item.quantity}</span>
                        <button
                          className="btn fs-4 text-blue"
                          onClick={() =>
                            handleIncreaseQuantity(item.id, item.quantity)
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <h1 className="text-black fs-5 m-0">
                      {item.price || "10.20"}€
                    </h1>
                  </div>
                </div>
              ))
            )}
            <hr className="text-black my-4" />
            <div className="pt-3 mb-5 d-flex justify-content-between align-items-center">
              <h1 className="text-black fs-2 fw-bold">
                Subtotal {`(${cartData.length} item)`}
              </h1>
              <h1 className="text-black fs-2 fw-bold">
                {getCartTotalPrice(cartData)}€
              </h1>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn checkout-btn font-roboto text-white fw-bold mx-auto">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toast />
    </React.Fragment>
  );
};

export default Cart;
