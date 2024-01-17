"use client";

import React, { useEffect, useState } from "react";
import Pagination from "../component/Utilities/Pagination";
import AnimeList from "../component/AnimeList";
import Header from "../component/Utilities/Header";
import Navigation from "../component/Utilities/Navigation";
import getAnimeResponse from "@/services/api.services";

const page = () => {
  const [topAnimes, setTopAnimes] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const datas = await getAnimeResponse("/top/anime", `page=${page}`);
    setTopAnimes(datas);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="p-6 bg-slate-100 pb-16">
      <div className="flex flex-col gap-y-4 px-2 mt-4">
        <Header title={"Popular Anime List"} />
        <Navigation
          page={page}
          lastPage={topAnimes.pagination?.last_visible_page}
          setPage={setPage}
        />
        <AnimeList api={topAnimes} />
        <Pagination
          currentPage={page}
          lastPage={topAnimes.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default page;
