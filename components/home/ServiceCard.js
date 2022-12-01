import Image from 'next/image';

const Card = ({ image, title, content }) => {
  return (
    <>
      <div>
        <Image src={image} alt='' />
        <h1 className='text-2xl font-bold my-4'>{title}</h1>
        <p className='text-dust-100'>{content}</p>
      </div>
    </>
  );
};

export default Card;
