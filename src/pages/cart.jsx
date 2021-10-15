import React from "react";
import back from "../assets/images/vector.png";
import "../assets/styles/cart.css";
import headphone from "../assets/images/headphones.png";
import trash from "../assets/images/trash-2.png";
import trash1 from "../assets/images/trash-1.png";

import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import cable from "../assets/images/cable.png";
import chevronRight from "../assets/images/chevron-right.png";
import Header from "../components/header";

const Cart = () => {
  return (
    <div>
      <Header
        link1="/"
        img1={back}
        alt1="Back"
        title="Shopping Cart"
        link2="/cart"
        img2={trash1}
        alt2="Clear All"
      />
      <div className="cart_list">
        <div className="cart_item">
          <img className="cart_img" src={headphone} alt="img" />
          <div className="cart_detail">
            <div className="cart_detail_top">
              <p className="cart_detail_title">TMA-2 Comfort Wireless </p>
              <p className="cart_detail_price">USD 270</p>
            </div>
            <div className="cart_detail_bottom">
              <div className="cart_detail_item">
                <img className="cart_detail_item_min" src={minus} alt="minus" />
                <p className="cart_detail_item_number">1</p>
                <img className="cart_detail_item_plus" src={plus} alt="plus" />
              </div>
              <img className="cart_detail_trash" src={trash} alt="delete" />
            </div>
          </div>
        </div>
        <div className="cart_item">
          <img className="cart_img" src={cable} alt="img" />
          <div className="cart_detail">
            <div className="cart_detail_top">
              <p className="cart_detail_title">C02 - Cable</p>
              <p className="cart_detail_price">USD 25</p>
            </div>
            <div className="cart_detail_bottom">
              <div className="cart_detail_item">
                <img className="cart_detail_item_min" src={minus} alt="minus" />
                <p className="cart_detail_item_number">1</p>
                <img className="cart_detail_item_plus" src={plus} alt="plus" />
              </div>
              <img className="cart_detail_trash" src={trash} alt="delete" />
            </div>
          </div>
        </div>
      </div>
      <div className="cart_total_item">
        <p className="cart_total_item_text">Total 2 Items</p>
        <p className="cart_total_item_price">USD 295</p>
      </div>
      <div className="cart_checkout_container">
        <div className="cart_checkout_button">
          <p className="cart_checkout_title">Proceed to Checkout</p>
          <img className="cart_checkout_icon" src={chevronRight} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
