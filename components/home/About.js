import Image from 'next/image';
import about from '../../public/meet.webp';
import Button from '../ui/Button';
import Container from '../ui/Container';

const About = () => {
  return (
    <>
      <div className='relative bg-dust-200 py-56'>
        <Container>
          <h1 className='text-5xl font-bold'>Who we are</h1>
          <p className=' text-lg w-1/3 my-10'>
            Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the
            market throughout 20 different countries.
          </p>
          <Image className='absolute bottom-72 right-0 ' height={600} src={about} alt='' />
          <div className='flex gap-40 text-xl font-bold mt-10'>
            <ul className='space-y-7'>
              <li>Product design</li>
              <li>Web development</li>
              <li>Mobile development</li>
              <li>Quality assurance</li>
              <li>Marketing</li>
            </ul>

            <ul className='space-y-7'>
              <li>Project management</li>
              <li>Human resources</li>
              <li>Sales</li>
              <li>Fluffy friends</li>
            </ul>
          </div>
          <div className='mt-40'>
            <Button>Read About Us</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
