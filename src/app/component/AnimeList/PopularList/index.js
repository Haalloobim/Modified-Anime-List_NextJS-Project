import Image from "next/image"

const AnimeList = ({ title, image }) => {
    return (
        <div className="flex flex-col items-center justify-evenly h-full">
            <h1 className="text-center font-medium md:text-lg text-base py-2">
                {title}
            </h1>
            <Image src={image} alt=".." width={600} height={600} className="pt-1"/>
        </div>
    )
}

export default AnimeList