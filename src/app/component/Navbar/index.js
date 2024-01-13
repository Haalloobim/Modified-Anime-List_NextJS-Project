const Navbar = () => {
    return (
        <div>
            <nav className='bg-gray-800 border-gray-700 p-7 shadow-2xl'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
                    <p className='lg:text-3xl md:text-2xl text-xl text-white font-medium font-inter'>
                        Welcome to<span className='text-[#FFD700]'> Bitici Anime List</span>
                    </p>
                    <div >
                        <input placeholder="Cari Anime.." type="text"  
                        className="border text-sm rounded-lg text-gray-300 block w-full p-2.5 
                        bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar