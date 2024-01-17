"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const SearchInput = () => {
    const refInput = useRef(null)
    const router = useRouter()

    const SearchInputHandling = (event) => {
        event.preventDefault()
        let search = refInput.current.value
        if (!search.length) {
            alert("Please input something")
        }
        else if ( search.length > 50) {
            alert("Please input something less than 50 characters")
        }
        else {
            router.push(`/search/${search}`);
            setTimeout(() => {
                refInput.current.value = "";
            }, 1100); 
        }
        
    }

    return (
        <div className="flex flex-row items-center gap-x-2 " suppressHydrationWarning={true}>
            <input placeholder="Cari Anime.." type="text"
                ref={refInput}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        SearchInputHandling(event);
                    }
                }}
                className="border text-sm rounded-lg text-gray-300 block w-full md:p-2.5 p-2 
                        bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={SearchInputHandling}>
                <MagnifyingGlass size={30} color="rgb(209 213 219)" className="hover:text-white hover:scale-105 duration-150 transition-all ease-in-out " />
            </button>


        </div>
    )
}

export default SearchInput