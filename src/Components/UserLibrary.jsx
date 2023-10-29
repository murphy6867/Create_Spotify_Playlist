import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const UserLibrary = () => {


  return (
    <div className='w-full h-full text-white flex'>
        <div className="w-full h-8 flex items-center justify-between px-4">
            <div className="p-[7px] cursor-pointer hover:bg-stone-800 rounded-full duration-300">
                <AiOutlineSearch className="text-2xl text-stone-400 hover:text-white duration-300" />
            </div>
            <div className="flex items-center p-[7px] cursor-pointer">
                <h1 className="text-sm font-sm text-stone-400 hover:text-white duration-200 hover:text-base">Recents</h1>
                <GiHamburgerMenu className="text-lg text-stone-400 mx-1 hover:text-white duration-200 hover:text-xl" />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default UserLibrary;