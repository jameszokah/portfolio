import './Works.css';
import Upwork from '../../img/Upwork.png';
import Amazon from '../../img/amazon.png';
import Fiverr from '../../img/fiverr.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';


const Works = () => {
  return (
    <div className='works'>
         <div className="awesome">
            <span>My Works </span>
            <span> Brand </span>
            <span>
                Lorem ipsum dolorelit. possimus laudantium minus dolores aut deleniti 
                <br />
             neque enim veritatis optio? Omnis aspernatur minima odio!
                <br />
                Lorem ipsum dolorelit. possimus laudantium minus dolores aut deleniti
                <br />
                neque enim veritatis optio? Omnis aspernatur minima odio!
           </span>
            <button className="btn s-btn">Hire Me</button>
            <div className="blur s-blur1" style={{backgroundColor: '#ABF1FF94', top:'13rem', left: '-18rem', width: '21rem', height: '11rem'}}></div>

        </div>

        {/* right side  */}

        <div className="w-right">
          <div className='w-mainCircle'>
            <div className='w-secCircle'>
              <img src={Upwork} alt='upwork' />
            </div>
            <div className='w-secCircle'>
              <img src={Facebook} alt='facebook' />
            </div>
            <div className='w-secCircle'>
              <img src={Amazon} alt='Fiverr' />
            </div>
            <div className='w-secCircle'>
              <img src={Fiverr} alt='Fiverr' />
            </div>
            <div className='w-secCircle'>
              <img src={Shopify} alt='Shopify' />
            </div>

            {/* backgroud circle */}
             <div className='w-backCircle blueCircle'></div>
             <div className='w-backCircle yellowCircle'></div>

          </div>
        </div>

    </div>
  )
}

export default Works