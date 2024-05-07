import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () =>{
    return(
        <div className="navbar">
            {/* {sidebar} */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}}
                 animate= {{opacity:1, scale:1}} 
                 transition={{duration:0.5}}
                 className="j">
                    Jerry dev</motion.span>
                <div className="social">
                    <a href="www.facebook.com"><img src="/facebook.png" alt="" /></a>
                    <a href="www.instagram.com"><img src="/instagram.png" alt="" /></a>
                    <a href="www.youtube.com"><img src="/youtube.png" alt="" /></a>
                    <a href="www.dribble.com"><img src="/dribbble.png" alt="" /></a>
                  
                </div>
            </div>

        </div>
    )
}
export default Navbar