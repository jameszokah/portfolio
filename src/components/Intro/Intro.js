import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Me from '../../img/me-removebg.png'
import Thumbup from '../../img/thumbup.png'
import Glassesimoji from '../../img/glassesimoji.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../floatingDiv/FloatingDiv';
import data from '../../data';
import { useContext } from 'react';
import { themeContext } from '../../context/context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {

  const {state} = useContext(themeContext)
    const darkMode = state.darkMode;

    const transition = {
      duration: 2,
       type: 'spring',
    }

  return (
    <div className="intro" id='Intro'>
        <div className="intro-left">
            <div className="intro-name">
                <span style={{color: darkMode ? '#fff' : ''}}>Hi! I Am </span>
                <span>{data.fullName} </span>
                <span> {data.desciption} </span>
            </div>
            <Link className='btn intro-btn' spy to='Contact' smooth >
                    <span>Hire me</span>
                    </Link> 
            <div className="intro-icons">
                <img src={Github} alt="github" />
                <img src={Linkedin} alt="linkedIn" />
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
        <div className="intro-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={Me} alt="Me" />
                <motion.img 
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}


                 src={Glassesimoji} alt='glassesmoji' />

                <motion.div 
                initial={{top: '4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                style={{left: '68%', top: '-4%'}}
                className='floating-div'
                
                >
                  <FloatingDiv img={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div 
                initial={{top: '18rem', left: '9rem'}}
                whileInView={{left: '0rem'}}
                transition={transition} 
                style={{left: '0rem', top: '18rem'}} className='floating-div'>
                  <FloatingDiv img={Thumbup} txt1='Best Design' txt2='Awards' />
                </motion.div >

                <div className='blur' style={{backgroundColor: 'rgb(238, 210, 255)', width: '22rem', height: '14rem', top: '-18%', left: '56%'}}></div>
                <div className='blur' style={{backgroundColor: '#C1F5FF', top: '17rem', left: '-9rem', width: '21rem', height: '11rem'}}></div>
        </div>
    </div>
  )
}

export default Intro