import React from "react";

const PlaceDetail = ({ hotel }) => {
  return (
    <div className="flex flex-col sm:flex-row py-5 px-3 cursor-pointer hover:shadow-lg border-b first:border-t hover:opacity-80 transition duration-150 ease-in-out">
      <img
        className="w-72 h-56 rounded-lg"
        src={hotel.photo?.images?.large?.url || "/banner.jpg"}
        alt={hotel.name}
      />
      <div className="sm:pl-4 pt-4 sm:pt-0 flex flex-col flex-grow ">
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">
            Stays in {hotel.location_string}
          </p>
          <i className="far fa-heart"></i>
        </div>
        <h2 className="text-xl font-semibold">{hotel.name}</h2>
        <div className="border-b w-10 pt-2" />
        <p className="text-gray-400 text-base pt-2"> {hotel.ranking}</p>
        <div className="flex items-end justify-between h-full">
          <p className="items-center flex">
            <i className="fa fa-star text-yellow-500" aria-hidden="true" />
            {hotel.rating}
          </p>
          <div className="flex flex-col text-right">
            <p className="text-xl font-bold ">{hotel.price}/night</p>
            <p className="text-gray-400 text-lg"> $200 total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
