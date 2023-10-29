import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const UserLibrary = () => {


  return (
    <div className='w-full h-full text-white flex'>
        <div className="w-full h-8 flex items-center justify-between px-4">
            <div>
                <AiOutlineSearch className="text-2xl text-stone-400" />
            </div>
            <div className="flex items-center">
                <h1 className="text-sm font-sm text-stone-400">Recents</h1>
                <GiHamburgerMenu className="text-lg text-stone-400 mx-1" />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default UserLibrary;