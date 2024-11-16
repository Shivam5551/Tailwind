import { Fragment, useRef } from "react";
import { Cards } from "./components/Cards";
import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/TopBar";
import { Table } from "./components/Table";

function App() {
  const sideBarRef = useRef();
  return (
    <Fragment>
      <div className="w-screen flex flex-row">
        <div  ref={sideBarRef} className="hidden bg-slate-900/95 md:block h-full w-3/12 fixed">
          <SideBar/>
        </div>
      <div className="flex flex-col w-full md:w-9/12 ml-auto bg-stone-100">
        <TopBar reference={sideBarRef}/>
        <Cards />
        <Table/>
      </div>
      </div>
    </Fragment> 
  )
}


export default App;