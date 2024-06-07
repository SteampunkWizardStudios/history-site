import { useEffect, useRef } from "react";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";

export default function Marker({
  map,
  location = [0,0],
  altText = "Placeholder altText",
  children,
  onClick
}) {
  const markerRef = useRef(null);

  useEffect(() => {
    if (map && location) {
      markerRef.current = L.marker(location, { title: altText }).addTo(map);
      markerRef.current.on('contextmenu', onClick);

      if (children) {
        const popupContent = ReactDOMServer.renderToString(children);
        const popup = L.popup().setContent(popupContent);
        markerRef.current.bindPopup(popup);
      }
    }

    return () => {
      if (map) {
        map.removeLayer(markerRef.current);
      }
    };
  }, [map, location, altText, children, onClick]);
}
