import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Capstone Title Generator</title>
        <meta
          name='description'
          content='This is for thesis for all the student out there. You can use it as much as you want.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Layout />
      <Footer />
    </>
  );
}
