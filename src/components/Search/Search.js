import React from "react";
import { useLocation } from "react-router";
import useHotelContext from "../../hooks/useHotelContext";
import { format } from "date-fns";
import PlaceDetail from "./PlaceDetail";
import Map from "./Map";

const Search = () => {
  const { hotels } = useHotelContext();
  // console.log("search", hotels);
  const {
    state: { location, startDate, endDate, guests },
  } = useLocation();

  const formatStartDate = format(new Date(startDate), "yyyy-MM-dd");
  const formatEndDate = format(new Date(endDate), "yyyy-MM-dd");
  const range = `${formatStartDate} - ${formatEndDate}`;
  return (
    <main className="md:px-20 p-4 py-8 flex flex-col">
      <section className="flex-grow">
        <p className="text-sm text-gray-500">
          +300 stays - {range} for {guests} guests
        </p>
        <h2 className="text-3xl font-semibold mb-6">Stays in {location} </h2>
        <div className="hidden md:inline-flex whitespace-nowrap mb-6 space-x-4">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div>
          {hotels.length > 0 &&
            hotels
              .slice(0, 6)
              .map((hotel) => (
                <PlaceDetail key={hotel.listing_key} hotel={hotel} />
              ))}
        </div>
        <div className="w-full h-full">
          <Map />
        </div>
      </section>
    </main>
  );
};

export default Search;
