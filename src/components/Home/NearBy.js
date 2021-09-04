import React, { useEffect, useState } from "react";
const NearBy = () => {
  const [hotels, setHotels] = useState([]);
  
  useEffect(() => {
    const getHotels = JSON.parse(localStorage.getItem("hotels"));
    if (getHotels) {
      setHotels(getHotels.filter((hotel) => hotel.name && hotel.rating));
    }
  }, []);
  // console.log(hotels);

  return (

    <div className="px-20 p-8">
      <div className="text-3xl font-bold text-gray-700">
        <h1> Explore nearby </h1>
      </div>
      <div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 o ">
        {hotels.length > 8 &&
          hotels?.slice(0, 8).map((hotel) => (
            <div key={hotel.listing_key} className="flex flex-row h-24 pt-8 ">
              <img
                className="w-16 h-16 mr-4 rounded-lg"
                src={hotel.photo?.images?.small?.url || "/banner.jpg"}
                alt={hotel.name}
              />
              <div className="flex text-left flex-col justify-center">
                <h3 className="font-semibold">{hotel.name}</h3>
                <p className="font-light text-sx">
                  {Array(Math.round(Number(hotel.rating)))
                    .fill()
                    .map((_, key) => (
                      <i
                        key={key}
                        className="fa fa-star text-yellow-500"
                        aria-hidden="true"
                      />
                    ))}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NearBy;
