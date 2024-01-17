import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React from "react";

const Navigation = ({ page, lastPage, setPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const handlePage = (dir) => {
    if(dir === "prev"){
      if(page > 1){
        setPage(page - 1)
      }
      else{
        alert("You are on the first page!")
        return
      } 
    }
    if(dir === "next"){
      if(page < lastPage){
        setPage(page + 1)
      }
      else{
        alert("You are on the last page!")
        return
      } 
    }
    scrollTop()
  }

  return (
    <div className="flex flex-col gap-x-3  ">
      <div className="flex flex-row gap-2 justify-between items-center md:mx-12 mx-auto md:mb-3 mb-6">
        <div >
          <button disabled={page <= 1} onClick={() => handlePage("prev")} className={`flex items-center justify-center gap-x-1 py-4 px-4 h-8  text-base font-normal text-gray-800 bg-white border border-gray-300 shadow-lg rounded-lg ${ page === 1 ? "text-gray-400" : "hover:bg-gray-100 hover:-translate-y-[2px] transition-all hover:text-gray-700" }`}>
            <ArrowLeft />
            Prev
          </button>
        </div>
            <div className="bg-white border-gray-300 border px-3 py-2 rounded-md shadow-lg" >
                <p>Page: <span className="text-gold font-medium">{page}</span></p>
            </div>
        <div>
          <button disabled={page >= lastPage} onClick={() => handlePage("next")} className={` flex items-center justify-center gap-x-1 py-4 px-4 h-8 me-3 text-base font-normal text-gray-800 bg-white border border-gray-300 shadow-lg rounded-lg ${ page === lastPage ? "text-gray-400" : "hover:bg-gray-100 hover:-translate-y-[2px] transition-all hover:text-gray-700"}`}>
            Next
            <ArrowRight />
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
