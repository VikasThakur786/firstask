import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarlist">
        <li className="user-detail">
          <div>
            <img
              className="backgroundimage"
              src={`${process.env.PUBLIC_URL}/assets/images/slide-bg.jpg`}
              alt=""
            />
          </div>
          <img
            className="avatar"
            src={`${process.env.PUBLIC_URL}/assets/images/man.png`}
            alt=""
          />
          <div className="guy-name">Sean Stevenson</div>
          <div className="guy-email">stevenson@gmail.com</div>
          <div class="social">
            <a href="https://www.facebook.com" target="blank">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="https://www.reddit.com" target="blank">
              <RedditIcon fontSize="small" />
            </a>
            <a href="https://www.twitter.com" target="blank">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="https://plus.google.com" target="blank">
              <InstagramIcon fontSize="small" />
            </a>
          </div>
        </li>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="item"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
