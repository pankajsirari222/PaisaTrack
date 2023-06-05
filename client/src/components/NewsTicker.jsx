import React from "react";
import "../App.css";

import { AiOutlineApple } from "react-icons/ai";
import { TfiMicrosoft } from "react-icons/tfi";
import { AiFillGoogleCircle } from "react-icons/ai";

const NewsTicker = () => {
  return (
    <div className="news-container">
      <div className="title">Breaking News</div>

      <ul>
        <li>
          <AiOutlineApple style={{ width: "30px", height: "30px" }} />
          <div>Apple Inc.</div>
          <div>Price: 150.25</div>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/50/40C057/up-squared.png"
            alt="up-squared"
          />
          <div className="posChange"> 35.25</div>
        </li>
        <li>
          <TfiMicrosoft style={{ width: "30px", height: "30px" }} />
          <div>Microsoft Corporation</div>
          <div>Price: 300.00</div>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/50/FA5252/down-squared--v1.png"
            alt="down-squared--v1"
          />
          <div className="negChange">-16.63</div>
        </li>
        <li>
          <AiFillGoogleCircle style={{ width: "30px", height: "30px" }} />
          <div>Alphabet Inc.</div>
          <div>Price: 158.00</div>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/50/40C057/up-squared.png"
            alt="up-squared"
          />
          <div className="posChange"> 12.03</div>
        </li>
      </ul>
    </div>
  );
};

export default NewsTicker;
