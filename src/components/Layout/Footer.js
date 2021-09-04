import React from "react";

const Footer = () => {
  return (
    <div className=" md:footer__container h-auto bg-gray-200 px-20 py-10 grid gap-4 md:grid-cols-4 place-content-center">
      <div className=" text-gray-600 space-y-4 ">
        <p className="font-bold uppercase"> About</p>
        <p>How Airbnb works </p>
        <p>Newsroom </p>
        <p>Airbnb 2021 </p>
        <p>Investors </p>
        <p>Airbnb Plus </p>
        <p>Airbnb Luxe </p>
        <p>HotelTonight </p>
        <p>Airbnb for Work </p>
        <p>Made possible by Hosts </p>
        <p>Careers </p>
      </div>
      <div className=" text-gray-600 space-y-4 ">
        <p className="font-bold"> COMMUNITY</p>
        <p>Diversity & Belonging </p>
        <p>Accessibility </p>
        <p>Airbnb Associates</p>
        <p>Host Afghan refugees </p>
        <p>Guest Referrals </p>
        <p>Airbnb.org </p>
      </div>
      <div className=" text-gray-600 space-y-4 ">
        <p className="font-bold"> HOST</p>
        <p>Host your home </p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible hosting </p>
        <p>Resource Centre </p>
        <p>Community Centre </p>
      </div>
      <div className=" text-gray-600 space-y-4 ">
        <p className="font-bold"> SUPPORT</p>
        <p>Our COVID-19 Response </p>
        <p>Help Centre</p>
        <p>Cancellation options</p>
        <p>Neighbourhood Support </p>
        <p>Trust & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
