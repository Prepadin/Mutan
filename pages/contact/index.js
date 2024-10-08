
import { Layout } from 'layouts/default'
import s from './home.module.scss'
import cn from 'clsx'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

// const WebGL = dynamic(
//   () => import('components/webgl').then(({ WebGL }) => WebGL),
//   { ssr: false }
// )


const Scene = dynamic(() => import ("components/explosion"), {
  ssr: false,
})

const WebGL = dynamic(
  () => import('components/webglos').then(({ WebGL }) => WebGL),
  { ssr: false }
)

// const Scene = dynamic(() => import ("components/explosion"), {
//   ssr: false,
// })

// const WebGL = dynamic(
//   () => import('components/explosion').then(({ Scene }) => Scene),
//   { ssr: false }
// )


export default function Contact()  {
    
const container =  useRef();
const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']

})

    return(
        <>
        <Layout className={s.home} >
        <main className={s.conta}>
        <div className={s.canvaso}>
        <WebGL />
      </div>
         
         <div >
          <h1  className="about">Contact</h1>
          </div>     
         
          <div style={{height: "80vh"}}></div>
        <div ref={container}>
        <Slider progress={scrollYProgress} direction="left"/>  
        <Slider progress={scrollYProgress} direction="right"/>
        {/* <Slider progress={scrollYProgress} direction="left"/> */}
        </div>
        <div style={{height: "50vh"}}></div>
        <div>
        
        <div className={s.containerweb}>
          <div id='firstCircle' className='prvo'>
          <h2 className={cn(s.sticky, 'h3')}>
          YOU'RE NEVER FAR FROM PREPAD
            </h2>  
            <div className={s.canvas}>
        <Scene />
      </div>  
        </div>
        <div className={s.drugo}>
        <div>
        <h3 className={cn(s.title, 'h4')}>
              GET IN TOUCH
              </h3>
          {/* <div style={{height: "1vh"}}></div> */}
        <p className="p">
          INFO@PREPAD.SI <br/>
          +386(0)69716034
        </p>
          </div>
          <div>
          <div style={{height: "13vh"}}></div>
        <div className={s.separate}>
          <div className={s.leviblok}>
            <div>
            <h3 className={cn(s.title, 'h4')}>
              OUR ADDRESS
              </h3>
              {/* <div style={{height: "1vh"}}></div> */}
             <p className='p'>
              PREPAD D.O.O. <br/>
              GRADNIKOVE BRIGADE 11 <br/>
              NOVA GORICA <br/>
              SLOVENIJA
             </p>
              </div>
              <div style={{height: "13vh"}}></div>
            <div>
            <h3 className={cn(s.title, 'h4')}>
              CONNECT WITH US
              </h3>
              {/* <div style={{height: "1vh"}}></div> */}
              <p className='p'>
               
               <a href="https://www.instagram.com/prepad.si"> INSTAGRAM </a>  <br/>
               <a href="https://www.youtube.com/@Prepad-doo"> YOUTUBE </a>
              </p>
              </div>
              </div>    
              </div>
              </div>
              </div>
              </div>        
              </div>
              {/* <div style={{height: "50vh"}}></div> */}
          </main>        
          </Layout>
        </>
 )
}


const Slider = (({progress, direction}) => {
    const dir = direction == "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [-150 * dir, 150 * dir])
    return (
    <motion.div className={s.vision2} style={{x}}>

    <Phrase/>
    <Phrase/>
    <Phrase/>

    </motion.div>
   )


}) 


const Phrase = (() => {
      return(
        
        
        <div className={s.vision}>
            <p>
               Tell us about your 
               <span className={s.titis} > vison.</span>
               
            </p>
        </div>
        

        
      )
    })



