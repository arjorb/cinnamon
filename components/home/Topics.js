import Link from 'next/link';
import Image from 'next/image';
import assurance from '../../public/assurance.webp';
import sales from '../../public/sales.webp';
import dev from '../../public/dev.webp';
import Container from '../ui/Container';

const Topics = () => {
  return (
    <>
      <Container>
        <div className='py-28 flex flex-col '>
          <div>
            <h1 className='text-6xl leading-normal font-bold pb-16'>
              Stay in the loop <br />
              on tech topics
            </h1>
          </div>

          <div className='grid  grid-cols-3 gap-5'>
            {/* Item 1*/}
            <div>
              <Image src={assurance} alt='' className='' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-bold'>QUALITY ASSURANCE</h1>
              </div>
              <div className='mt-2 flex gap-3 '>
                <h1 className=' text-gray-700'>Danica Bandur</h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-500  w-2 h-2 rounded-full'></div>
                  <h1 className='text-gray-600'>2022-11-24</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 w-2 h-2 rounded-full'></div>
                  <h1 className='text-gray-700 '>6min</h1>
                </div>
              </div>
              <div className='text-xl mt-4 font-bold'>
                Why Cypress is a great <br /> choice for beginners?
              </div>
            </div>

            {/* Item 2 */}
            <div>
              <Image src={sales} alt='' className='' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-bold'>Sales</h1>
              </div>
              <div className='mt-2 flex gap-3'>
                <h1 className='text-gray-600'>Matija Bermanec & l...</h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-500 w-2 h-2 rounded-full'></div>
                  <h1 className=' text-gray-600 '>2022-10-03</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-500 w-2 h-2 rounded-full'></div>
                  <h1 className='text-gray-600 '>6min</h1>
                </div>
              </div>
              <div className='text-xl mt-4 font-bold'>
                Differences in Hiring an <br /> Agency vs. Freelancers 2.0
              </div>
            </div>

            {/* Item 3 */}
            <div>
              <Image src={dev} alt='' className='' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-bold'>Development</h1>
              </div>
              <div className='mt-2 flex gap-3'>
                <h1 className=' text-gray-700'>Samantha Holstead</h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-500 w-2 h-2 rounded-full'></div>
                  <h1 className=' text-gray-600 '>2022-10-03</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-500 w-2 h-2 rounded-full'></div>
                  <h1 className='text-gray-600 '>6min</h1>
                </div>
              </div>
              <div className='text-xl mt-4 font-bold'>
                How Tinder Swindled User <br></br> Experience
              </div>
            </div>
          </div>

          <div className='mt-12'>
            <button className='text-indigo-500 font-bold text-sm underline underline-offset-4'>VIEW MORE BLOGS</button>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Topics;
