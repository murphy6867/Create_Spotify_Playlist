import { LuLibrary } from "react-icons/lu";
import UserLibrary from "./UserLibrary";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const Library = () => {

  
  return (
    <div className="w-full h-full flex flex-col bg-[#121212] p-1 rounded-xl">
        <div id="Nav_Header"
        className="w-full h-12 flex items-center justify-between px-4 bg-transparent">
          <div className="flex">
            <LuLibrary className="text-2xl text-stone-300" />
            <h1 className="text-md font-medium text-stone-300 px-3">Your Library</h1>
          </div>
          <div className="flex gap-3">
            <div className="p-[7px] cursor-pointer hover:bg-stone-800 rounded-full">
              <BsPlusLg className="text-stone-300 text-lg hover:text-white" />
            </div>
            <div className="p-[7px] cursor-pointer hover:bg-stone-800 rounded-full">
              <AiOutlineArrowRight className="text-stone-300 font-bold text-lg hover:text-white" />
            </div>
          </div>
        </div>
        <div id="Filter"
        className="w-full h-12 flex items-center px-4 py-7 bg-transparent">
          <ul className="flex w-full gap-2">
            <li className="text-sm text-white font-light bg-stone-800 py-[4px] px-[10px] rounded-2xl cursor-pointer hover:bg-stone-700 duration-500">
              Playlists
            </li>
            <li className="text-sm text-white font-light bg-stone-800 py-[5px] px-[10px] rounded-2xl cursor-pointer hover:bg-stone-700 duration-500">
              Artists
            </li>
            <li className="text-sm text-white font-light bg-stone-800 py-[5px] px-[10px] rounded-2xl cursor-pointer hover:bg-stone-700 duration-500">
              Albums
            </li>
            <li className="text-sm text-white font-light bg-stone-800 py-[5px] px-[10px] rounded-2xl cursor-pointer hover:bg-stone-700 duration-500">
              Podcasts & Shows
            </li>
          </ul>
        </div>
        <UserLibrary />
    </div>
  )
}

export default Library