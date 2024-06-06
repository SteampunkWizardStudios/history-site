import React from "react";
import Map from "./map.js";
import Marker from "./marker.js";
import MarkerPopup from "./markerPopup.js";
import markers from "../map/markers.json";

export default function InteractiveMapComponent() {
  return (
    <Map x_loc={42.3601} y_loc={-71.0589} zoom={13}>
      {markers.map((marker, index) => (
        <Marker key={index} location={marker.location} altText={marker.altText}>
          {marker.popup && <MarkerPopup {...marker.popup} />}
        </Marker>
      ))}
    </Map>
  );
}
