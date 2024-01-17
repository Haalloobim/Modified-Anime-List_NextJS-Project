import AnimeList from "@/app/component/AnimeList"
import Header from "./component/Utilities/Header";
import getAnimeResponse from "@/services/api.services";

const Page = async () => {

  const topAnimes = await getAnimeResponse("/top/anime", "limit=10")

  return (
    <>
      <section className="p-6 bg-slate-100 pb-16" >
        <div className="flex flex-col gap-y-3 px-2 mt-4">
          <Header title={"Most Popular Anime List"} />
          <AnimeList
            api={topAnimes}
            hrefLink={"popular"}
            hrefTitle={"See All Popular Anime.."} />
        </div>
      </section>
    </>

  )
}

export default Page