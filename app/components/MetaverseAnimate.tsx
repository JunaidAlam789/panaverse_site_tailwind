
  export default function MetaverseAnimate() {
    return (
      <div className="h-full">
        <div className=" flex flex-col sm:flex-row md:flex-row lg:flex-row justify-around items-center" >
           
            <div className="flex-1 animate-pulse p-2 m-2">
             {/*  // h-10 sm:h-10 md:h-12 mt-12 sm-16 */}
             <Illustration className=""/>
             </div>
           
           <div className="flex-[2] flex flex-col  text-gray-500 bg-white rounded-md shadow-md">
           <p className="text-gray-800 bg-gray-200 rounded-lg font-bold text-2xl animate-bounce text-center m-2 p-2">
            What is Metaverse ?</p> 
          
          <p className="text-gray-500 text-justify p-2 m-2">
          
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
    );
  }
  // export const Illustration = (props: IconProps) => {
  export const Illustration = (props: any) => {
    return (
      <img src={'/metaverse.png'} className={props.className}/>
        
          
    
    );
  };
