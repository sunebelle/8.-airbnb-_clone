import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import useHotelContext from "../../hooks/useHotelContext";
// import getCenter from "geolib/es/getCenter";
//https://visgl.github.io/react-map-gl/examples/controls

const Map = () => {
  const { hotels, coords } = useHotelContext();
  const [selectedLocation, setSelectedLocation] = useState({});

  // const coordinates = hotels.map((hotel) => ({
  //   longitude: hotel.longitude,
  //   latitude: hotel.latitude,
  // }));

  // const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    // latitude: center.latitude,
    // longitude: center.longitude,
    latitude: coords.lat || 10.7916276,
    longitude: coords.lng || 106.6855757,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      mapStyle="mapbox://styles/sunebelle/ckt5b5ly01vf117o59e59eega"
      {...viewport}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      {hotels.map((hotel) => (
        <div key={hotel.location_id}>
          <Marker
            longitude={+hotel.longitude}
            latitude={+hotel.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              className="cursor-pointer text-xl animate-pulse"
              onClick={() => setSelectedLocation(hotel)}
            >
              <i className="fas fa-map-marker-alt text-red-500"></i>
            </p>
          </Marker>
          {/* show the popup once marker get clicked */}
          {selectedLocation?.longitude === hotel.longitude && (
            <Popup
              longitude={+hotel.longitude}
              latitude={+hotel.latitude}
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
            >
              {hotel.name}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
