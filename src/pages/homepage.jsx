import React from "react";
import "../assets/styles/homepage.css";
import PillBadge from "../components/badge";
import Product from "../components/product";
import ProductBanner from "../components/productBanner";
import Searchbar from "../components/searchbar";

const Homepage = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="home_body">
      <div className="home_title">
        <div>
          <p className="user" onClick={logout}>
            Hi, Andrea
          </p>
          <p className="message">What are you looking for today?</p>
        </div>
        <div className="search">
          <Searchbar />
        </div>
      </div>
      <div className="home_content">
        <PillBadge />
        <ProductBanner />
        <div className="home_features_container">
          <p className="home_features">Featured Products</p>
          <p className="home_features_link">{`See All >>`}</p>
        </div>
        <div className="home_product">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
