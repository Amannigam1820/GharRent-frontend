import React from "react";
import "./HomePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

const HomePage = () => {
  return (
    <div class="homePage">
      <div class="textContainer">
        <div class="wrapper">
          <h2 className="title">
          Unlock the door to your next home.
          </h2>
          <p className="desc">
            We envision a world where renting a home is a joyous, stress-free
            experience. At <strong>GharRent</strong>, we strive to create spaces
            that are not just functional, but also inspiring and comfortable. We
            are committed to enhancing your lifestyle with every stay.
          </p>
          <SearchBar/>
          <div class="boxes">
            <div class="box">
                <h2>10+</h2>
                <h5>Years of Experience</h5>
            </div>
            <div class="box">
                <h2>200</h2>
                <h5>Award Gained</h5>
            </div>
            <div class="box">
                <h2>1200+</h2>
                <h5>Property ready</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="imgContainer">
        <img src="bg.png" alt="background" />
      </div>
    </div>
  );
};

export default HomePage;
