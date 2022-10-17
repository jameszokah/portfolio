import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Me from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Glassesimoji from '../../img/glassesimoji.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../floatingDiv/FloatingDiv';
import data from '../../data';


const Intro = () => {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-name">
                <span>Hey! I Am </span>
                <span>{data.fullName} </span>
                <span> {data.desciption} </span>
            </div>
            <div className="btn intro-btn">Hire me</div>
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
                <img src={Glassesimoji} alt='glassesmoji' />
                <div style={{left: '68%', top: '-4%'}}>
                  <FloatingDiv img={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{left: '0rem', top: '18rem'}}>
                  <FloatingDiv img={Thumbup} txt1='Best Design' txt2='Awards' />
                </div>

                <div className='blur' style={{backgroundColor: 'rgb(238, 210, 255)', width: '22rem', height: '14rem', top: '-18%', left: '56%'}}></div>
                <div className='blur' style={{backgroundColor: '#C1F5FF', top: '17rem', left: '-9rem', width: '21rem', height: '11rem'}}></div>
        </div>
    </div>
  )
}

export default Intro