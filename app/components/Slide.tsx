//import { useRef } from "react";
//import { useInView } from "framer-motion";
//import "../styles.css";

/* viewBox="124 124 148 148" */

export default function Slide() {
  return (
    <>
<button type="button" className="bg-indigo-500">
  <div className="animate-pulse h-125 w-125 mr-3 text-6xl" >
    Hello
  </div>
  
  Processing...
</button>
    </>
  );
}
export const Illustration = (props: any) => {
  return (
    <img src={'/metaverse.png'} className={props.className}/>
      
        
  
  );
};

