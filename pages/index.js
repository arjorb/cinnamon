import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/home/Hero';
import MainCard from '../components/home/MainCard';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import optimal from '../public/optimal.png';
import prices from '../public/prices.webp';
import charge from '../public/charge.webp';
import Services from '../components/home/Services';
import Agile from '../components/home/Agile';
import Testimonial from '../components/home/Testimonial';
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>CINNAMON | All software, zero bullshit.</title>
        <meta name='description' content='The one-stop shop to design, develop and deploy your next digital project.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <main>
        <MainCard
          variant='primary'
          imageUrl={optimal}
          title='Corrily: Optimize prices to maximize revenue'
          content='Corrily tailors your prices and discounts to the needs of different user segments in order to increase your
          revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and
          stunning website redesign.'
        />
        <MainCard
          variant='secondary'
          imageUrl={prices}
          title='Fiona: Engage & Decide'
          content='Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.'
        />
        <MainCard
          variant='third'
          imageUrl={charge}
          title='Ukulele:
          The largest ukulele tabs archive'
          content='Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.'
        />
      </main>
      <Services />
      <Agile />
      <Testimonial />
      {/* <main className='h-[30vh]'></main> */}
      <Footer />
    </div>
  );
}
