import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';
import college from '../../public/college.webp';
import collegeCinn from '../../public/collegeCinn.webp';
const College = () => {
  return (
    <>
      <div className='relative py-44'>
        <Container>
          <div className='max-w-[950px] flex justify-between'>
            <div className='w-[350px]'>
              <Image src={collegeCinn} alt='' />
            </div>
            <div className='w-[380px]'>
              <p className='text-lg mb-6'>
                Seize the unique opportunity to participate in a wide range of courses conducted by professionals with
                an impeccable reputation in the digital industry.
              </p>
              <Button>See How It Works</Button>
            </div>
          </div>
        </Container>
        <Image className='absolute bottom-0 right-0 ' src={college} height={500} alt='' />
      </div>
    </>
  );
};

export default College;
