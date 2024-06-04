"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(
  () => import("../components/interactiveMap.js"),
  {
    ssr: false, // This will make the component only render on client side.
    loading: () => 
    <h1>Loading map...</h1>, // This will display a loading message.
  }
);

export default function MapPage() {
  return (
    <>
      <InteractiveMap />
    </>
  );
}
