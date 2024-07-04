import { useState } from "react";
import "./searchBar.scss";

const types = ["rent", "buy"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "Rent",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Loaction" />
        <input
          type="number"
          name="minPrice"
          min={1000}
          max={1000000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={1000}
          max={1000000000}
          placeholder="Max Price"
        />
          <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
