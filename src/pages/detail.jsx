import React, { useState } from "react";
import "../assets/styles/detail.css";
import cart from "../assets/images/shopping-cart.png";
import back from "../assets/images/vector.png";
import { Link } from "react-router-dom";
import detail1 from "../assets/images/detail1.png";
import avatar from "../assets/images/avatar.png";
import rating from "../assets/images/rating.png";
import Product from "../components/product";

const Detail = () => {
  const navigation = ["Overview", "Features", "Specification"];

  const [active, setActive] = useState("Overview");
  return (
    <div className="detail_body">
      <div className="detail_header">
        <Link to="/">
          <img src={back} alt="Back" />
        </Link>
        <img src={cart} alt="Cart" />
      </div>
      <div className="detail_title">
        <p className="detail_title_price">USD 350</p>
        <p className="detail_title_text">TMA-2 HD WIRELESS</p>
      </div>
      <div className="detail_navigation">
        {navigation.map((item, index) => {
          return (
            <div
              className="detail_navigation_list"
              onClick={() => {
                setActive(item);
              }}
              key={index}
            >
              <p className="detail_navigation_title">{item}</p>
              <div></div>
              <div
                className="detail_navigation_line"
                style={{
                  backgroundColor: active === item ? "#0ACF83" : null,
                  border: active === item ? "solid 1px #0ACF83 " : null,
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="detail_img">
        <img className="detail_img_list" src={detail1} alt="img" />
        <img className="detail_img_list" src={detail1} alt="img" />
        <img className="detail_img_list" src={detail1} alt="img" />
      </div>
      <p className="detail_review">Review (102)</p>
      <div className="detail_review_container">
        <div className="detail_review_content">
          <div className="detail_review_content_upper">
            <img
              className="detail_review_content_upper_photo"
              src={avatar}
              alt="img"
            />
            <div className="detail_review_content_upper_detail">
              <div className="detail_review_content_upper_text">
                <p className="detail_review_content_upper_title">Madelina</p>
                <p className="detail_review_content_upper_time">1 Month ago</p>
              </div>
              <img
                className="detail_review_content_upper_rating"
                src={rating}
                alt="img"
              />
            </div>
          </div>
          <p className="detail_review_content_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="detail_review_content">
          <div className="detail_review_content_upper">
            <img
              className="detail_review_content_upper_photo"
              src={avatar}
              alt="img"
            />
            <div className="detail_review_content_upper_detail">
              <div className="detail_review_content_upper_text">
                <p className="detail_review_content_upper_title">Madelina</p>
                <p className="detail_review_content_upper_time">1 Month ago</p>
              </div>
              <img
                className="detail_review_content_upper_rating"
                src={rating}
                alt="img"
              />
            </div>
          </div>
          <p className="detail_review_content_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="detail_review_content">
          <div className="detail_review_content_upper">
            <img
              className="detail_review_content_upper_photo"
              src={avatar}
              alt="img"
            />
            <div className="detail_review_content_upper_detail">
              <div className="detail_review_content_upper_text">
                <p className="detail_review_content_upper_title">Madelina</p>
                <p className="detail_review_content_upper_time">1 Month ago</p>
              </div>
              <img
                className="detail_review_content_upper_rating"
                src={rating}
                alt="img"
              />
            </div>
          </div>
          <p className="detail_review_content_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <p className="detail_allreview">See All Reviews</p>
      <div className="detail_suggest">
        <div className="home_features_container">
          <p className="home_features">Another Product</p>
          <p className="home_features_link">{`See All >>`}</p>
        </div>
        <div className="home_product">
          <Product />
        </div>
      </div>
      <div className="detail_cart_container">
        <div className="detail_cart_button">
          <p className="detail_cart_button_text">Add To Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
