
  export default function MetaverseAnimate() {
    return (
      <div className="">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row
        p-8 md:p10" >
           
            <div className="animate-pulse p-40">
             {/*  // h-10 sm:h-10 md:h-12 mt-12 sm-16 */}
             <Illustration className=""/>
             </div>
           <div className="flex flex-column">
           <div className="animate:bounce p-10 max-w-4xl text-gray-500 bg-white rounde-md shadow-md">
           <p className="text-gray-500 text-2xl sm:2xl text-center animate-bounce ">
            What is Metaverse ?</p> 
          
          <p className="text-gray-500  text-justify mt-2">
          
A communal environment or virtual world made possible by the fusion of physical and virtual reality is referred to as the "metaverse." Users can engage in shared interactions with a wide range of virtual objects and environments in this imagined networked virtual world. Various technology businesses are aggressively pursuing the science fiction idea of a metaverse in an effort to give users a seamless and immersive experience.

Metaverse is a highly-anticipated future version of the internet where users are able to fully immerse themselves in a shared, virtual world. It is expected to have a significant impact on a variety of industries and bring people together from all over the world, but also raises important questions about privacy and security.

Program of Studies

The first three quarters are shared by all specialties and are dedicated to studying

Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development

The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs)
          </p>
          </div> 
          </div>
                    
        </div>
      </div>
    );
  }
  // export const Illustration = (props: IconProps) => {
  export const Illustration = (props: any) => {
    return (
      <img src={'/metaverse.png'} className={props.className}/>
        
          
    
    );
  };
