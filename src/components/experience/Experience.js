import './Experience.css';
import data from '../../data';

const Experience = () => {
  return (
    <div className='experience' id='Experience'>
        {data.experience.map((item) => (
            <div className="achievement" key={item['type']}>
            <div className="circle">{item['number']}</div>
            <span>{item['on']} </span>
            <span>{item['type']}</span>
        </div>
        ))}
    </div>
    
  )
}

export default Experience