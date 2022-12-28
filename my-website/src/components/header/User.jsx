import React, { useState } from "react";
import { BiPhotoAlbum } from "react-icons/bi";
import { BiSliderAlt } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };
  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="/account">
                  <div className="image">
                    <div className="img">
                      <img
                        src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h4>Anh Dev</h4>
                      <label>Los Angeles, CA</label>
                    </div>
                  </div>
                </Link>
                <Link to="/create">
                  <button className="box">
                    <BiPhotoAlbum className="icon" />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to="/login">
                  <button className="box">
                    <BiSliderAlt className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className="box">
                  <BiCartAlt className="icon" />
                  <h4>My Order</h4>
                </button>
                <button className="box">
                  <BiHeart className="icon" />
                  <h4>Wishlist</h4>
                </button>
                <button className="box">
                  <BiQuestionMark className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box">
                  <BiLogOut className="icon" />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
};
