import { useContext } from 'react';
import { themeContext } from '../../context/context';
import './FloatingDiv.css';
const FloatingDiv = ({img, txt1, txt2}) => {

  const {state} = useContext(themeContext)
  const darkMode = state.darkMode;
  return (
    <div className="floatingDiv">
        <img src={img} alt={img} />
        <span style={{color: darkMode ? '#000' : '#000'}}>
            {txt1}
            <br />
            {txt2}
        </span>
    </div> 
  )
}

export default FloatingDiv