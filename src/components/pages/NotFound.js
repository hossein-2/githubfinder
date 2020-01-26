import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1>
        <i className="fas fa-times-circle" /> Not Found
      </h1>
      <p className="lead">The Page you're looking for is not on this domain.</p>
    </Fragment>
  );
};

export default NotFound;
