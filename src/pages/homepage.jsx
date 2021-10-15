import React from "react";
import "../assets/styles/homepage.css";
import PillBadge from "../components/badge";
import Header from "../components/header";
import Product from "../components/product";
import ProductBanner from "../components/productBanner";
import Searchbar from "../components/searchbar";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import menu from "../assets/images/menu.png";

const Homepage = () => {
  return (
    <div className="home_body">
      <Header
        link1="/sidebar"
        img1={menu}
        alt1="Menu"
        imgTitle={logo}
        altTitle="Logo"
        title=" Audio"
        link2="/profile"
        img2={avatar}
        alt2="User Avatar"
      />
      <div className="home_title">
        <div>
          <p className="user">Hi, Nurdien</p>
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
