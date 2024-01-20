"use client";
import React from "react";
import { Plus } from "@phosphor-icons/react";

const ButtonCollection = ({animeAPI, userData}) => {
    const CollectionButtonHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <button
    onClick={CollectionButtonHandler}
      className="
        flex flex-row items-center gap-x-1 p-2
        border border-gray-400 bg-white rounded-xl shadow-md
        hover:text-gray-50 hover:bg-gray-700 transition-all hover:-translate-y-[2px] duration-100"
    >
      <Plus size={16} />
      <div className="text-sm font-medium">Add collection</div>
    </button>
  );
};

export default ButtonCollection;
