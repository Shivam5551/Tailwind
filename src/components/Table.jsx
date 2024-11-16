/* eslint-disable react/prop-types */
const PrintTable = ({ orderId, status, transactionId, refundDate, orderAmt }) => {
return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b-2 py-2 lg:grid-cols-5">
    <div className="text-blue-600 font-semibold">{orderId}</div>
    <div className="flex items-center gap-2"><div className={`p-1 w-fit rounded-full ${status === "Successful" ? "bg-green-500" : status === "Unsuccessful" ? "bg-red-600" : "bg-gray-400"}`}/> {status}</div>
    <div className="hidden md:block">{transactionId}</div>
    <div className="hidden lg:block">{refundDate}</div>
    <div className="hidden lg:block">{orderAmt}</div>
    </div>
);
};
export const Table = () => {
const tableData = [
    {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131565868248",
    refundDate: "Today, 08:51 PM",
    orderAmt: "$ 3,532.00",
    },
    {
    orderId: "#281210",
    status: "Processing",
    transactionId: "131565868248",
    refundDate: "Yesterday, 08:51 PM",
    orderAmt: "$ 1,532.00",
    },
    {
    orderId: "#281211",
    status: "Unsuccessful",
    transactionId: "131565868248",
    refundDate: "Yesterday, 08:10 PM",
    orderAmt: "$ 1,342.00",
    },
    {
    orderId: "#281210",
    status: "Successful",
    transactionId: "131565868248",
    refundDate: "Yesterday, 10:32 PM",
    orderAmt: "$ 878.50",
    },
];

return (
    <div className="flex rounded-xl overflow-clip flex-col ml-8 mr-8 bg-white p-4">
    <div className="relative mb-4 w-full flex justify-between">
        <div className="absolute inset-y-0 left-0 flex w-fit items-center ps-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="size-6 h-4 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </div>
        <input
        placeholder="Order ID or Transaction ID"
        className="p-2 ps-9 w-full sm:w-1/2 bg-slate-100 border rounded-full border-gray-400"
        />
        <div className="flex gap-2">
            <button className="bg-white hover:bg-slate-100 hidden sm:flex items-center p-2 border rounded-2xl  hover:rounded-full transition-all duration-200 border-gray-400">Sort By 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
            </button>
            <button className="bg-white hover:bg-slate-100 items-center p-2 border rounded-2xl hover:rounded-full transition-all duration-200 border-gray-400 hidden lg:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </button>
        </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-bold border-b-2 pb-2 lg:grid-cols-5">
        <div>Order ID</div>
        <div>Status</div>
        <div className="hidden md:block">Transaction ID</div>
        <div className="hidden lg:block">Refund Date</div>
        <div className="hidden lg:block">Order Amount</div>
    </div>
    {tableData.map((t, key) => (
        <PrintTable
        key={key}
        orderId={t.orderId}
        status={t.status}
        transactionId={t.transactionId}
        refundDate={t.refundDate}
        orderAmt={t.orderAmt}
        />
    ))}
    
    </div>
);
};
    