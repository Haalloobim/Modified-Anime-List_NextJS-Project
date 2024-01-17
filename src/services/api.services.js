const getAnimeResponse = async (res, query) => {
    let apiURL = `${process.env.NEXT_PUBLIC_API_BASSE_URL}${res}?${query}`;
    const response = await fetch(apiURL);
    const topAnimes = await response.json();
    return topAnimes;
}


export default getAnimeResponse