import "./hero.scss"
import {motion} from "framer-motion" 

const textVariant={
    initial:{
        x: -500,
        opacity:0,

    },
    animate:{
       x:0,
       opacity:1,
       transition:{
        duration:1,
        StaggerChildren:0.1,
       } 
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const sliderVariants={
    initial:{
        x: 0,
       

    },
    animate:{
       x:"-220%",
       transition:{
        repeat: Infinity,
        repeatType:"mirror",
        duration:20,
       } 
    },
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">        
            <motion.div 
            className="textContainer" 
            variants={textVariant} 
            initial="initial" 
            animate="animate">
                <motion.h2 variants={textVariant}>JERUSALEM GIRMA</motion.h2>
                <motion.h1 variants={textVariant}>Web developer and UI designer</motion.h1>
                <motion.div variants={textVariant} className="buttons">
                    <motion.button variants={textVariant}>See The Latest Works</motion.button>
                    <motion.button variants={textVariant}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariant}  animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Front End Developer Web UI designs
            </motion.div>
            <div className="imageContainer">
                <img src="/hero1.png" alt="" />
        
        </div>
    </div>
  )
}

export default Hero
