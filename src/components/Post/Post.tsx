import React from "react";
import "./Post.scss";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface PostProps {
  profilePic: string;
  username: string;
  timestamp: number;
  message: string;
  image?: string;
}

const Post: React.FC<PostProps> = ({
  profilePic,
  username,
  timestamp,
  message,
  image,
}) => {
  const formatDate = (timestamp: number) => {
    const date = new Date();
    date.setTime(timestamp * 1000);
    return date.toLocaleString(undefined, {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />

        <div className="post__info">
          <h3>{username}</h3>
          <p>{formatDate(timestamp)}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
