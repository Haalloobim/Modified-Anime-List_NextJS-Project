const Navbar = () => {
    return (
        <div>
            <nav className='bg-gray-800 border-gray-700 p-7 shadow-2xl'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
                    <p className='lg:text-3xl md:text-2xl text-xl text-white font-medium font-inter'>
                        Welcome to<span className='text-[#FFD700]'> Bitici Anime List</span>
                    </p>
                    <div className='bg-gray-700 text-white py-3 px-5 rounded-lg font-light text-base transition-all ease-in-out duration-100 hover:bg-gray-600 hover:-translate-y-[1px]' >
                        <button >Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar