import React, { useEffect, useState } from "react";

const LiveAnywhere = () => {
  
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotels = JSON.parse(localStorage.getItem("hotels"));
    if (getHotels) {
      getHotels.filter((hotel) => hotel.name);
      setHotels(getHotels);
    }
  }, []);
  
  return (
    <div className="px-20 py-8">
      <div className="text-3xl font-bold text-gray-700">
        <h1> Live anywhere </h1>
      </div>
      <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 ">
        {hotels.length > 12 &&
          hotels?.slice(8, 12).map((hotel) => (
            <div
              key={hotel.listing_key}
              className="flex h-full w-full flex-col"
            >
              <img
                className="w-72 h-72 mr-4 rounded-lg"
                src={hotel.photo?.images?.large?.url || "/banner.jpg"}
                alt={hotel.name}
              />
              <h3 className="font-semibold text-lg pt-4">{hotel.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LiveAnywhere;
