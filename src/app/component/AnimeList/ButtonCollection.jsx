"use client";
import React, { useEffect, useState } from "react";
import { Check, Plus } from "@phosphor-icons/react";

const ButtonCollection = ({ mal_id, user_email, user_name, colData, anime_image, anime_title }) => {
  let urlApi = "/api/v1/collection";

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if(colData) {
      setIsAdded(true)
    }
  }, [])

  const CollectionButtonHandler = async (event) => {
    event.preventDefault();

    const storedData = { 
        mal_id,
        user_email, 
        user_name, 
        anime_image, 
        anime_title 
    };

    const res = await fetch(urlApi, {
      method: "POST",
      body: JSON.stringify(storedData),
    });

    const collection = await res.json();
    console.log({ collection });
    if (collection.isCreated) {
      setIsAdded(collection.isCreated);
    }
  };

  return (
    <>
      {!isAdded ? (
        <button
          onClick={CollectionButtonHandler}
          className="
            flex flex-row items-center gap-x-1 p-2
            border border-gray-400 bg-white rounded-xl shadow-md text-kuro
            hover:text-gray-50 hover:bg-gray-700 transition-all hover:-translate-y-[2px] duration-100"
        >
          <Plus size={16} />
          <div className="text-sm font-medium">Add collection</div>
        </button>
      ) : (
        <button
        disabled
         className="
            flex flex-row-reverse items-center gap-x-2 p-2
            border border-gray-400 bg-gray-700 rounded-xl shadow-md text-gray-50"
        >
          <Check size={16} weight="bold" />
          <div className="text-sm font-medium">Collection Added</div>
        </button>
      )}
    </>
  );
};

export default ButtonCollection;
