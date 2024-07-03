import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";

const SinglePage = () => {
  return (
    <div class="singlePage">
      <div class="details">
        <div class="wrapper">
          <Slider images={singlePostData.images} />
          <div class="info">
            <div class="top">
              <div class="post">
                <h1>{singlePostData.title}</h1>
                <div class="address">
                  <img src="pin.png" />
                  <span>{singlePostData.address}</span>
                </div>
                <div class="price">${singlePostData.price}</div>
              </div>
              <div class="user">
                <img src={userData.img} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div class="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div class="features">
        <div class="wrapper"></div>
      </div>
    </div>
  );
};

export default SinglePage;
