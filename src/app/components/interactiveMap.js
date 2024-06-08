import React from "react";
import Map from "./map.js";
import Marker from "./marker.js";
import MarkerPopup from "./markerPopup.js";

export default function InteractiveMapComponent({ markers = [], onMarkerClick }) {
  return (
    <Map x_loc={39.99942965194008} y_loc={-97.95470323071255} zoom={4}>
      {markers.map((marker, index) => (
        <Marker 
          key={index} 
          location={marker.location} 
          altText={marker.altText} 
          onClick={() => onMarkerClick(marker)}
        >
          {marker.popup && (
            <MarkerPopup {...marker.popup}/>
          )}
        </Marker>
      ))}
    </Map>
  );
}