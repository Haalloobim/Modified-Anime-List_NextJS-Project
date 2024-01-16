import AnimeList from "@/app/component/AnimeList"

const Page = async () => {

  let apiURL = `${process.env.NEXT_PUBLIC_API_BASSE_URL}/top/anime?limit=10`;
  const res = await fetch(apiURL);
  const topAnimes = await res.json();
  // console.log(datas);

  return (
    <>
      <section className="p-6 bg-slate-50 pb-16" >
        <div className="flex flex-col gap-y-3 px-2 mt-4">
          <AnimeList
            api={topAnimes}
            title={"Popular Anime"}
            hrefLink={"popular"}
            hrefTitle={"See All Popular Anime.."} />
        </div>
      </section>
    </>

  )
}

export default Page