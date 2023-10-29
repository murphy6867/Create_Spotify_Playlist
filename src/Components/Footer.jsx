import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Player from "./Player";

const Footer = ({ currentTrack }) => {

  return (
    <div className="w-full h-full flex gap-3 p-1">
      <div className="w-4/12 h-full flex items-center p-1">
        <div className="w-16 h-full bg-gray-700 rounded-lg">
          <img src="" alt="" />
        </div>
        <div className="w-auto h-10 ms-3">
          <h1 className="text-base font-light text-white">title text</h1>
          <p className="text-sm font-ligh text-stone-400">artis </p>
        </div>
        <div>
          <AiOutlineHeart className="text-xl mx-4 text-stone-400" />
        </div>
      </div>
      <div className="w-5/12 h-full bg-green-500">
        <Player />
      </div>
      <div className="w-3/12 h-full bg-green-500">

      </div>
    </div>
  )
}

export default Footer