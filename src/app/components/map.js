import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ children, x_loc, y_loc, zoom }) {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    // This code ensures that the map's icons are loaded correctly
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "marker-icon-2x.png",
      iconUrl: "marker-icon.png",
      shadowUrl: "marker-shadow.png",
    });

    // Check if the map DOM element already has a map instance associated with it
    if (!mapRef.current._leaflet_id) {
      // Create a map instance and attach it to the map DOM element
      const mapInstance = L.map(mapRef.current).setView([x_loc, y_loc], zoom);
      setMap(mapInstance);

      // Add a tile layer to the map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(mapInstance);
    }
  }, [x_loc, y_loc, zoom]);

  return (
    <div ref={mapRef} style={{ height: "100vh", width: "100vw" }}>
      {map && React.Children.map(children, child => React.cloneElement(child, { map }))}
    </div>
  );
}