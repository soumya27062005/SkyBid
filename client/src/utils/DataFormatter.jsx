import React from "react";
import Moment from "react-moment";

export const DateFormatter = ({ date }) => {
  return (
    <>
      <Moment format="DD MM YYYY" withTitle>
        {date}
      </Moment>
    </>
  );
};
