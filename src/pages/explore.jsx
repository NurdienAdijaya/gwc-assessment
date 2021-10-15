import React from "react";
import "../assets/styles/explore.css";
import cart from "../assets/images/shopping-cart.png";
import back from "../assets/images/vector.png";
import sliders from "../assets/images/sliders.png";
import Header from "../components/header";
import ExploreCard from "../components/exploreCard";
const Explore = () => {
  return (
    <div>
      <Header
        link1="/"
        img1={back}
        alt1="Back"
        link2="/cart"
        img2={cart}
        alt2="Cart"
      />
      <div className="explore_title_container">
        <p className="explore_title_category">Headphone</p>
        <p className="explore_title_text">TMA Wireless</p>
      </div>
      <div className="explore_filter_container">
        <div className="explore_filter_item_container">
          <img className="explore_filter_item_img" src={sliders} alt="filter" />
          <p className="explore_filter_item_text">Filter</p>
        </div>
        <div className="explore_filter_text_container">
          <p className="explore_filter_text_filter">Popularity</p>
          <p className="explore_filter_text_filter">Newest</p>
          <p className="explore_filter_text_filter">Most Expensive</p>
          <p className="explore_filter_text_filter">Most Cheapest</p>
        </div>
      </div>
      <div className="explore_item_container">
        <ExploreCard />
      </div>
    </div>
  );
};

export default Explore;
