import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
import { useHistory } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { format } from "date-fns";

//https://stackoverflow.com/questions/41736048/what-is-a-state-in-link-component-of-react-router

const Header = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  // const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (range) => {
    // console.log(range);
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const handleCancel = () => {
    setLocation("");
  };

  const handleSearchHotels = () => {
    //https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-link-redirect-in-react-router-v4

    // const formatStartDate = format(new Date(startDate), "yyyy-MM-dd");
    // const formatEndDate = format(new Date(endDate), "yyyy-MM-dd");
    // const range = `${formatStartDate} - ${formatEndDate}`;

    history.push({
      pathname: "/search",
      search: `?location=${location}&checkin=${startDate}&checkout=${endDate}&guests=${guests}`,
      state: { location, startDate, endDate, guests },
    });
    // const searchPlaceHolder = `${location} | ${range} | ${guests}`;
    // setSearchInput(searchPlaceHolder);
    setLocation("");
  };

  // fixed (cover banner) vs sticky (push banner behind)
  return (
    <header className="top-0 shadow-md z-50 bg-white md:px-20 p-4 grid grid-cols-3 sticky w-full items-center text-base">
      <Link to="/">
        <div className="text-red-500 flex font-bold cursor-pointer">
          <img className="w-8 h-8" src="/logo.png" alt="logo" />
          <span className="text-2xl pl-2">airbnb</span>
        </div>
      </Link>
      <div className="cursor-pointer border-2 rounded-full px-2 py-1 flex flex-row justify-between">
        <input
          role="button"
          className="placeholder-black  font-semibold focus:outline-none placeholder-opacity-100 md:px-2 inline-block"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Start your search"
        />
        <i
          className="fa fa-search text-white border-2 rounded-full bg-red-500 p-2 hidden lg:block"
          aria-hidden="true"
        ></i>
      </div>
      <div className="flex justify-end  items-center">
        <h4 className="cursor-pointer text-black font-semibold md:block hidden">
          Become a host
        </h4>
        <i
          className="cursor-pointer fa fa-globe p-4 text-gray-600"
          aria-hidden="true"
        ></i>
        <div className="cursor-pointer flex justify-around items-center border-2 rounded-full px-2 py-1  text-gray-600">
          <i className="fa fa-bars pr-2 " aria-hidden="true"></i>
          <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      {location && (
        <div className="flex flex-col col-span-3 mx-auto pt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#EF4444"]}
            className="text-xl "
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <div>
              <i className="fas fa-users h-5"></i>
              <input
                className="outline-none w-12 focus:outline-none pl-2 text-lg"
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </div>
          <div className="flex ">
            <button onClick={handleCancel} className="text-gray-400  flex-grow">
              Cancel
            </button>
            <button
              onClick={handleSearchHotels}
              className="text-red-500 flex-grow"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
