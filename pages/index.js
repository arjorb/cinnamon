import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/home/Hero';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

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
      <main className='h-40'></main>
      <Footer />
    </div>
  );
}
