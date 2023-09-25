import React from "react";

const Element = ({ imgURL, featured, label, text }) => {
  return (
    <div className="flex-1 px-7 cursor-pointer">
      <div className="overflow-hidden border border-black ">
        <img
          className="hover:scale-105 object-cover duration-200 transition-all ease-linear "
          src={imgURL}
        />
      </div>
      <h3 className="font-[condMedium] mt-2  flex gap-2   items-center font-semibold text-2xl">
        <span className="">{label}</span>
        {featured && (
          <span className="text-lg  bg-[#b43b12] px-1 rounded-md  text-center text-[#c4bcb3]">
            NEW
          </span>
        )}
      </h3>
      <p className="break-words text-sm lg:text-xl font-[newLight] mt-3  text-[#1D1D1B]">
        {text}
      </p>
    </div>
  );
};

export default Element;
