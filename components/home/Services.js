import Container from '../ui/Container';
import ServiceCard from './ServiceCard';
import product from '../../public/product.webp';
import development from '../../public/development.webp';
import quality from '../../public/quality.webp';
import marketing from '../../public/marketing.webp';
import Button from '../ui/Button';
const Services = () => {
  return (
    <>
      <div className='bg-noise bg-dark-100 bg-center  text-white mt-20 py-40'>
        <Container>
          <div className='flex '>
            <div className='w-2/5'>
              <h1 className='text-5xl font-bold'>Our Services</h1>
            </div>
            <div className='w-3/5 grid grid-cols-2 gap-28'>
              <ServiceCard
                image={product}
                title='Product design'
                content='Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.'
              />
              <ServiceCard
                image={development}
                title='Development'
                content='By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until that’s a fully-fledged digital solution.'
              />
              <ServiceCard
                image={quality}
                title='Quality assurance'
                content='Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing.'
              />
              <ServiceCard
                image={marketing}
                title='Marketing & growth'
                content='By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.'
              />
              <Button>See Our Services</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
