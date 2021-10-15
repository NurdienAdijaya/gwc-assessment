import React from "react";
import { Link } from "react-router-dom";
import headphone from "../assets/images/headphones.png";
import moreVertical from "../assets/images/more-vertical.png";
import star from "../assets/images/star-filled.png";
import "../assets/styles/exploreCard.css";

const ExploreCard = () => {
  const data = [
    { id: 1, image: headphone, title: "TMA-1 HD Wireless", price: "USD 350" },
    { id: 2, image: headphone, title: "TMA-2 HD Wireless", price: "USD 450" },
    { id: 3, image: headphone, title: "TMA-3 HD Wireless", price: "USD 550" },
    { id: 4, image: headphone, title: "TMA-4 HD Wireless", price: "USD 650" },
    { id: 5, image: headphone, title: "TMA-5 HD Wireless", price: "USD 750" },
    { id: 6, image: headphone, title: "TMA-6 HD Wireless", price: "USD 850" },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <Link to="/detail" key={index}>
            <div className="explore_container">
              <div className="explore_image">
                <img src={item.image} alt="img" />
              </div>
              <div className="explore_detail">
                <div className="explore_title">
                  <p className="explore_title_name">{item.title}</p>
                  <p className="explore_title_price">{item.price}</p>
                </div>
                <div className="explore_bottom">
                  <div className="explore_bottom_user_review">
                    <div className="explore_bottom_rating">
                      <img
                        className="explore_bottom_star"
                        src={star}
                        alt="star"
                      />
                      <div className="explore_bottom_value">4.6</div>
                    </div>
                    <p className="explore_bottom_review_total">86 Reviews</p>
                  </div>
                  <img
                    className="explore_bottom_more"
                    src={moreVertical}
                    alt="more"
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ExploreCard;
