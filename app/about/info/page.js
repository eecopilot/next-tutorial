import React from 'react';
import Link from 'next/link';

const AboutInfoPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>AboutInfoPage</h1>
      <Link href='/about'>About page</Link>
    </div>
  );
};

export default AboutInfoPage;
