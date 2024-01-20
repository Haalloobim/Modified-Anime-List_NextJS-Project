import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collection = () => {
  return (
    <>
      <div className="container flex flex-col gap-3 px-10 py-3 mb-12">
        <div className="flex justify-between items-center">
          <h1 className="font-roboto font-sans md:text-2xl text-xl font-bold text-[#111111] tracking-normal text-center pb-2 px-3">
            My Collection
          </h1>
          <Link
            href={"/users/dashboard/collection"}
            className="text-sm text-indigo-500 underline hover:text-gray-800 transition-all duration-200 ease-in-out"
          >
            See all collection...
          </Link>
        </div>
        <div className="flex flex-row gap-x-10 ">
            <div className="relative min-h-fit border border-gray-500 bg-white rounded-lg">
                <Image
                src={"https://placehold.co/400x600.png"}
                alt=""
                width={200}
                height={260}
                className="inset-0 bg-cover bg-center z-0 rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bottom-0 bg-green-600 z-10 min-h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h1 className="text-black font-bold text-2xl z-30 ">hello</h1>
                </div>
            </div>
            <div className=" min-h-fit border border-gray-500 bg-white rounded-lg ">
                <Image
                src={"https://placehold.co/400x600.png"}
                alt=""
                width={200}
                height={260}
                className="object-cover rounded-lg"
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
