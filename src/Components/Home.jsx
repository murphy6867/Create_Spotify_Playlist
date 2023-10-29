import { FiBell } from 'react-icons/fi';
import { MdDownloading } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
  return (
    <main className="w-full h-full bg-[#0B1D16] rounded-lg p-4">
      <header className="w-full h-12 flex justify-between items-center bg-blue-500">
        <div className='w-20 h-full flex items-center justify-center gap-2 ms-1'>
          <button className='w-8 h-8 flex items-center justify-center text-xl bg-black rounded-full text-stone-400'>
            <IoIosArrowBack className='text-2xl' />
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-xl bg-black rounded-full text-stone-400'>
            <IoIosArrowForward className='text-2xl' />
          </button>
        </div>
        <div className='w-56 h-full flex gap-2 items-center'>
          <div className='flex justify-center items-center text-white bg-black px-2 py-[5px] rounded-2xl cursor-pointer'>
            <MdDownloading className='font-lg text-lg hover:text-[22px]' />
            <p className='text-xs hover:text-[14px] font-semibold ms-1'>Install App</p>
          </div>
          <div className='w-7 h-7 flex items-center justify-center bg-black rounded-full cursor-pointer'>
            <FiBell className='text-stone-300 text-lg hover:text-white' />
          </div>
          <div className='w-7 h-7 flex items-center justify-center bg-black rounded-full cursor-pointer'>
            <BiUserCircle  className='w-full h-full text-stone-300 text-lg hover:text-white' />
          </div>
        </div>
      </header>
    </main>
  )
}

export default Home