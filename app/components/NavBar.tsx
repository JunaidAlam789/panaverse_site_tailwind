import { ReactNode } from 'react';

const Links = ['Dashboard', 'Projects', 'Team'];


export default function NavBar() {


  return (
    <>
       <div className=""> 
       
          <div className="flex flex-wrap border-none justify-between items-center ">
          <div className="bg-white h-12 w-12 rounded-full m-2">
          <img src="./panaverse80_80.jpg" className="h-12 w-12 p-2"/>
          </div>
          {/*  */}
          <ul className="menu flex flex-wrap flex-grow sm:flex-grow-0 order-last sm:order-none sm:shrink-0 text-white font-bold top-0 z-50   shadow-slate-100  bg-indigo-900 bg-opacity-80  rounded-full m-1 ">
          <a className="m-4 " href="/">Home</a>
          <a className="m-4 " href="/metaverse">Metaverse</a> 
          <a className="m-4 " href="/community">Community</a>
          <a className="m-4 ">More</a>
          </ul>
          <div className="flex order-none sm:order-last ">
          <button className="flex-grow flex-shrink-0 h-12 text-white font-bold sm:visible bg-gradient-to-l from-red-900 to-red-400 hover:bg-red-500 hover:border-red-400 hover:border-2  m-2 text-center p-2 px-4 rounded-full" >
          <a href={'https://portal.piaic.org/signup'}>Apply Now</a>
          </button>
          </div>
          </div>

          

        
         
        
        </div>
     
        
        
      
        

      
    </>
  );
}