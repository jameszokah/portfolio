import { Link } from 'react-scroll';
import Toggle from '../toggle/Toggle';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="nav-wrapper">
        <div className="nav-left">
            <div className="nav-name">James</div>
            <Toggle />
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul>
                    <Link className='link' spy to='Intro' smooth activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link  className='link' spy to='Services' smooth >
                        <li>Services</li>
                    </Link>
                    <Link className='link' spy to='Experience' smooth >
                        <li>Experience</li>
                    </Link>
                    <Link className='link' spy to='Portfolio' smooth >
                        <li>Portfolio</li>
                    </Link>                   
                    <Link className='link' spy to='Testimonials' smooth >
                        <li>Testimonials</li>
                    </Link> 
                </ul>
            </div>
            <Link className='btn nav-btn' spy to='Contact' smooth >
                    <span>Contact</span>
                    </Link> 
        </div>
    </div>
  )
}

export default Navbar