import { ReactNode } from 'react';

const Links = ['Dashboard', 'Projects', 'Team'];


export default function NavBar() {


  return (
    <>
       <div className="border px-2"> 
       
          <div className="flex flex-col sm:flex-row justify-center border">
          <img src="./panaverse80_80.jpg" className="h-12 w-12 p-2 ml-auto  mr-auto"/>
          <a className="m-4 ml-auto  mr-auto ">Home</a>
          <a className="m-4 ml-auto  mr-auto">Docs</a> 
          <a className="m-4 ml-auto  mr-auto">Future</a>
          <a className="m-4 ml-auto  mr-auto">More</a>
          
          
          <button className="text-white bg-red-400 hover:bg-red-500  ml-auto mr-auto my-2 p-2 rounded-full" >
          <a href={'https://portal.piaic.org/signup'}>Apply Now</a>
            </button>
            
          </div>

          

        
         
        
        </div>
     
        
        
      
        

      
    </>
  );
}