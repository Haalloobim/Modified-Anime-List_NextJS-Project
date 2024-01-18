import Header from "@/app/component/Utilities/Header";
import { getAnimeResponse } from "@/services/api.services";
import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";
import VidPlayer from "@/app/component/Utilities/VidPlayer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Page = async ({ params }) => {
  const { id } = params;
  const animeData = await getAnimeResponse(`/anime/${id}`);
  return (
    <>
      <section
        className="p-6 px-8 bg-slate-100 pb-16"
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col gap-y-5 mx-auto">
          <Header title={`${animeData.data.title}`} />
          <div className="container flex md:flex-row flex-col md:items-stretch items-center justify-center gap-y-4 gap-x-5">
            <Image
              priority={true}
              src={animeData.data.images.webp.image_url}
              height={300}
              width={300}
              alt={animeData.data.images.jpg.image_url}
              className="md:h-[450px] md:w-[300px] h-[280px] w-[210px] object-cover rounded-lg shadow-lg p-3 bg-white justify-center border border-gray-300"
            />
            <div className="p-3 w-full bg-slate-50 rounded-xl shadow-xl border border-gray-300 flex flex-col gap-y-3 justify-center">
              <div className="pl-3">
                <h1
                  className={`${roboto.className} text-2xl font-medium underline`}
                >
                  Statistics
                </h1>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="border border-gray-400 bg-white rounded-xl shadow-md p-3">
                  <h1>
                    Score:{" "}
                    <span className="font-bold text-gray-800">
                      {animeData.data.score}
                    </span>{" "}
                    by{" "}
                    <span className="font-bold text-gray-800">
                      {animeData.data.scored_by}
                    </span>{" "}
                    users
                  </h1>
                </div>
                <div className="border border-gray-400 bg-white rounded-xl shadow-md p-3">
                  <h1>
                    Rank: #
                    <span className="font-bold text-kuro">
                      {animeData.data.rank}
                    </span>
                  </h1>
                </div>
                <div className="border border-gray-400 bg-white rounded-xl shadow-md p-3">
                  <h1>
                    Popularity: #
                    <span className="font-bold text-kuro">
                      {animeData.data.popularity}
                    </span>
                  </h1>
                </div>
                <div className="border border-gray-400 bg-white rounded-xl shadow-md p-3">
                  <h1>
                    Member:{" "}
                    <span className="font-bold text-kuro">
                      {animeData.data.members}
                    </span>{" "}
                    users
                  </h1>
                </div>
                <div className="border border-gray-400 bg-white rounded-xl shadow-md p-3">
                  <h1>
                    Episode:{" "}
                    <span className="font-bold text-kuro">
                      {animeData.data.episodes}
                    </span>{" "}
                    Episodes
                  </h1>
                </div>
                <div className="border border-gray-400 bg-white rounded-xl shadow-md p-3">
                  <h1>
                    Aired:{" "}
                    <span className="font-semibold text-kuro">
                      {animeData.data.season} - {animeData.data.year}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-y-1 border items-center border-gray-300 bg-slate-50 rounded-xl shadow-lg p-3">
              <div className="py-1">
                <h1
                  className={`${roboto.className} text-2xl font-medium underline text-center`}
                >
                  Synopsis
                </h1>
              </div>
              <div className="p-2 text-justify leading-relaxed">
                <h1>{animeData.data.synopsis}</h1>
              </div>
            </div>
          </div>
          <div className="flex w-ful justify-center">
            <div className="lg:w-3/5 md:w-4/5 w-full flex flex-col gap-y-1 border border-gray-300 bg-slate-50 rounded-xl shadow-lg  p-3 mt-2">
              <div >
                <h1 className={`${roboto.className} text-2xl font-medium underline text-center`}>
                  Anime Trailer
                </h1>
              </div>
              <VidPlayer ytID={animeData.data.trailer.youtube_id}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
