import React from "react";
import { auth, fs } from "../Config/Config";

export const IndividualCartProduct = ({
  cartProduct,
  cartProductIncrease,
  cartProductDecrease,
}) => {
  const handleCartProductIncrease = () => {
    cartProductIncrease(cartProduct);
  };

  const handleCartProductDecrease = () => {
    cartProductDecrease(cartProduct);
  };

  const handleCartProductDelete = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart" + user.uid)
          .doc(cartProduct.ID)
          .delete()
          .then(() => {
            console.log("Successfully deleted");
          });
      }
    });
  };

  return (
    <div className="product">
      <div className="product-img">
        <img src={cartProduct.url} alt="product-img" />
      </div>
      <div className="product-text title">{cartProduct.title}</div>
      <div className="product-text description">{cartProduct.description}</div>
      <div className="product-text price">$ {cartProduct.price}</div>
      <span>Quantity</span>
      <div className="product-text quantity-box">
        <div className="action-btns plus" onClick={handleCartProductDecrease}>
          -
        </div>
        <div>{cartProduct.qty}</div>
        <div className="action-btns minus" onClick={handleCartProductIncrease}>
          +
        </div>
      </div>
      <div className="product-text cart-price">
        $ {cartProduct.TotalProductPrice}
      </div>
      <div
        className="btn btn-danger btn-md cart-btn"
        onClick={handleCartProductDelete}
      >
        DELETE
      </div>
    </div>
  );
};
