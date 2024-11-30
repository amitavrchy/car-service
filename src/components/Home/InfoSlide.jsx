import Image from 'next/image'
import React from 'react'

const InfoSlide = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:h-[400px] mt-10 mb-10">
      <div className="relative w-full md:w-2/6">
        <div className="relative h-[250px] w-[80%] mx-auto md:absolute md:h-[300px] md:w-[70%] md:top-0 md:left-0">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="Person"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="relative h-[200px] w-[85%] mx-auto mt-4 md:absolute md:h-[200px] md:bottom-[40px] md:right-[-20px] md:w-[60%]">
          <Image
            className="border-8 border-white rounded-xl"
            src="/assets/images/about_us/parts.jpg"
            alt="Parts"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-full md:w-4/6 p-10 md:ml-10">
          <div className='md:w-10/12'>
            <p className='text-primary font-bold'>About Us</p>
            <h1 className='font-bold text-3xl md:w-1/2 mt-3'>We are qualified & of experience in this field</h1>
            <p className='my-2 text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className='my-2 text-justify'>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className='btn bg-primary hover:text-primary hover:border-2 hover:border-primary hover:bg-transparent text-white mt-2'>Get More Info</button>
          </div>
      </div>
    </div>
  );
};

export default InfoSlide;
