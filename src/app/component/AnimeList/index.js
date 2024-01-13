import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api, title, hrefLink, hrefTitle }) => {
    return (
        <div>
            <div>
                <h1 className="font-roboto font-sans md:text-3xl text-xl font-extrabold text-[#111111] tracking-normal text-center pb-2">
                    {title}
                </h1>
            </div>
            <div className="flex flex-row gap-1  bg-slate-50 my-4">
                <div className="h-[2px] flex-1 bg-[#D1D5DC] rounded mx-12"></div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
                {api.data.map((data) => {
                    return (
                        <div key={data.mal_id} className="bg-white rounded-xl shadow-xl p-3">
                            <div className="flex flex-col items-center justify-evenly h-full w-full">
                                <h1 className="text-center font-medium md:text-lg text-base py-2">
                                    <Link href={`/${data.mal_id}`} className="hover:underline ease-in-out duration-200">
                                        {data.title}
                                    </Link>
                                </h1>
                                <Link href={`/${data.mal_id}`} className="w-full  pt-1">
                                    <Image
                                        src={data.images.webp.image_url}
                                        alt=".."
                                        width={600}
                                        height={600}
                                        className="h-[370px] object-cover grayscale-[67%] hover:grayscale-0 transition-all duration-200 ease-in-out hover:scale-[102.5%]"
                                    />
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="flex justify-end">
                <Link href={`/${hrefLink}`} className="text-indigo-500 underline hover:text-gray-800 transition-all duration-200 ease-in-out">
                    {hrefTitle}
                </Link>
            </div>
        </div>


    )
}

export default AnimeList