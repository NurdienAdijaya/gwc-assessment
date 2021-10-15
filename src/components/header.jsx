import React from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import "../assets/styles/cart.css";

const Header = ({ ...props }) => {
  const { link1, img1, alt1, imgTitle, altTitle, title, link2, img2, alt2 } =
    props;
  return (
    <div className="header_div">
      <div className="detail_header">
        <Link to={link1}>
          <img src={img1} alt={alt1} />
        </Link>
        <p className="cart_title">
          <img style={{ height: "inherit" }} src={imgTitle} alt={altTitle} />
          {title}
        </p>
        <Link to={link2}>
          <img src={img2} alt={alt2} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
