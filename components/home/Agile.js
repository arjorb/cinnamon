import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';
import agile from '../../public/agile.webp';
const Agile = () => {
  return (
    <>
      <div className='relative bg-dust-200 py-48'>
        <Container>
          <div className='max-w-[950px] flex justify-between'>
            <div className='w-[350px]'>
              <h1 className=' text-6xl font-bold '>Agile team on demand</h1>
            </div>
            <div className='w-[380px]'>
              <p className='text-lg mb-6'>
                By hiring and managing talented people with skills specific to your project, we build you a team that’s
                accomplished, agile and scalable in both directions.
              </p>
              <Button>See How It Works</Button>
            </div>
          </div>
        </Container>
        <Image className='absolute -bottom-2 right-0 ' src={agile} alt='' />
      </div>
    </>
  );
};

export default Agile;
