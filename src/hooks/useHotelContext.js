import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const useHotels = createContext();

export const UseHotelProvider = ({ children }) => {
  const [coords, setCoords] = useState({});
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        // console.log({ lat, lng });
        setCoords({ lat, lng });
      }
    );
  }, []);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
          {
            params: {
              latitude: coords.lat || "10.79159",
              longitude: coords.lng || "106.68557",
              // latitude: "12.91285",
              // longitude: "100.87808",
            },
            headers: {
              "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
              "x-rapidapi-key":
                "21fb8bdd0emsha34f958e3a49af4p19ee8fjsn1137216366d1",
            },
          }
        );
        // console.log(data);
        localStorage.setItem("hotels", JSON.stringify([...data]));
      } catch (error) {
        console.log(error);
      }
    };
    if (coords?.lat && coords?.lng) getHotels();
    return () => getHotels();
  }, [coords]);

  useEffect(() => {
    const getHotelsFromLocalStorage = JSON.parse(
      localStorage.getItem("hotels")
    );
    if (getHotelsFromLocalStorage.length > 0) {
      setHotels(
        getHotelsFromLocalStorage.filter((hotel) => hotel.name && hotel.rating)
      );
    }
  }, [coords]);

  return (
    <useHotels.Provider value={{ hotels, coords }}>
      {children}
    </useHotels.Provider>
  );
};

const useHotelContext = () => useContext(useHotels);
export default useHotelContext;
