import React from "react";
import x from "../assets/images/x.png";
import "../assets/styles/filter.css";
import PillBadge from "./badge";

const Filter = () => {
  return (
    <>
      <div className="filter_header">
        <p className="filter_title">Filter</p>
        <img className="filter_close" src={x} alt="close" />
      </div>
      <div className="filter_category">
        <p className="filter_category_text">Category</p>
        <PillBadge />
      </div>
    </>
  );
};

export default Filter;
