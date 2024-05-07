import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title:"React commerce",
        img:"/inf and depl.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores doloribus sunt quia, eveniet temporibus ex quae quos consectetur quod assumenda quas harum voluptate voluptas vero est rerum cupiditate! Earum."

    },
    {
        id:2,
        title:"company portfolio",
        img:"/training.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores doloribus sunt quia, eveniet temporibus ex quae quos consectetur quod assumenda quas harum voluptate voluptas vero est rerum cupiditate! Earum."

    },
    {
        id:3,
        title:"Book recommandation App",
        img:"/sdev.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores doloribus sunt quia, eveniet temporibus ex quae quos consectetur quod assumenda quas harum voluptate voluptas vero est rerum cupiditate! Earum."

    },
    {
        id:4,
        title:"Exam App",
        img:"/service logo.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores doloribus sunt quia, eveniet temporibus ex quae quos consectetur quod assumenda quas harum voluptate voluptas vero est rerum cupiditate! Earum."

    }
]

const Single = ({item})=>{
    const ref =useRef();

    const {scrollYProgress}= useScroll({
        target: ref,
        // offset: ["start start", "end start"] 
        }
    )
    const y = useTransform(scrollYProgress, [0,1], [1000, -1000])

    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress}= useScroll({
        target: ref, 
        offset: ["end end", "start start"]
        }
    )
    const scaleX= useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,
    })


  return (
    <div className="portfolio" ref={ref}
    >
        <div className="progress">
            <h1>Featured Works</h1>
            < motion.div style={{scaleX}} className="progressBar">

            </motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
