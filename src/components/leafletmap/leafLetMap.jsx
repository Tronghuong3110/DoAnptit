import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "../../css/lifeMap.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LeafLetMap = ({ location, routerData, markersData}) => {
  const [markers, setMarkers] = useState(markersData);

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

  const MapClick = () => {
    useMapEvents({
      click(e) {
        console.log(e);
        setMarkers((pre) => [...pre, { lat: e.latlng.lat, lng: e.latlng.lng }]);
      },
    });
    return null;
  };

  useEffect(() => {
    if(mapRef.current && routerData.lat && routerData.lng) {
      const map = mapRef.current;
      const currentPosition = [location.coordinates.lat, location.coordinates.lng];
      const destinationPosition = [routerData.lat, routerData.lng];

      map.eachLayer((layer) => {
        if (layer instanceof L.Polyline) {
          map.removeLayer(layer);
        }
      });

      const polyline = L.polyline([currentPosition, destinationPosition], {
        color: 'blue',
        weight: 5,
        opacity: 0.7,
      }).addTo(map);

      map.fitBounds(polyline.getBounds());
    }
  }, [routerData, location]);

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

        {markers.map((marker, index) => (
          <Marker
            position={[marker.lat, marker.lng]}
            key={index}
            icon={iconLocation}
          ></Marker>
        ))}
        <MapClick />
      </MapContainer>
    </>
  );
};

export default LeafLetMap;
