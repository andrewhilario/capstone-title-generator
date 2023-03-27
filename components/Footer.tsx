import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='py-16 bg-slate-300 w-full'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-2xl font-medium text-slate-500'>
          Capstone Title Generator
        </h1>
        <h2 className='text-xl font-medium text-slate-500'>© 2021</h2>
      </div>
    </footer>
  );
};

export default Footer;
