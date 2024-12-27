import React from "react";
import { LeftHeader, RightHeader } from "../header";

const NoAuthHeader = () => {
  return (
    <header className="navbar sticky top-0 left-0 w-full h-[80px] sm:h-[120px] md:h-[150px] bg-white flex items-center px-4 shadow-md z-50 md:px-8">
      <LeftHeader />
      <RightHeader />
    </header>
  );
};

export default NoAuthHeader;
