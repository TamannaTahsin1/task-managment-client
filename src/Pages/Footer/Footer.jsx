import { FaFacebook, FaGithub, FaLinkedin, FaTwitterSquare,   } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <div>
        <div className="border border-gray-200 w-full border-x-2"></div>
           <footer className="footer p-10  mt-20">
           
             <aside >
             
               <p className="text-2xl font-semibold flex justify-start items-center">Taskify</p>
               <p className="text-md text-gray-400 font-semibold flex justify-start items-center">
                 Design amazing digital experiences that <br />
                 create more happy in the world.
               </p >
               
               <p className="text-sm text-gray-400 font-semibold">© 2077 Untitled UI. All rights reserved.</p>
             </aside>
             <nav className="md:justify-self-end">
               <div className="grid grid-flow-col gap-4 text-2xl mt-20 lg:ml-40 text-gray-400 ">
                 <a>
                 <FaTwitterSquare />
                 </a>
                 <a>
                 <FaLinkedin />
                 </a>
                 <a>
                 <FaGithub />
                 </a>
                 <a>
                 <FaFacebook />
                 </a>
                 <a>
                 <TbWorld />
                 </a>
               </div>
             </nav>
           </footer>
           </div>
    );
};

export default Footer;