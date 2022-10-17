import './Service.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../card/Card';
import Resume from '../../img/resume.pdf';
import data from '../../data';



const Service = () => {
  return (
    <div className='service'>
        {/* left-sided service */}
        <div className="awesome">
            <span>My Awesome </span>
            <span> service </span>
            <span>
                Lorem ipsum dolorelit. possimus laudantium minus dolores aut deleniti 
                <br />
             neque enim veritatis optio? Omnis aspernatur minima odio!
           .</span>
           <a href={Resume} download style={{marginTop: '1rem'}}>
            <button className="btn s-btn">Download resume</button>
           </a>
            <div className="blur s-blur1" style={{backgroundColor: '#ABF1FF94', top:'13rem', left: '-18rem', width: '21rem', height: '11rem'}}></div>

        </div>

        {/* right-sided service */}
        <div className="s-cards">
           <div style={{left: '14rem'}}>
               <Card
               emoji={HeartEmoji}
                title={data.services[0].title}
                detail={data.services[0].detail}
               />
           </div>
           <div style={{left: '-4rem', top: '12rem'}}>
               <Card
               emoji={Glasses}
                title={data.services[1].title}
                detail={data.services[1].detail}
               />
           </div>

           <div style={{left: '12rem', top: '19rem'}}>
               <Card
               emoji={humble}
                title={data.services[2].title}
                detail={data.services[2].detail}
               />
           </div>
           <div className="blur s-blur2" style={{backgroundColor: 'var(--purple)', top:'8rem', left: '14rem', width: '21rem', height: '11rem'}}></div>

        </div>
    </div>
  )
}

export default Service