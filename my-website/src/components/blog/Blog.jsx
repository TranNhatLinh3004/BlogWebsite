import React from "react";
import { blog } from "../../assets/data/data";
import "./blog.css";
import { Link } from "react-router-dom";
import {
  BiBookmarkAlt,
  BiShareAlt,
  BiTime,
  BiMessageDetail,
} from "react-icons/bi";
function Blog(props) {
  return (
    <>
      <section className="blog">
        <h1 className="heading">Featured blogs</h1>
        <div className="container grid3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <BiBookmarkAlt className="icon" />
                  <a href="/">#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <BiTime className="icon" />{" "}
                  <label htmlFor="">{item.date}</label>
                  <BiMessageDetail className="icon" />{" "}
                  <label htmlFor="">27</label>
                  <BiShareAlt className="icon" />{" "}
                  <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
