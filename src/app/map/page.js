"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import markers from "./markers.json";
import InfoBox from "../components/infoBox.js";
import TaskBar from "../components/taskBar.js";
import styles from "../styles/main.module.css";
import Content from "../components/infoBoxContent.js";

const InteractiveMap = dynamic(
  () => import("../components/interactiveMap.js"),
  {
    ssr: false, // server side rendering is disabled
    loading: () => (
      <div className={styles.loading}>
        <h1>Loading map</h1>
      </div>
    ),
  }
);

export default function MapPage() {
  const [infoBoxContent, setInfoBoxContent] = useState(null);

  const handleMarkerClick = async (marker) => {
    fetch(`./infoBoxes/${marker.infoBox}`)
      .then((response) => response.text())
      .then((data) => {
        setInfoBoxContent(
          <Content title={marker.popup.title} content={data} />
        );
      });
  };

  return (
    <>
      <InteractiveMap markers={markers} onMarkerClick={handleMarkerClick} />
      <TaskBar />
      {infoBoxContent !== null ? (
        <InfoBox content={infoBoxContent} />
      ) : (
        <InfoBox />
      )}
    </>
  );
}
