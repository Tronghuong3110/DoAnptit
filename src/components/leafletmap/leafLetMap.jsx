import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../css/lifeMap.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LeafLetMap = () => {
  const iconLocation = new L.Icon({
    iconUrl: require("../../assets/images/location.png"),
    iconSize: [40, 40],
  });

  return (
    <>
      <MapContainer
        center={[21.0171, 105.7844]}
        zoom={20}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=OK6scV6r00rtuhZdSvk1"
        />
        <Marker position={[21.0171, 105.7844]} icon={iconLocation}>
          <Popup>
            <b>Keangnam Landmark Tower 72</b>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default LeafLetMap;
