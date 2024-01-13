import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ title, image, id }) => {
    return (
        <div className="flex flex-col items-center justify-evenly h-full w-full">
            <h1 className="text-center font-medium md:text-lg text-base py-2">
                <Link href={`/${id}`} className="hover:underline ease-in-out duration-200">
                    {title}
                </Link>
            </h1>
            <Link href={`/${id}`} className="w-full  pt-1">
                <Image
                    src={image}
                    alt=".."
                    width={600}
                    height={600}
                    className="h-[370px] object-cover grayscale-[67%] hover:grayscale-0 transition-all duration-200 ease-in-out hover:scale-[102.5%]"
                />
            </Link>

        </div>
    )
}

export default AnimeList