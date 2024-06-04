import React from "react";

const MarkerPopup = ({
  title = "Boston",
  link = "https://en.wikipedia.org/wiki/Boston",
  linkText = "Learn more about Boston",
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
