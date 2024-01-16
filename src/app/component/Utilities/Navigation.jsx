import React from "react";

const Navigation = ({ page = 1}) => {
  return (
    <div className="flex flex-col gap-1  ">
      <div className="flex flex-row gap-2 justify-between mx-12"> 
        <div>
            prev
        </div>
        <div>
            #{page}
        </div>
        <div>
            <button>
                next

            </button>
            
        </div>
      </div>
      <div className="flex flex-row gap-1  bg-slate-100 md:my-4 mb-4">
        <div className="h-[2px] flex-1 bg-[#D1D5DC] rounded mx-12"></div>
      </div>
    </div>
  );
};

export default Navigation;
