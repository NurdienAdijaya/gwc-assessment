import React from "react";
import "../assets/styles/productBanner.css";
import arrow from "../assets/images/arrow-right.png";
import { Link } from "react-router-dom";

const ProductBanner = () => {
  const name = [
    "TMA-1",
    "TMA-2",
    "TMA-3",
    "TMA-4",
    "TMA-5",
    "TMA-6",
    "TMA-7",
    "TMA-8",
  ];
  return (
    <div className="product_banner_body">
      {name.map((item, index) => {
        return (
          <Link to="/detail" key={index}>
            <div className="product_banner">
              <div className="product_banner_title_container">
                <h3 className="product_banner_title">
                  {item} Modular Headphone
                </h3>
                <div className="product_banner_arrow">
                  <p> Shop now</p>
                  <img c src={arrow} alt="headphone" />
                </div>
              </div>

              <div className="product_banner_image"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductBanner;
