import { ReactNode } from 'react';

const Links = ['Dashboard', 'Projects', 'Team'];


export default function NavBar() {


  return (
    <>
       <div className=""> 
       
          <div className="flex sm:flex-row border justify-between">
          <img src="./panaverse80_80.jpg" className="h-12 w-12 p-2"/>
          <div className="flex flex-row flex-wrap">
          <a className="m-4 " href="/">Home</a>
          <a className="m-4 " href="/metaverse">Metaverse</a> 
          <a className="m-4 " href="/community">Community</a>
          <a className="m-4 ">More</a>
          </div>
          <div className="flex">
          <button className="flex-shrink-0 flex-grow-0 h-10 text-white sm:visible bg-red-400 hover:bg-red-500  my-2 p-2 rounded-full" >
          <a href={'https://portal.piaic.org/signup'}>Apply Now</a>
          </button>
          </div>
          </div>

          

        
         
        
        </div>
     
        
        
      
        

      
    </>
  );
}