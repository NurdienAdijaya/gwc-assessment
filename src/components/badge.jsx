import React, { useState } from "react";
import "../assets/styles/badge.css";

const PillBadge = () => {
  const category = [
    "Headphone",
    "Headband",
    "Earpads",
    "Wireless",
    "Headset",
    "Earphone",
    "Handsfree",
    "Earbuds",
  ];
  const [
    active,
    // setActive
  ] = useState("Headphone");
  //   const handleActive = (e) => setActive(e);
  return (
    <div className="badge_body">
      {category.map((item, index) => {
        return (
          <div
            style={{
              backgroundColor: active === item ? "#0ACF83" : null,
            }}
            className="badge_pill"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default PillBadge;
