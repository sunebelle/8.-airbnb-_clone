import React from "react";

const Banner = () => {
  return (
    <div className="relative z-10 h-[400px] md:h-[500px] w-full text-center flex flex-col justify-center items-center bg-banner bg-no-repeat bg-cover bg-left-bottom bg-origin-border">
      {/* <img
        className="object-fill h-full  w-full"
        src="/banner.jpg"
        alt="airbnb-banner"
      /> */}
      <h4 className="text-xl pb-4 pt-20 text-white">
        Not sure where to go? Perfect.
      </h4>
      <button className="border-2 rounded-full bg-white px-6 py-4 w-52 text-xl text-pink-600 font-extrabold">
        I'm flexible
      </button>
    </div>
  );
};

export default Banner;
