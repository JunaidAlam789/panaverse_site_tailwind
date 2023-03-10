import { ReactNode } from 'react';



const Logo = (props: any) => {
  return (
    <div>
    <img src="/panaverse80_80.jpg" className={props.className}/>
    </div>
  );
};



export default function Footer() {
  return (
    
      <div className="p-2 bg-white/100">
        <div className="flex flex-col sm:flex-row justify-center">
        <div className="pr-20 pt-10 pl-2">
        <Logo className="h-16 w-16 p-2" />
        <p className="pl-2"> Panaverse DAO </p>
        </div>
       
          
          <div className="flex flex-col p-4">
            <p className="p-2 pb-3 font-medium" >Company</p>
            <a className="p-2" href={'#'}>Panverse DAO</a>
            <a className="p-2" href={'#'}>Panaverse Community</a>
            
          </div>
          <div className="flex flex-col p-4">
            <p className="p-2 pb-3 pr-2 font-medium">About Us</p>
            <a className="p-2 pr-2" href={'#'}>Faculty</a>
            <a className="p-2 pr-2"href={'#'}>Locations</a>
            
          </div>
           <div className="flex flex-col p-4">
            <p className="p-2 pb-3 font-medium">Follow Us</p>
            <a className="p-2" href={'#'}>Facebook</a>
            <a className="p-2" href={'#'}>Twitter</a>
           </div>
        </div>
      </div>
  
  );
}