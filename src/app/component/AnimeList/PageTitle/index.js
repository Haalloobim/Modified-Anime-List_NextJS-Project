const PageTitle = ({ title }) => {
    return (
        <div>
            <h1 className="font-roboto font-sans md:text-2xl text-xl font-extrabold text-[#111111] tracking-normal text-center">
                {title}
            </h1>
            <div class="flex flex-row gap-1  bg-slate-50 my-2">
                <div class="h-[2px] flex-1 bg-[#D1D5DC] rounded mx-12"></div>
            </div>
        </div>

    )
}

export default PageTitle