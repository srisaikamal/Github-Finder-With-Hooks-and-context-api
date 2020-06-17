import React from "react";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div>
      <h1>
        I think you've lost. Goto{" "}
        <Link to="/">
          {" "}
          <strong>HOMEPAGE</strong>
        </Link>
      </h1>
    </div>
  );
};
export default Notfound;
