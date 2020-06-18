import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

class User extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    const { loading, repos, user } = this.props;
    if (loading || !user) return <Spinner />;
    return (
      <div>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{" "}
        {user.hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="round-img"
              style={{ width: "200px" }}
            />
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
          </div>

          <div>
            {user.bio && (
              <React.Fragment>
                <h3> Bio</h3>
                <p> {user.bio}</p>
              </React.Fragment>
            )}
            <a href={user.html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>

            <ul>
              <li>
                <strong> Username: </strong> {user.login}
              </li>

              {user.company && (
                <li>
                  <strong> Company: </strong> {user.company}
                </li>
              )}

              {user.blog && (
                <li>
                  <strong> Website: </strong>{" "}
                  <a href={user.blog}> {user.blog}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Following: {user.following}</div>
          <div className="badge badge-dark"> Followers: {user.followers} </div>
          <div className="badge badge-success">
            Public Repos: {user.public_repos}
          </div>
          <div className="badge badge-light">
            Public Gists: {user.public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    );
  }
}
export default User;
