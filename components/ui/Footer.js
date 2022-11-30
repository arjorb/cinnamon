import Image from 'next/image';
import logo from '../../public/logo-white.svg';
import pangea from '../../public/pangea.svg';
import clutch from '../../public/clutch.webp';
import linkedin from '../../public/linkedin.svg';
import dribbble from '../../public/dribbble.svg';
import behance from '../../public/behance.svg';
import instgram from '../../public/instgram.svg';
import facebook from '../../public/facebook.svg';
import rss from '../../public/rss.svg';
const Footer = () => {
  return (
    <>
      <div className='bg-noise bg-dark-100 text-white '>
        <div className='max-w-container mx-auto px-4 pt-24 '>
          <div className='flex gap-72'>
            {/* left side  */}
            <div className='flex flex-col justify-between h-[60vh]'>
              <div>
                <Image className='w-40' src={logo} alt='' />
                <h1 className='text-2xl font-bold my-3 lg:hidden'>All software, zero bullshit.</h1>
                <div className='grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-0 lg:mt-10 space-y-3'>
                  <ul className='space-y-2'>
                    <li>Home </li>
                    <li>Projects</li>
                    <li>Services</li>
                  </ul>
                  <ul className='space-y-2'>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>

              <p className='underline cursor-pointer'>hello@cinnamon.agency</p>
            </div>

            {/* right side  */}

            <div className=' w-2/4 flex flex-col justify-between'>
              <div>
                <h1 className='text-3xl font-bold'>All software, zero bullshit.</h1>
                <div className='flex flex-wrap gap-10 justify-between mt-12'>
                  <div>
                    <h4 className='font-bold '>Zagreb</h4>
                    <p className='text-sm font-medium text-dust-100 mt-2 '>
                      Slavonska avenija 6, <br /> 10000, Zagreb, Croatia <br /> +385 95 382 9188
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold '>New York</h4>
                    <p className='text-sm font-medium text-dust-100 mt-2 '>
                      500 7th Ave, New York, <br /> NY 10018, United States
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold '>Belgrade</h4>
                    <p className='text-sm font-medium text-dust-100 mt-2 '>
                      Požeška 58 <br /> 11000, Belgrade, Serbia
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-between gap-10'>
                <div className='flex flex-col w-1/2'>
                  <h4 className='font-bold mb-10'>Our newsletter</h4>
                  <input
                    type='text'
                    placeholder='Your Email'
                    className='border-b-2 border-white bg-transparent outline-none h-5'
                  />
                  <button className=' bg-blue-800 px-16 py-2 text-white tracking-wider mt-2'>Subscribe </button>
                </div>
                <div className='-mt-5'>
                  <Image className='w-56 mb-5' src={pangea} alt='' />
                  <Image className='w-56' src={clutch} alt='' />
                </div>
              </div>
            </div>
          </div>

          {/* down side  */}
          <div className='border-t border-gray-800 py-5 mt-10 flex justify-between'>
            <div className='text-dust-100'>
              © 2022 Cinnamon <span className='ml-5 underline'>Privacy Policy </span>
            </div>
            <div className='flex gap-5'>
              <Image src={linkedin} alt='' />
              <Image src={dribbble} alt='' />
              <Image src={behance} alt='' />
              <Image src={instgram} alt='' />
              <Image src={facebook} alt='' />
              <Image src={rss} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
