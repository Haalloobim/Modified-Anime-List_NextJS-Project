import AnimeList from "@/app/component/AnimeList"   

const Page = async ({ params }) => {

  const { search } = params;
  let apiURL = `${process.env.NEXT_PUBLIC_API_BASSE_URL}/anime?q=${search}`;
  const res = await fetch(apiURL);
  const searchAnime = await res.json();
  

  return (
    <>
      <section className="p-6 bg-slate-50 pb-16" >
        <div className="flex flex-col gap-y-3 px-2 mt-4">
          <AnimeList
            api={searchAnime}
            title={`Searching for ${search}...`}/>
        </div>
      </section>
    </>

  )
}

export default Page