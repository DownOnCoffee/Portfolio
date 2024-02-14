import React from 'react';
import { styles } from "../styles";
import '../index.css';

const Contact = () => {
  const textstyle="text-[#b6b3b3] opacity-70 font-sans lg:text-[15px] sm:text-[35px]  xs:text-[20px] text-[16px]"
  return (
    <>
    <div className='flex justify-center mt-10 flex-col items-center gap-4 bg-[#0b0b0b] p-5'>
      <p className={`glow hover:text-black transition duration-500 text-[#ffffff] font-serif opacity-60  lg:text-[23px] sm:text-[35px] xs:text-[20px] text-[16px]  `}>Get in touch with me !</p>
      <p className={textstyle}>Manya Raghuvanshi</p>
      <p className={textstyle}>manyaraghuvanshi@gmail.com</p>
      <p className={textstyle}>www.linkedin.com/in/manyaraghu</p>
    </div>
    
    </>
  );
}

export default Contact