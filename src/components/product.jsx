import React from "react";
import headphone from "../assets/images/headphone.png";
import cable from "../assets/images/cable.png";

import "../assets/styles/product.css";

const Product = () => {
  const data = [
    { image: headphone, title: "TMA-1 HD Wireless", price: "USD 350" },
    { image: cable, title: "C01 - Cable", price: "USD 25" },
    { image: headphone, title: "TMA-2 HD Wireless", price: "USD 450" },
    { image: cable, title: "C02 - Cable", price: "USD 35" },
    { image: headphone, title: "TMA-3 HD Wireless", price: "USD 550" },
    { image: cable, title: "C03 - Cable", price: "USD 45" },
    { image: headphone, title: "TMA-4 HD Wireless", price: "USD 650" },
    { image: cable, title: "C04 - Cable", price: "USD 55" },
    { image: headphone, title: "TMA-5 HD Wireless", price: "USD 750" },
    { image: cable, title: "C05 - Cable", price: "USD 65" },
    { image: headphone, title: "TMA-6 HD Wireless", price: "USD 850" },
    { image: cable, title: "C06 - Cable", price: "USD 75" },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="product_container">
            <div className="product_image">
              <img src={item.image} alt="" />
            </div>
            <div className="product_title">
              <p className="product_title_name">{item.title}</p>
              <p className="product_title_price">{item.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
