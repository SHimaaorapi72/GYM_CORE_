import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <div className='hero min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[800px] w-full mx-auto p-4 relative overflow-hidden'>
      {/* طبقة خلفية متحركة */}
     
     

      {/* العنوان مع حركة */}
      <div className='flex flex-col gap-4 z-10'>
        <p className='text-lg sm:text-xl md:text-2xl animate-fade-in-down'>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-pulse-text'>
          Swole<span className='text-blue-400 animate-bounce-letter'>normous</span>
        </h1>
      </div>

      {/* الوصف مع تأثير كتابة */}
      <p className='text-sm sm:text-base font-light'>I hereby acknowledgement that I may become 
            <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local 
            <span className='text-blue-400 font-medium'>mass montrosity </span>, 
        afflicted with severe body dismorphia, unable to fit through doors.</p>

      {/* الزرار مع تأثير متفجر */}
      <Button func={()=>{window.location.href = '#generate'}} text={'Accept & Begin'}/>
      
      {/* جزيئات متحركة في الخلفية */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='w-2 h-2 bg-blue-400 rounded-full absolute top-1/4 left-1/4 animate-particle'></div>
        <div className='w-3 h-3 bg-blue-600 rounded-full absolute top-3/4 right-1/3 animate-particle-delayed'></div>
        <div className='w-1 h-1 bg-blue-300 rounded-full absolute bottom-1/4 left-1/2 animate-particle'></div>
      </div>
    </div>
  );
}