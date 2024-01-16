import React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <div>
        <h1 className="font-roboto font-sans md:text-3xl text-xl font-extrabold text-[#111111] tracking-normal text-center pb-2">
          {title}
        </h1>
      </div>
      <div className="flex flex-row gap-1  bg-slate-100 md:my-4">
        <div className="h-[2px] flex-1 bg-[#D1D5DC] rounded mx-12"></div>
      </div>
    </div>
  );
};

export default Header;
