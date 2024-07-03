import React from "react";
import "./Filter.scss";

const Filter = () => {
  return (
    <div class="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div class="top">
        <div class="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="city" placeholder="City" />
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <label htmlFor="Type">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div class="item">
          <label htmlFor="Property">Property</label>
          <select name="Property" id="Property">
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div class="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div class="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div class="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button>
          <img src="search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
