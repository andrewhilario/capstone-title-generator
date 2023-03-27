import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='px-10 flex items-center justify-between md:px-32 lg:px-[35rem] shadow-md'>
        <Link href='/'>
          <div className='flex flex-col text-2xl py-4 font-bold text-slate-500'>
            <h1 className='font-bold text-4xl'>Capstone</h1>
            <h2 className='font-medium'>Title Generator</h2>
          </div>
        </Link>
        <Link href='https://github.com/andrewhilario/capstone-title-generator'>
          <div className='border-2 px-4 py-2 rounded-2xl border-slate-500 text-md text-slate-500 font-semibold text-center transition ease-in hover:bg-slate-500 hover:text-white cursor-pointer'>
            Repo
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
