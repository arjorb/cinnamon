import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>CINNAMON | All software, zero bullshit.</title>
        <meta name='description' content='The one-stop shop to design, develop and deploy your next digital project.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl text-[#049c80] font-bold underline'>Welcome to Cinnamon</h1>
    </div>
  );
}
