/* eslint-disable react/prop-types */
export const RevenueCard = ({title, amount, orderCount, bg})=> {
    return (
        <div className={`h-fit p-4 ${bg} ${bg === "bg-white" ? "" : "hover:bg-sky-600"}`}>
            <div className={`text-lg font-normal flex gap-2 align-middle ${bg === "bg-white" ? "text-gray-700": ""}`}>
                {title}
                <div className="flex flex-col justify-center hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between pt-4">
                <div className="text-2xl font-bold">
                    $
                    {amount}</div>
                    {orderCount ? <div className={`flex flex-col justify-center font-medium text-base underline  ${bg == 'bg-white' ? "text-blue-500" : "text-white"} hover:cursor-pointer`}> 
                        <div className="flex text-base items-center font-normal">
                            {orderCount} {orderCount > 1 ? "orders" : "order"}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>: <div />}
            </div>
        </div>
    )
}

