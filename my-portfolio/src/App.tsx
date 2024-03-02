import React from 'react';
import Profile from './components/Profile';

function App() {
  return (
    <div className='px-4 md:px-12 py-12 md:py-24 flex flex-col h-screen w-screen md:flex-row bg-base'>
      <Profile/>
      <div className='bg-[grey] h-full w-full '></div>
    </div>
  );
}

export default App;
