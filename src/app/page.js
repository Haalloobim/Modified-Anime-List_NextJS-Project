import AnimeList from "@/app/component/AnimeList/PopularList"
import PageTitle from "./component/AnimeList/PageTitle";

const Home = async () => {

  let apiURL = `${process.env.NEXT_PUBLIC_API_BASSE_URL}/top/anime`;
  const res = await fetch(apiURL);
  const datas = await res.json();
  // console.log(datas);

  return (

    <div className="p-5 bg-slate-50">
      <div className="flex flex-col gap-y-3 px-2 mt-4">
        <PageTitle title={"Populer Anime"}/>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          {datas.data.map((data) => {
            return (
              <div key={data.mal_id} className="bg-white rounded-xl shadow-xl p-4">
                <AnimeList title={data.title} image={data.images.webp.image_url} />
              </div>
              
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home