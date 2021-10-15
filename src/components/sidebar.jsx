import React from "react";
import "../assets/styles/sidebar.css";
import Header from "./header";
import back from "../assets/images/vector.png";
import cart from "../assets/images/shopping-cart.png";
import x from "../assets/images/x.png";
import clock from "../assets/images/clock.png";
import headphone from "../assets/images/headphones.png";
import moreVertical from "../assets/images/more-vertical.png";
import star from "../assets/images/star-filled.png";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <Header
        link1="/"
        img1={back}
        alt1="Back"
        title="Search"
        link2="/cart"
        img2={cart}
        alt2="Cart"
      />
      <Link to="/explore">
        <div className="search_bar">
          <Searchbar />
        </div>
      </Link>
      <div className="lastest_container">
        <div className="lastest">
          <p className="lastest_title">Lastest search</p>
          <div className="lastest_list">
            <div className="lastest_list_container">
              <img className="lastest_list_icon1" src={clock} alt="clock" />
              <p className="lastest_list_text">TMA2 Wireless</p>
              <img className="lastest_list_icon2" src={x} alt="delete" />
            </div>
            <div className="lastest_list_container">
              <img className="lastest_list_icon1" src={clock} alt="clock" />
              <p className="lastest_list_text">TMA2 Wireless</p>
              <img className="lastest_list_icon2" src={x} alt="delete" />
            </div>
          </div>
        </div>
      </div>
      <div className="lastest_container">
        <div className="lastest">
          <p className="lastest_title">Popular product</p>
          <div className="lastest_list">
            <div className="popular_item">
              <img
                className="popular_item_img"
                src={headphone}
                alt="headphone"
              />
              <div className="popular_item_detail">
                <div className="popular_item_detail_text">
                  <p className="popular_item_detail_title">
                    TMA-2 Comfort Wireless
                  </p>
                  <p className="popular_item_detail_price">USD 270</p>
                </div>
                <div className="popular_item_detail_item">
                  <div className="popular_item_user_rating">
                    <div className="popular_item_rating">
                      <img
                        className="popular_item_rating_star"
                        src={star}
                        alt="star"
                      />
                      <p className="popular_item_rating_value">4.6</p>
                    </div>
                    <p className="popular_item_review">86 Reviews</p>
                  </div>
                  <img
                    className="popular_item_detail_more"
                    src={moreVertical}
                    alt="more"
                  />
                </div>
              </div>
            </div>
            <div className="popular_item">
              <img
                className="popular_item_img"
                src={headphone}
                alt="headphone"
              />
              <div className="popular_item_detail">
                <div className="popular_item_detail_text">
                  <p className="popular_item_detail_title">TMA-2 DJ</p>
                  <p className="popular_item_detail_price">USD 270</p>
                </div>
                <div className="popular_item_detail_item">
                  <div className="popular_item_user_rating">
                    <div className="popular_item_rating">
                      <img
                        className="popular_item_rating_star"
                        src={star}
                        alt="star"
                      />
                      <p className="popular_item_rating_value">4.6</p>
                    </div>
                    <p className="popular_item_review">86 Reviews</p>
                  </div>
                  <img
                    className="popular_item_detail_more"
                    src={moreVertical}
                    alt="more"
                  />
                </div>
              </div>
            </div>
            <div className="popular_item">
              <img
                className="popular_item_img"
                src={headphone}
                alt="headphone"
              />
              <div className="popular_item_detail">
                <div className="popular_item_detail_text">
                  <p className="popular_item_detail_title">
                    TMA-2 Move Wireless
                  </p>
                  <p className="popular_item_detail_price">USD 270</p>
                </div>
                <div className="popular_item_detail_item">
                  <div className="popular_item_user_rating">
                    <div className="popular_item_rating">
                      <img
                        className="popular_item_rating_star"
                        src={star}
                        alt="star"
                      />
                      <p className="popular_item_rating_value">4.6</p>
                    </div>
                    <p className="popular_item_review">86 Reviews</p>
                  </div>
                  <img
                    className="popular_item_detail_more"
                    src={moreVertical}
                    alt="more"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
