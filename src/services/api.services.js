export const getAnimeResponse = async (res, query) => {
    let apiURL = `${process.env.NEXT_PUBLIC_API_BASSE_URL}${res}?${query}`;
    const response = await fetch(apiURL);
    const topAnimes = await response.json();
    return topAnimes;
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    const RecResponse = response.data?.flatMap(item => item[objectProperty]); 
    return RecResponse; 
}

export const randomizeAnimeData = (data, length) => {
    const selectedIndex = new Set();
    let count = 0;
    while (1) {
        if (count === length) break;
        let index = Math.floor(Math.random() * data.length); 
        if (!(selectedIndex.has(index))){
            selectedIndex.add(index);
            count++;
        }
    }
    // console.log(count, selectedIndex, length);
    const selectedRandomData = Array.from(selectedIndex).map(selectedIndex => data[selectedIndex]);
    return selectedRandomData;
}
