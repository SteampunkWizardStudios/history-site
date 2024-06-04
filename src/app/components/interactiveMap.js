import { useEffect, useRef } from 'react';

export default function InteractiveMapComponent() {
  const mapRef = useRef();  // Create a ref to store the map DOM element
  const mapInstance = useRef();  // Create a ref to store the map instance

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      require('leaflet/dist/leaflet.css');

      // This code ensures that the map's icons are loaded correctly
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      });

      // Only create a new map instance if there isn't one already
      if (!mapInstance.current) {
        // Create a map instance and attach it to the map DOM element
        mapInstance.current = L.map(mapRef.current).setView([42.3601, -71.0589], 13);

        // Add a tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(mapInstance.current);
      }
      // Add a marker at the coordinates for Boston
      L.marker([42.3601, -71.0589]).addTo(mapInstance.current);
    }
  }, []);

  return <div ref={mapRef} style={{ height: "100vh", width: "100vw" }} />;  // Render the map DOM element
}