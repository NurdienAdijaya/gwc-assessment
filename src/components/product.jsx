import React from "react";
import headphone from "../assets/images/headphone.png";
import cable from "../assets/images/cable.png";
import { Link } from "react-router-dom";
import "../assets/styles/product.css";

const Product = () => {
  const data = [
    { id: 1, image: headphone, title: "TMA-1 HD Wireless", price: "USD 350" },
    { id: 2, image: cable, title: "C01 - Cable", price: "USD 25" },
    { id: 3, image: headphone, title: "TMA-2 HD Wireless", price: "USD 450" },
    { id: 4, image: cable, title: "C02 - Cable", price: "USD 35" },
    { id: 5, image: headphone, title: "TMA-3 HD Wireless", price: "USD 550" },
    { id: 6, image: cable, title: "C03 - Cable", price: "USD 45" },
    { id: 7, image: headphone, title: "TMA-4 HD Wireless", price: "USD 650" },
    { id: 8, image: cable, title: "C04 - Cable", price: "USD 55" },
    { id: 9, image: headphone, title: "TMA-5 HD Wireless", price: "USD 750" },
    { id: 10, image: cable, title: "C05 - Cable", price: "USD 65" },
    { id: 11, image: headphone, title: "TMA-6 HD Wireless", price: "USD 850" },
    { id: 12, image: cable, title: "C06 - Cable", price: "USD 75" },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <Link to="/detail" key={index}>
            <div className="product_container">
              <div className="product_image">
                <img src={item.image} alt="img" />
              </div>
              <div className="product_title">
                <p className="product_title_name">{item.title}</p>
                <p className="product_title_price">{item.price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Product;
