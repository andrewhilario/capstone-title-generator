import React from 'react';
import Link from 'next/link';
import { IoArrowBackSharp } from 'react-icons/io5';

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <div className='w-full h-[65vh] mt-10 flex flex-col  gap-4 px-10 md:px-32 lg:px-[40rem]'>
        <h1 className='text-2xl font-medium text-slate-500'>
          Please choose your educational attainment{' '}
        </h1>
        <div className='flex flex-col items-center gap-5'>
          <Link href='/college' className='w-full'>
            <button className='w-full px-4 py-2 text-2xl font-semibold border-slate-600 border-2 rounded-lg hover:bg-slate-700 hover:text-white transition duration-200'>
              College
            </button>
          </Link>
          <Link href='/shs' className='w-full'>
            <button className='w-full px-4 py-2 text-2xl font-semibold border-slate-600 border-2 rounded-lg hover:bg-slate-700 hover:text-white transition duration-200'>
              Senior High School
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Layout;
