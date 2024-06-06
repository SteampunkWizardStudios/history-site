import React, { useState } from "react";

const MarkerPopup = ({
  title = "Placeholder Title",
  link = "https://en.wikipedia.org/wiki/Placeholder_name",
  linkText = "Learn more about placeholders",
  children,
}) => {
  const [showInfoBox, setShowInfoBox] = useState(false);

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