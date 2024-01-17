import Header from "@/app/component/Utilities/Header";
import getAnimeResponse from "@/services/api.services";
import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['400','500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })

const Page = async ({ params }) => {
  const { id } = params;
  const animeData = await getAnimeResponse(`/anime/${id}`);
  return (
    <>
      <section className="p-6 bg-slate-100 pb-16">
        <div className="flex flex-col gap-y-1 mx-auto">
          <Header title={`${animeData.data.title}`} />
          <div className="container flex flex-row justify-center gap-x-6">
            <Image
              src={animeData.data.images.webp.image_url}
              height={300}
              width={300}
              alt={animeData.data.images.jpg.image_url}
              className="h-[450px] w-[300px] object-cover rounded-lg shadow-lg p-3 bg-white justify-center border border-gray-300"
            />
            <div className="p-3 w-3/5 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col">
                <div className="pl-2 pt-1">
                    <h1 className={`${roboto.className} text-xl font-medium underline`}>Statistics</h1>
                </div>
                <div className="grid grid-cols-4">
                    <div>s</div>
                    <div>s</div>
                    <div>s</div>
                    <div>s</div>
                    <div>s</div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
