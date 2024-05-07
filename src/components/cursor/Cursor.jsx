import { useEffect, useState } from "react"
import "./cursor.scss"
import {motion} from "framer-motion"

const cursor = () => {
    const [position,setPosition]=useState({x:0, y:0})

    useEffect(()=>{
        const mouseMove =(e)=>{
            setPosition({x:e.clientX, y:e.clientY})
        }

        window.addEventListener("mouseMove", mouseMove)

        return () =>{
            window.removeEventListener("mouseMove",mouseMove)
        }
    }, [])

    
  return (
    <motion.div 
    className="cursor" 
    animate={{x: position.x+10 , y: position.y+10}}>
      
    </motion.div>
  )
}

export default cursor
