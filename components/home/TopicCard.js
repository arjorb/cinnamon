import Image from "next/image";

const Card = () => {
  return (
    <>
      <div>
        <div className=''>
          <Image src={assurance} alt='' className='' />
          <div className='mt-5 flex gap-5 items-center'>
            <h1 className='text-sm font-mont-bold'>Sales</h1>
          </div>
          <div className='mt-2 text-xl flex gap-3'>
            <h1 className='text-[1rem] text-gray-700 font-mont-regular'>Matija Bermanec & l...</h1>
            <div className='flex items-center gap-3'>
              <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
              <h1 className='text-[1rem] text-gray-700 '>2022-10-13</h1>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
              <h1 className='text-[1rem] text-gray-700 '>6min</h1>
            </div>
          </div>
          <div className='text-2xl mt-4 font-mont-bold'>
            Difference in Hiring an <br></br> Agency vs. Freelancers 2.0
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
