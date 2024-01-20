import { getAnimeResponse } from "@/services/api.services";
import prisma from "@/services/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collection = async ({ email }) => {
  const collection = await prisma.collection.findMany({
    where: {
      user_email: email,
    },
    take: 5, 
  });

  return (
    <>
      <div className="container flex flex-col gap-1 px-10 py-3 mb-4 ">
        <div className="flex justify-between items-center">
          <h1 className="font-roboto font-sans md:text-2xl text-xl font-bold text-[#111111] tracking-normal text-center pb-2 px-3">
            My Collection
          </h1>
          <Link
            href={"/users/dashboard/collection"}
            className="pr-4 text-sm text-indigo-500 underline hover:text-gray-800 transition-all duration-200 ease-in-out"
          >
            See all collection...
          </Link>
        </div>
        <div className="
          grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 justify-center
          bg-white rounded-xl shadow-xl border border-gray-400 md:py-4 py-8 md:px-5 px-11 
          ">
          {collection.map(async (colData, idx) => {
            return (
              <Link
                key={idx}
                href={`/anime/${colData.mal_id}`}
                className="group  hover:-translate-y-[3px] transition-all duration-150 ease-in-out relative min-h-fit border border-gray-500 bg-white rounded-lg"
              >
                <Image
                  src={colData.anime_image}
                  width={200}
                  height={240}
                  className="transition-all duration-200 ease-in-out md:h-[280px] md:w-[220px] h-[280px] w-[210px] inset-0 object-cover-cover bg-center z-0 rounded-lg"
                />
                <div 
                  className=" absolute inset-0 bottom-0 z-10
                  rounded-lg min-h-full flex justify-center items-end">
                  <div className="py-1 bg-slate-100 
                    bg-opacity-0 group-hover:bg-opacity-[0.85] transition-all duration-200 ease-in-out
                    w-full rounded-b-lg z-40">
                    <h1 className="opacity-0 group-hover:opacity-100
                     -translate-x-8 group-hover:translate-x-0 transition-all duration-[400] ease-in-out
                    text-black text-center font-medium text-sm overflow-hidden">{colData.anime_title}</h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collection;
