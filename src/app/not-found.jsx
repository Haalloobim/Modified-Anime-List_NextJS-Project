import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <div className='min-h-[555px] w-full flex justify-center items-center bg-slate-100 mx-auto'>
            <div className='p-7 rounded-xl bg-slate-50 shadow-2xl border border-black flex flex-col items-center gap-2'>
                <div className='text-2xl font-medium'>
                    <span className='text-danger font-bold'>404</span> | Page Not Found!
                </div>
                <div>
                    Back to <Link href={"/"} className='text-goldYel hover:text-[#ff9800] hover:text-[17px] underline transition-all'>Home?</Link>
                </div>
            </div>
        </div>
    )
}

export default notFound