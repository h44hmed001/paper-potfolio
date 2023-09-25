"use client";
import React from "react";

import Link from "next/link";

const FullScreen = () => {
  return (
    <div
      className={` top-0 left-0 md:hidden absolute text-[#4a4036] bg-[#ecece4] w-full h-screen text-2xl uppercase font-[newLight]  origin-top sm:block items-center justify-center  z-[999] menu-container `}
    >
      <p className="text-center flex items-center h-full justify-center">
        Rotate for a better experience
      </p>
    </div>
  );
};
export default FullScreen;
