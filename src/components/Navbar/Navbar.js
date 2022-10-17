import './Navbar.css';
const Navbar = () => {
  return (
    <div className="nav-wrapper">
        <div className="nav-left">
            <div className="nav-name">James</div>
            <span>toggle</span>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>                    
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="btn nav-btn">Contact</button>
        </div>
    </div>
  )
}

export default Navbar