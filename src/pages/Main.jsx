import React from 'react';
import Course from '../layouts/Course.jsx';
import About from '../layouts/About';

const Main = () => {
  return(
    <main className='bg-light'>
      <Course></Course>
      <About></About>
    </main>
  );
}

export default Main;