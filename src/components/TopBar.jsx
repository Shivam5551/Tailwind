import { useState } from "react";

/* eslint-disable react/prop-types */
export const TopBar = ({reference})=> {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSideBar = () => {
        if(isOpen) {
            reference.current.className = "hidden w-fit md:w-3/12 fixed bg-slate-900/95 md:flex";
        }
        if (reference && reference.current && !isOpen) {
            // console.log("hovered")
          reference.current.className = "block w-fit md:w-3/12 fixed bg-slate-900/95 md:flex";
          reference.current.style.zIndex = "2";
        }
        setIsOpen(!isOpen);
      };
    return (
        <div className="grid bg-white grid-cols-12">
            <div className="items-center p-2 col-span-1 cursor-pointer flex md:hidden">
                <button  onClick={toggleSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="col-span-5 flex p-4 font-bold items-center md:col-span-4">
                Payouts
                <div className="flex pl-2 flex-col justify-center hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <span className="font-normal text-xs hidden sm:flex items-center pl-1">
                    How it works
                </span>
            </div>
            <div className="col-span-5 relative p-4 md:col-span-4">
                <div className="absolute ps-6 inset-y-0 start-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <input placeholder="Search Features, tutorials, etc." className="p-2 rounded-full ps-8 w-full bg-slate-100"/>
            </div>
            <div className="col-span-4 hidden p-2 justify-end gap-2 md:flex">
                <div className="flex flex-col justify-center rounded-full bg-gray-200 p-4 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-4 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                    </svg>
                </div> 
                <div className="flex flex-col justify-center rounded-full bg-gray-200 p-4 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-4 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </div>
            </div>
            <button className={`${isOpen ? "block" : "hidden"} col-span-1 z-10 justify-center mr-2 p-0 bg-slate-200 rounded-md my-4 items-center flex md:hidden text-black`} onClick={toggleSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-4 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
            </button>
        </div>
    )
}
