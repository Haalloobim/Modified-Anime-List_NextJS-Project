import AnimeList from "@/app/component/AnimeList/PopularList"
import PageTitle from "./component/AnimeList/PageTitle";
import Link from "next/link";

const Home = async () => {

  let apiURL = `${process.env.NEXT_PUBLIC_API_BASSE_URL}/top/anime?limit=10`;
  const res = await fetch(apiURL);
  const datas = await res.json();
  // console.log(datas);

  return (

    <div className="p-6 bg-slate-50 pb-16" >
      <div className="flex flex-col gap-y-3 px-2 mt-4">
        <PageTitle title={"Populer Anime"}/>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          {datas.data.map((data) => {
            return (
              <div key={data.mal_id} className="bg-white rounded-xl shadow-xl p-3">
                <AnimeList title={data.title} image={data.images.webp.image_url} id={data.mal_id} />
              </div>
            )
          })}
        </div>
        <div className="flex justify-end">
          <Link href="/populer" className="text-indigo-500 underline hover:text-gray-800 transition-all duration-200 ease-in-out">
            See All..
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home