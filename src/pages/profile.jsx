import React from "react";
import Header from "../components/header";
import back from "../assets/images/vector.png";
import "../assets/styles/profile.css";
import avatar from "../assets/images/avatarBig.png";

const Profile = () => {
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <div>
      <Header link1="/" img1={back} alt1="Back" title="Profile" />
      <div className="profile_user">
        <img className="profile_user_img" src={avatar} alt="Avatar" />
        <div className="profile_user_info">
          <p className="profile_user_name">Nurdien Adijaya</p>
          <p className="profile_user_email">adijaya@gmail.com</p>
        </div>
      </div>
      <div className="profile_section">
        <div className="profile_section_container">
          <p className="profile_section_title">General</p>
        </div>
        <div className="profile_detail_container">
          <p className="profile_detail_title">Edit Profile</p>
        </div>
        <div className="profile_detail_container">
          <p className="profile_detail_title">Notifications</p>
        </div>
        <div className="profile_detail_container_last">
          <p className="profile_detail_title">Wishlist</p>
        </div>
      </div>
      <div className="profile_section">
        <div className="profile_section_container">
          <p className="profile_section_title">Legal</p>
        </div>
        <div className="profile_detail_container">
          <p className="profile_detail_title">Terms of Use</p>
        </div>
        <div className="profile_detail_container_last">
          <p className="profile_detail_title">Privacy Policy</p>
        </div>
      </div>
      <div className="profile_section">
        <div className="profile_section_container">
          <p className="profile_section_title">Personal</p>
        </div>
        <div className="profile_detail_container">
          <p className="profile_detail_title">Report a Bug</p>
        </div>
        <div className="profile_detail_container_last">
          <p className="profile_detail_title" onClick={logout}>
            Logout
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Profile;
