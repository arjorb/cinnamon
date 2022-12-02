import Image from 'next/image';
import Button from '../ui/Button';
import global from '../../public/global.webp';
const Project = () => {
  return (
    <>
      <section className='relative bg-dust-200 pt-44 pb-40   '>
        <div className='max-w-container mx-auto flex'>
          <div className='m-auto flex flex-col items-center gap-10'>
            <h1 className='text-6xl pb-5 font-bold text-center leading-snug '>
              Have a project in mind? <br /> Let's work together.
            </h1>
            <Button>Contact us</Button>
          </div>
        </div>
        <Image src={global} alt='' className='absolute bottom-0 left-0 ' width={400} />
      </section>
    </>
  );
};

export default Project;
