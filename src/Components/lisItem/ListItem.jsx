/** @format */

import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { imgBg } from "./Assets/img";
import "./ListItem.scss";

export const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { img } = imgBg;
  return (
    <div
      className="listItem "
      style={{ left: isHovered && index * 225 - 50 }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="" className="listItemImg" />
      <div className="infoIcons">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc"></div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};
