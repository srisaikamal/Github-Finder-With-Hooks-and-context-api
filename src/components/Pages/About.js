import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        Search me <Link to="/user/srisaikamal">Vsskamal.</Link> You will find
        out. Or goto this{" "}
        <Link to="/user/srisaikamal">
          <strong>LINK</strong>
        </Link>
      </p>
    </div>
  );
};
export default About;
