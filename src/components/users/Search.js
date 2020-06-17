import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  state = {
    search: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.search.trim()) {
      this.props.setAlert("Please enter something", "danger");
    } else {
      this.props.searchUsers(this.state.search);
      this.setState({ search: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>

        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            {" "}
            Clear{" "}
          </button>
        )}
      </div>
    );
  }
}

export default Search;
