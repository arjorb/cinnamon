import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';
import arrow from '../../public/arrow.webp';
const Position = () => {
  return (
    <>
      <div className='bg-noise bg-dark-100 bg-center  text-white mt-20 py-40'>
        <Container>
          <div className='flex justify-between'>
            <div className='w-2/5 '>
              <h1 className='text-5xl font-bold my-5'>We're growing</h1>
              <p className='my-5'>
                Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global
                companies! Make the world a better, more connected place.
              </p>
              <Button>See All Positions</Button>
            </div>
            <div className='w-2/5'>
              {/* item 1  */}
              <div className='cursor-pointer flex justify-between items-center group  border-b border-dust-100 py-5 '>
                <h4 className='text-2xl font-bold '>Node.js Backend Developer</h4>
                <Image className=' group-hover:-translate-y-1 duration-300' src={arrow} alt='' />
              </div>
              {/* item 2  */}
              <div className='cursor-pointer flex justify-between items-center group  border-b border-dust-100 py-5 '>
                <h4 className='text-2xl font-bold '>Node.js Backend Developer</h4>
                <Image className=' group-hover:-translate-y-1 duration-300' src={arrow} alt='' />
              </div>
              {/* item 3  */}
              <div className='cursor-pointer flex justify-between items-center group  border-b border-dust-100 py-5 '>
                <h4 className='text-2xl font-bold '>Node.js Backend Developer</h4>
                <Image className=' group-hover:-translate-y-1 duration-300' src={arrow} alt='' />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Position;
