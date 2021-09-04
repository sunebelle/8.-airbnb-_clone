import React from "react";

const Discover = () => {
  const hotels = [
    {
      imgUrl:
        "http://cdn.thinglink.me/api/image/747806573358743554/1024/10/scaletowidth/0/0/1/1/false/true?wait=true",
      title: "Experiences",
      para: "Find unforgettable activities near you.",
    },
    {
      imgUrl:
        "http://travelandynews.com/wp-content/uploads/2020/06/Pasta-with-Luca-and-Lorenzo_2-1.jpg",
      title: "Online Experiences",
      para: "Live, interactive activities led by Hosts.",
    },
    {
      imgUrl: "https://f4.bcbits.com/img/a3392801707_10.jpg",
      title: "Olympians & Paralympians",
      para: "Online activities hosted by athletes.",
    },
  ];
  return (
    <div className="px-20 py-8">
      <div className="text-3xl font-bold text-gray-700">
        <h1> Discover things to do </h1>
      </div>
      <div className="grid cursor-pointer grid-cols-1 lg:grid-cols-3 gap-y-4 gap-2 pt-8 ">
        {hotels.map((hotel) => (
          <div key={hotel.title} className="flex h-full w-full flex-col">
            <img
              className="w-96 h-96 mr-4 rounded-lg"
              src={hotel.imgUrl}
              alt={hotel.title}
            />
            <h3 className="font-semibold text-lg pt-4">{hotel.title}</h3>
            <p>{hotel.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
