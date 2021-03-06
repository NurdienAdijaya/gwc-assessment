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
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Header
        link1="/sidebar"
        img1={menu}
        alt1="Menu"
        imgTitle={logo}
        altTitle="Logo"
        title=" Audio"
        g
        link2="/profile"
        img2={avatar}
        alt2="User Avatar"
      />
      <div className="home_title">
        <div>
          <p className="user">Hi, Nurdien</p>
          <p className="message">What are you looking for today?</p>
        </div>
        <Link to="/explore">
          <div className="search">
            <Searchbar />
          </div>
        </Link>
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
    </>
  );
};

export default Homepage;
