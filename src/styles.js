import 'tailwindcss/tailwind.css';

const styles = {

    paddingX: "sm:px-16 px-6 xl:px-3",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
    colorrr:"text-red-600",
    generalPadding:"md:px-[95px]  sm:px-[50px]",
  
    heroHeadText:
      "font-black text-white lg:text-[60px] text-[50px] leading-tight md:leading-[90px] mt-6",
    heroSubText:
      "text-[#dfd9ff] font-medium  lg:leading-[40px] mt-3",
    heroHead2Text:
      "font-black lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[80px] mt-0",

  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",

    slidingLeftText:"initial={{x:-1000}} whileInView={{x:100}} transition={{delay:2.5,duration:2.5}}",
    break:"<br></br>"
      
  };
  
  export { styles };