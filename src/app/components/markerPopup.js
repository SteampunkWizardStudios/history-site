import React from "react";

const MarkerPopup = ({
  title = "Placeholder Title",
  location = "Placeholder Location",
  date = "Placeholder Date"
}) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{location}</h3>
      <h3>{date}</h3>
    </>
  );
};

export default MarkerPopup;