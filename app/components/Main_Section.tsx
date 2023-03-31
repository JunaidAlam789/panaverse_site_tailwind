  "use client"
  import { useEffect } from "react";
  import AOS from 'aos'
  import 'aos/dist/aos.css';
  export default function Main_Section() {
    useEffect(()=>{AOS.init();},[])
    return (
      <div className="h-screen shadow-2xl  bg-gradient-to-bl from-blue-100 to-blue-900 " >
        <span className="h-4/5 flex flex-col justify-around items-center ">
            
              <span className="  text-xl sm:text-2xl font-bold text-center
              bg-clip-text text-transparent bg-gradient-to-l from-gray-900 to-black" data-aos="fade-right" >
              Certified Web 3.0 and Metaverse Developer
              </span>
          
            <span className="font-bold text-base text-center sm:text-xl md:text-2xl lg:text-3xl text-red-400 sm:font-bold md:font-bold lg:font-bold" data-aos="fade-right" >
            A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
            </span>
            
           <span className="flex flex-col justify-between items-center " > 
          <span className="font-bold text-center sm:justify-center text-gray-900 text-sm sm:text-xl md:text-2xl" data-aos="fade-right">
          Getting Ready for the Next Generation and Future of the Internet</span>
          <span className="visible font-bold text-center sm:justify-center text-gray-900 text-sm sm:text-xl md:text-2xl" data-aos="fade-right">
          Join a 13 Trillion Dollar Industry with 5 Billion Users</span>
          </span>
          <span className="flex flex-col sm:flex-row" data-aos="fade-right">
            <button className="mx-2 px-2 animate-bounce  text-white h-10 rounded-full bg-red-400 hover:bg-red-500">
             <a href={'https://portal.piaic.org/signup'}>Apply Now</a>
            </button>
            <button className="mx-2 px-2 text-white rounded-full h-10 bg-gray-400 border-gray-400 border-4 hover:border-red-400">
              Learn more
            </button>
            </span>
          
        </span>
      </div>
    );
  }
  
  export const Illustration = () => {
    return (
      <></>
    );
  };