import Image from 'next/image';
import Container from '../ui/Container';
import optimal from '../../public/optimal.png';
import { cva } from 'class-variance-authority';

const buttonClass = cva('py-5 overflow-hidden', {
  variants: {
    variant: {
      primary: 'bg-green-300',
      secondary: 'bg-purple-800',
      third: 'bg-yellow-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const Card = ({ imageUrl, title, content, variant }) => {
  return (
    <>
      <Container>
        <div className='py-10'>
          <div className={buttonClass({ variant })}>
            <Image className=' hover:scale-110 duration-500' src={imageUrl} alt='' />
          </div>
          <div className='flex gap-4 text-xs text-dust-100 font-bold mt-14'>
            <p className=''>PRODUCT DESIGN</p>
            <p>QUALITY ASSURANCE</p>
          </div>

          <h1 className='text-5xl font-bold w-1/2 my-7'>{title}</h1>
          <p className='text-lg  text-[#525252] w-2/3'>{content}</p>
        </div>
      </Container>
    </>
  );
};

export default Card;
