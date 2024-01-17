import AnimeList from "@/app/component/AnimeList"   
import Header from "@/app/component/Utilities/Header";
import getAnimeResponse from "@/services/api.services";

const Page = async ({ params }) => {

  let { search } = params;
  const searchAnime = await getAnimeResponse("/anime", `q=${search}`)
  let decodedSearch = decodeURIComponent(search);

  return (
    <>
      <section className="p-6 bg-slate-50 pb-16"  suppressHydrationWarning={true}>
        <div className="flex flex-col gap-y-3 px-2 mt-4">
          <Header title={`Searching for ${decodedSearch} ...`} />
          <AnimeList
            api={searchAnime}
            title={`Searching for ${decodedSearch} ...`}/>
        </div>
      </section>
    </>

  )
}

export default Page