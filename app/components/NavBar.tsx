import { ReactNode } from 'react';

const Links = ['Dashboard', 'Projects', 'Team'];


export default function NavBar() {


  return (
    <>
       <div className="border px-2"> 
       
          <div className="flex flex-col sm:flex-row justify-center border">
          <img src="./panaverse80_80.jpg" className="h-12 w-12 p-2  mr-auto"/>
          
          <a className="m-4 mr-auto ml-auto ">Home</a>
          <a className="m-4 mr-auto ml-auto  ">Docs</a> 
          <a className="m-4 mr-auto ml-auto ">Future</a>
          <a className="m-4 mr-auto ml-auto ">More</a>
          
          
          <button className="text-white collapse sm:visible bg-red-400 hover:bg-red-500  ml-auto mr-auto my-2 p-2 rounded-full" >
          <a href={'https://portal.piaic.org/signup'}>Apply Now</a>
            </button>
            
          </div>

          

        
         
        
        </div>
     
        
        
      
        

      
    </>
  );
}