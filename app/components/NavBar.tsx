import { ReactNode } from 'react';

const Links = ['Dashboard', 'Projects', 'Team'];


export default function NavBar() {


  return (
    <>
       <div className=""> 
       
          <div className="flex flex-wrap border justify-between items-center">
          <img src="./panaverse80_80.jpg" className="h-12 w-12 p-2"/>
          {/*  */}
          <ul className="flex flex-wrap order-last sm:order-none sm:shrink-0 ">
          <a className="m-4 " href="/">Home</a>
          <a className="m-4 " href="/metaverse">Metaverse</a> 
          <a className="m-4 " href="/community">Community</a>
          <a className="m-4 ">More</a>
          </ul>
          <div className="flex order-none sm:order-last ">
          <button className="flex-grow flex-shrink-0 h-10 text-white sm:visible bg-red-400 hover:bg-red-500  my-2 p-2 rounded-full" >
          <a href={'https://portal.piaic.org/signup'}>Apply Now</a>
          </button>
          </div>
          </div>

          

        
         
        
        </div>
     
        
        
      
        

      
    </>
  );
}