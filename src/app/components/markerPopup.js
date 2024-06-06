import React from "react";

const MarkerPopup = ({
  title = "Placeholder Title",
  link = "https://en.wikipedia.org/wiki/Placeholder_name",
  linkText = "Learn more about placeholders",
}) => {
  return (
    <>
      <h1>{title}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
      <br></br>
    </>
  );
};

export default MarkerPopup;