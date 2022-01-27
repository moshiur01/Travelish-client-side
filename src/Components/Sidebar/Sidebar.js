import React from "react";

import "./Sidebar.css";
import TopPlaces from "./TopPlaces";

const Sidebar = () => {
  return (
    <div className="sidebar p-5 sticky">
      {/* <div className="sidebar-text hidden md:flex text-gray-600 justify-center flex-col">
        <p className="font-medium text-5xl mb-3">Let's Travel</p>
        <p className="font-medium text-3xl">
          Around the world. And tell the tale.
        </p>
      </div>
      <Profile></Profile> */}
      <TopPlaces></TopPlaces>
    </div>
  );
};

export default Sidebar;
