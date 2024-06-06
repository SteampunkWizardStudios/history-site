"use client";

import dynamic from "next/dynamic";
import markers from "./markers.json";

const InteractiveMap = dynamic(
  () => import("../components/interactiveMap.js"),
  {
    ssr: false, // server side rendering is disabled
    loading: () => <h1>Loading map...</h1>,
  }
);

export default function MapPage() {
  return (
    <>
      <InteractiveMap markers={markers} />
    </>
  );
}
