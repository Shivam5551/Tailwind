import { RevenueCard } from "./RevenueCard"

export const Cards = ()=> {
    return (

      <div className="flex flex-col w-full gap-4 p-4 bg-stone-100 ">
        <div className="flex flex-col">
            <div className="p-4 flex justify-between items-center">
                <div className="font-semibold text-2xl">Overview</div>
                <button className="cursor-pointer flex gap-2 border p-2 rounded-md shadow-sm">
                    This Month
                    <div className="flex flex-col justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-white shadow-md rounded-md overflow-hidden flex flex-col">
              <RevenueCard title={"Next Payout"} amount={"2,312.00"} orderCount={23} bg={"bg-sky-700"}/>
            <div className="flex justify-between p-4 bg-sky-800">
              <div>Next Payout date: </div>
              <div>Today, 4:00 PM</div>
            </div>
          </div>
            <div className="shadow-xl rounded-md overflow-hidden h-fit">
                <RevenueCard title={"Amount Pending"} amount={"92,450.50"} orderCount={10} bg={"bg-white"}/> 
            </div>
            <div className="shadow-xl rounded-md overflow-hidden h-fit">
                <RevenueCard title={"Amound Processed"} amount={"25,105.00"} orderCount={0} bg={"bg-white"}/>
            </div>
          </div>
          <div className="pt-4 font-semibold text-xl">
              Trascations | This Month
          </div>
          <div className="col-span-1">
            <button disabled className="cursor-wait mr-4 items-center text-gray-800 bg-slate-200 font-mono font-medium p-2 pl-4 pr-4 rounded-full">
              Payouts (22)
            </button>
            <button className="bg-blue-500 items-center text-white font-mono font-medium p-2 pl-4 pr-4 rounded-full hover:bg-blue-700">
              Refunds (5)
            </button>
          </div>
        </div>
    )
  }