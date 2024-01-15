import Link from "next/link"
import SearchInput from "@/app/component/Navbar/SearchInput"

const Navbar = () => {
    return (
        <div>
            <nav className='bg-gray-800 border-gray-700 p-7 shadow-2xl'>
                <div className='max-w-screen-xl flex md:flex-row flex-col gap-y-3 items-center md:justify-between justify-center mx-auto'>
                    <p className='lg:text-3xl md:text-2xl text-xl text-white font-medium font-inter'>
                        Welcome to<Link href="/" className='text-goldYel'> Bitici Anime List</Link>
                    </p>
                    <SearchInput/>
                </div>
            </nav>
        </div>
    )
}
export default Navbar