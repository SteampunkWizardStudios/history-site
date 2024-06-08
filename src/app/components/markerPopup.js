import React from "react";

const MarkerPopup = ({
  title = "Placeholder Title",
  link = "",
  linkText = "",
}) => {
  return (
    <>
      <h1>{title}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </>
  );
};

export default MarkerPopup;