import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';
import ping from '../../public/ping.webp';
import ceo from '../../public/ceo.webp';
import right from '../../public/right.webp';
import left from '../../public/left.webp';
import quote from '../../public/quote.png';

const Testimonial = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between gap-80 py-48'>
          <div className=''>
            <div className='relative'>
              <h1 className='text-5xl font-bold relative z-10'>They’re consistent, and the communication is good.</h1>
              <Image src={quote} alt='' className='absolute -top-16 -left-20 z-0' />
            </div>
            <p className='my-16 text-lg text-dust-100 '>
              When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the
              impression of being a smaller team that’s focused on customers.
            </p>
            <div className='flex items-center gap-5 my-14'>
              <Image className='w-16 ' src={ceo} alt='' />
              <div>
                <h3 className='text-2xl font-bold'>Garin Toren,</h3>
                <p>CEO, ping</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <Image className='cursor-pointer hover:-translate-y-3 duration-300' src={left} alt='' />
              <Image className='cursor-pointer hover:-translate-y-3 duration-300' src={right} alt='' />
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <Image className='w-96' src={ping} alt='' />
            <button className='text-indigo-500 font-bold text-sm underline underline-offset-4'>VIEW CASE STUDY</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Testimonial;
