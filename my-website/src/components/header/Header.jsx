import React from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import { Link } from "react-router-dom";
import { nav } from "../../assets/data/data";
import { User } from "./User";

function Header() {
  return (
    <>
      <header>
        <div className="scontainer flex">
          <div className="logo">
            <img src={logo} alt="Logo" width={100} />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
