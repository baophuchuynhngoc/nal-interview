import axios from "axios";
import React, { useState } from "react";
import debounce from "lodash/debounce";
import Loading from "@components/Loading";

const SearchBar = ({ setData }) => {
  const [showLoading, setShowLoading] = useState(false);
  const resSearch = async (e) => {
    try {
      const { value } = e.target;
      setShowLoading(true);
      const res = await axios.get(
        `${process.env.API_URL}/blogs?title=${value}`
      );
      setData(res.data || []);
      setShowLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {showLoading && <Loading />}
      <nav className="navbar navbar-light search-bar">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={debounce(resSearch, 500)}
          />
        </form>
      </nav>
    </div>
  );
};

export default SearchBar;
