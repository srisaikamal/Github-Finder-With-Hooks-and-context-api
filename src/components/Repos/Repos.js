import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = ({ repos }) => {
  if (typeof repos === "undefined") {
    return <h3>Loading...</h3>;
  } else {
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  }
};
Repos.prototype = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
