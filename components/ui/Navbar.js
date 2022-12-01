import Image from 'next/image';
import playWhite from '../../public/play.png';
import playDark from '../../public/play-1.png';
import logoWhite from '../../public/logo-white.svg';
import logoDark from '../../public/logo-dark.svg';
import Link from 'next/link';
import Container from './Container';
import Button from './Button';

const Navbar = () => {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 bg-noise bg-dark-100 text-white z-50'>
        <Container>
          <div className='py-6 flex justify-between items-center'>
            <div>
              <Image className='w-40' src={logoWhite} alt='' />
            </div>
            <div className='flex gap-10 items-center'>
              <ul className='flex gap-10'>
                <Link href={'/'}>Projects</Link>
                <Link href={'/'}>Services</Link>
                <Link href={'/'}>About Us</Link>
                <Link href={'/'}>Careers</Link>
                <Link href={'/'}>Blog</Link>
              </ul>
              <button className='border-2 border-white  p-2 rounded-full'>
                <Image className='w-6' src={playWhite} alt='' />
              </button>
              <Button>Contact us</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
