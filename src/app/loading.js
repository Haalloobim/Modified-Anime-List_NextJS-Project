import React from 'react'

const loading = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-slate-100 mx-auto'>
        <div className='p-7 px-10 rounded-xl bg-slate-50 shadow-2xl  flex flex-col items-center gap-3'>
            <div class="deez-loader"></div>
            <div className='text-lg font-medium'>
                Loading...
            </div>
        </div>
    </div>
  )
}

export default loading