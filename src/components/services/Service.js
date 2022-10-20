import './Service.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../card/Card';
import Resume from '../../img/resume.pdf';
import data from '../../data';
import { useContext } from 'react';
import { themeContext } from '../../context/context';
import { motion } from 'framer-motion';


const Service = () => {

    const {state} = useContext(themeContext)
    const darkMode = state.darkMode;

    const transition = {
        duration: 1,
         type: 'spring',
      }
  

  return (
    <div className='service' id='Services'>
        {/* left-sided service */}
        <div className="awesome">
            <span style={{color: darkMode ? '#fff' : ''}}>My Awesome </span>
            <span> service </span>
            <span style={{color: darkMode ? '#c3bfbf' : ''}}>
            Upwork Freelancer. With over 3 years of experience, 
                <br />
            I can assist you to address any challenges you may have..
           .</span>
           <a href={Resume} download style={{marginTop: '1rem'}}>
            <button className="btn s-btn">Download resume</button>
           </a>
            <div className="blur s-blur1" style={{backgroundColor: '#ABF1FF94', top:'13rem', left: '-18rem', width: '21rem', height: '11rem'}}></div>

        </div>

        {/* right-sided service */}
        <div className="s-cards">
           <motion.div 
           initial={{left: '14rem'}}
           whileInView={{left: '25rem'}}
           transition={transition}

           style={{left: '14rem'}}>
               <Card
               emoji={HeartEmoji}
                title={data.services[0].title}
                detail={data.services[0].detail}
               />
           </motion.div>
           <div 
           style={{left: '-4rem', top: '12rem'}}>
               <Card
               emoji={Glasses}
                title={data.services[1].title}
                detail={data.services[1].detail}
               />
           </div>

           <motion.div 
           initial={{left: '14rem'}}
           whileInView={{left: '25rem'}}
           transition={transition} 

           style={{left: '12rem', top: '19rem'}}>
               <Card
               emoji={humble}
                title={data.services[2].title}
                detail={data.services[2].detail}
               />
           </motion.div>
           <div className="blur s-blur2" style={{backgroundColor: 'var(--purple)', top:'8rem', left: '14rem', width: '21rem', height: '11rem'}}></div>

        </div>
    </div>
  )
}

export default Service