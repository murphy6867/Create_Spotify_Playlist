import { FiBell } from 'react-icons/fi';
import { MdDownloading } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {

    const fetchData = async () => {
      const url = 'https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ddfb51b4f6mshf5a5058b304c2bap1d7363jsn3d4e2d2c5a08',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
  }
    
  fetchData();

  }, [])





  return (
    <main className="w-full h-full bg-[#0B1D16] rounded-lg p-4">
      <header className="w-full h-12 flex justify-between items-center">
        <div className='w-20 h-full flex items-center justify-center gap-2 ms-1'>
          <button className='w-8 h-8 flex items-center justify-center text-xl bg-black rounded-full text-stone-400'>
            <IoIosArrowBack className='text-2xl' />
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-xl bg-black rounded-full text-stone-400'>
            <IoIosArrowForward className='text-2xl' />
          </button>
        </div>
        <div className='w-auto h-full flex gap-3 px-2 items-center'>
          <div className='flex justify-center items-center text-white bg-black px-[14px] py-[5px] rounded-2xl cursor-pointer'>
            <MdDownloading className='font-lg text-lg hover:text-[22px]' />
            <p className='text-[14px] hover:text-[14px] font-semibold ms-1'>Install App</p>
          </div>
          <div className='w-7 h-7 flex items-center justify-center bg-black rounded-full cursor-pointer'>
            <FiBell className='text-stone-300 text-lg hover:text-white' />
          </div>
          <div className='w-7 h-7 flex items-center justify-center bg-black rounded-full cursor-pointer'>
            <BiUserCircle  className='w-full h-full text-stone-300 text-lg hover:text-white' />
          </div>
        </div>
      </header>
      <section className='w-full h-auto overflow-auto bg-green-500'>

      </section>
    </main>
  )
}

export default Home