/** @format */

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import "./List.scss";
import { ListItem } from "../lisItem/ListItem";
// import { imgBg } from "../lisItem/Assets/img";

const List = () => {
  const listRef = useRef();
  let [sliderNumber, setSliderNumber] = useState(0);
  let [isTranslate, setTranslate] = useState(false);

  const handleClick = (paramet) => {
    setTranslate(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (paramet === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${225 + distance}px)`;
    }
    if (paramet === "right" && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-225 + distance}px)`;
    }
    console.log("ex=", distance);
  };

  return (
    <div className="list">
      <span className="listTtile">Continue to watch</span>
      <div className="wrapper">
        <div>
          {" "}
          <ArrowBackIosOutlined
            className="slideArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isTranslate && `none` }}
          />
        </div>
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <div>
          {" "}
          <ArrowForwardIosOutlined
            className="slideArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
