export const getCartTotalPrice = (cartData) => {
  let sum = 0;

  cartData.length > 0 &&
    cartData.forEach((item) => {
      return (sum = (
        parseFloat(sum) + parseFloat(item.price)
      ).toFixed(2));
    });

  return sum;
};
