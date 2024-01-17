import React from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const Pagination = ({ currentPage, lastPage, setPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const handlePage = (dir) => {
    if(dir === "prev"){
      if(currentPage > 1){
        scrollTop()
        setPage(currentPage - 1)
      }
      else{
        alert("You are on the first page!")
        return
      } 
    }
    if(dir === "next"){
      if(currentPage < lastPage){
        scrollTop()
        setPage(currentPage + 1)
      }
      else{
        alert("You are on the last page!")
        return
      } 
    }
  }

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className={`flex items-center justify-center bg-white  rounded-l-xl border-y font-medium border-l border-gray-700 ${currentPage === 1 ? "text-gray-500" : "hover:text-[#ff9800] hover:text-[17px] hover:bg-slate-50"} transition-all `}>
            <button className="p-2 pl-3 flex items-center justify-center gap-x-1" onClick={() => handlePage("prev")} disabled={currentPage === 1}>
              <ArrowLeft /> 
              Prev</button>
        </div>
        <div className="flex items-center justify-center bg-white p-2 border border-gray-700">
            <h1>
                <span className="font-semibold text-[#ff9800]">{currentPage}</span> of {lastPage}
            </h1>
        </div>
        <div className="flex items-center justify-center bg-white hover:bg-slate-50 rounded-r-xl border-y font-medium border-r border-gray-700 hover:text-[#ff9800] hover:text-[17px] transition-all ">
            <button className="p-2 pr-3 flex items-center justify-center gap-x-1" onClick={() => handlePage("next")}>
              Next
              <ArrowRight />
            </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
