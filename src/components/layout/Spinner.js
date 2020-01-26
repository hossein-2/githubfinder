import React, { Fragment } from "react";
import rish from "./rish.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={rish}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
