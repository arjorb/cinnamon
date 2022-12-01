import Container from '../ui/Container';

const Hero = () => {
  return (
    <>
      <div className='bg-noise bg-dark-100 bg-center h-[100vh] text-white'>
        <Container>
          <h1 className='text-[5.3rem] font-extrabold pt-48 leading-tight'>
            Results focused design & development agency.
          </h1>
          <p className='text-xl w-2/4 mt-6 tracking-wide leading-snug text-dust-100'>
            Extend your team with our high performing specialists or hire us to shape your product from scratch. Either
            way, we’ll get your product off the ground and build a momentum for your success.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Hero;
