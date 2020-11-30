import React from "react";
import PropTypes from "prop-types";
import "./FollowUserListItem.css";

import bell from "../img/bell.png";

export default function FollowUserListItem({ user }) {
  return (
    <div className="follow-user">
      <img src={user.avatarUrl} />
      <div className="user-name">
        <b>{user.name}</b>
        <p>Recommend for you</p>
      </div>
      <a href="#">Follow</a>
    </div>
  );
}

FollowUserListItem.propTypes = {
  user: PropTypes.string,
  avatarUrl: PropTypes.string
};
