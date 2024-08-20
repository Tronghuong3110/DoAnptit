import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../css/lifeMap.css";
import "leaflet/dist/leaflet.css";
import L, { map } from "leaflet";

const LeafLetMap = ({ location }) => {
  const iconLocation = new L.Icon({
    iconUrl: require("../../assets/images/location.png"),
    iconSize: [40, 40],
  });
  const mapRef = useRef();

  if (location.loaded && !location.error) {
    mapRef.current.flyTo(
      [location.coordinates.lat, location.coordinates.lng],
      17
    );
  }
  console.log(location);
  return (
    <>
      <MapContainer
        center={
          location.loaded && !location.error
            ? [location.coordinates.lat, location.coordinates.lng]
            : [21.0171, 105.7844]
        }
        zoom={20}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=OK6scV6r00rtuhZdSvk1"
        />
        {location.loaded && !location.error && (
          <Marker
            position={
              location.loaded
                ? [location.coordinates.lat, location.coordinates.lng]
                : [21.0171, 105.7844]
            }
            icon={iconLocation}
          ></Marker>
        )}
      </MapContainer>
    </>
  );
};

export default LeafLetMap;
