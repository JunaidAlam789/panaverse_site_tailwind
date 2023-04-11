  "use client"
  import { useEffect } from "react";
  import Image from "next/image";
  import AOS from 'aos'
  import 'aos/dist/aos.css';
  export default function Nutshell() {
    useEffect(()=>{AOS.init();},[])
    return (
      <div className="h-screen shadow-2xl flex  items-center " >
        <span className="w-1/3" >
          {/* <img src={'/Wallet.png'}  height={100} width={100}  alt="Pod Chair" /> */}
          <img src={'/hero-slide-1.png'} className="bg-transparent" alt="Pod Chair"/>
          {/* <img src={'/Pot.png'} height={100} width={100} alt="Pot of Coins"/>
          <img src={'/Currency.png'} height={100} width={100} alt="Currency"/> */}
          </span>
        <span className="h-4/5 w-2/3 flex flex-col justify-around items-center ">
            
              <span className="  text-xl sm:text-4xl font-bold text-center
              bg-clip-text text-transparent bg-gradient-to-l from-white to-white" data-aos="fade-right" >
              The Program in a NutShell
              </span>
          
            <span className="font-bold text-base text-center sm:text-xl md:text-2xl lg:text-3xl text-white sm:font-bold md:font-bold lg:font-bold
            bg-clip-text text-transparent bg-gradient-to-l from-orange-400 to-purple-600 via-pink-500" data-aos="fade-right" >
            Earn While you Learn
            </span>
            
           <span className="flex flex-col justify-between items-center " > 
          <span className="font-bold text-center sm:justify-center text-white text-sm sm:text-xl " data-aos="fade-right">
          In this brand-new type of curriculum, students will learn how to make money
          and boost exports in the classroom and will begin doing so within six months of the program's beginning.
          It resembles a cross between a corporate venture and an educational project.</span>
          
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