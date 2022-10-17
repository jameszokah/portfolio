import './Card.css';

const Card = ({emoji, title, detail}) => {
  return (
    <div className='card'>
        <img src={emoji} alt="emoji" />
        <span>{title}</span>
        <span>{detail}</span>
        <button className="c-btn">Learn More</button>
    </div>
  )
}

export default Card