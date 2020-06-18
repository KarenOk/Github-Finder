import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, setAlert, showClear }) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) setAlert("Please enter something", "danger");
    else {
      searchUsers(search);
      setSearch("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          {" "}
          Clear{" "}
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
