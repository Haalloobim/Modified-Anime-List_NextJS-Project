import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api, hrefLink, hrefTitle }) => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-3">
                {api.data?.map((data) => {
                    return (
                        <Link href={`/anime/${data.mal_id}`} key={data.mal_id} className="border border-gray-300 bg-white rounded-xl shadow-xl p-3 hover:-translate-y-1 transition-all duration-200  grayscale-[67%] hover:grayscale-0">
                            <div className="flex flex-col items-center justify-evenly h-full w-full">
                                <h1 className="text-center font-medium md:text-lg text-sm py-2">
                                    <Link href={`/anime/${data.mal_id}`} className="hover:underline ease-in-out duration-200">
                                        {data.title}
                                    </Link>
                                </h1>
                                <Link href={`/anime/${data.mal_id}`} className="w-full  pt-1">
                                    <Image
                                        src={data.images.webp.image_url}
                                        alt=".."
                                        width={600}
                                        height={600}
                                        className="md:h-[370px] h-[200px] object-cover transition-all duration-200 ease-in-out hover:scale-[102%]"
                                    />
                                </Link>
                            </div>
                        </Link>
                    )
                })}

            </div>
            {
                hrefLink && hrefTitle ?
                    <div className="flex justify-end py-4 md:text-base text-sm">
                        <Link href={`/${hrefLink}`} className="text-indigo-500 underline hover:text-gray-800 transition-all duration-200 ease-in-out">
                            {hrefTitle}
                        </Link>
                    </div> 
                    : null
            }

        </div>


    )
}

export default AnimeList