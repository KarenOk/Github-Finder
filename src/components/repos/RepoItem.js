import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}> {repo.name}</a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
