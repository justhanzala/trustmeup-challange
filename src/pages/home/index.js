import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/site/actions";
import { getProduct } from "../../redux/product/actions";
import slice from "../../redux/product/slice";
import siteSlice from "../../redux/site/slice";
import Toast from "../../components/Toast";

const Home = () => {
  const [cardHoverId, setCardHoverId] = React.useState("");
  const [productToShow, setProductToShow] = React.useState(4);
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.site);
  const { productsData } = useSelector((state) => state.product);
  const { cartData } = useSelector((state) => state.product);
  const authCrediantals = {
    client_id: "HxLhaDeEbq764VpQ",
    password: "HxLhaDeEbq764VpQ",
  };

  React.useEffect(() => {
    if (token) {
      dispatch(getProduct(token));
    } else {
      dispatch(getToken(authCrediantals));
    }
    // eslint-disable-next-line
  }, [token, authCrediantals]);

  const handleAddCartData = (id) => {
    let addedProduct = JSON.parse(
      JSON.stringify(productsData.find((item) => item.id === id))
    );
    let updatedCartData = JSON.parse(JSON.stringify(cartData));
    const objIndex = updatedCartData.findIndex((item) => item.id === id);

    if (objIndex !== -1) {
      let quantity = updatedCartData[objIndex].quantity;
      updatedCartData[objIndex].quantity = quantity + 1;
      dispatch(slice.actions.setCartData(updatedCartData));
    } else {
      addedProduct["quantity"] = 1;
      dispatch(slice.actions.setCartData([...cartData, addedProduct]));
    }

    dispatch(siteSlice.actions.setMessageData("Added product in cart!"));
  };

  return (
    <div className="container">
      <div className="mb-4 text-center">
        <h1 className="text-black fw-bold">Store</h1>
        <p className="font-roboto fw-bold">Choose your product</p>
      </div>
      {loading ? (
        <div
          className="spinner-border text-center"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <div className="row">
            {productsData.slice(0, productToShow).map((item) => (
              <div
                className="col-lg-3 col-6 mb-4"
                onMouseEnter={(e) => setCardHoverId(item.id)}
                onKeyDown={(e) => setCardHoverId(item.id)}
                onMouseLeave={(e) => setCardHoverId("")}
                key={item.id}
              >
                <div className="card p-0 shadow border-0">
                  <div className="position-relative">
                    <div
                      className={`card-img-top w-100 ${
                        cardHoverId === item.id ? "card-focus" : ""
                      }`}
                      style={{
                        background: `url(${
                          item.image || "/images/pic-1.png"
                        }) no-repeat center center/cover`,
                      }}
                    ></div>
                    {cardHoverId === item.id ? (
                      <span
                        className="position-absolute end-0 bottom-0 me-3 mb-3"
                        onClick={() =>
                          handleAddCartData(item.id, item.quantity)
                        }
                        style={{
                          filter: "brightness(100%)",
                        }}
                      >
                        <i className="fa-solid fa-plus plus-btn text-white p-1 rounded"></i>
                      </span>
                    ) : null}
                  </div>
                  <div className="card-body d-flex justify-content-between">
                    <h5
                      className="card-title"
                      style={{
                        maxWidth: "160px",
                      }}
                    >
                      {item.name}
                    </h5>
                    <p className="card-text text-blue">
                      {item.price || "10.20"} €
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-4 text-center">
            <button
              className="btn view-more-btn fw-bold border border-dark font-roboto"
              onClick={() => {
                if (productToShow === Infinity) {
                  setProductToShow(4);
                } else {
                  setProductToShow(Infinity);
                }
              }}
            >
              {productToShow === Infinity ? "VIEW LESS" : "VIEW MORE"}
            </button>
          </div>
        </>
      )}
      <Toast />
    </div>
  );
};

export default Home;
