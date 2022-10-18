import React, { useContext } from 'react'
import './Toggle.css';
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import { themeContext } from '../../context/context';
import { motion } from 'framer-motion';

const Toggle = () => {
    const {state, dispatch} = useContext(themeContext)
    const darkMode = state.darkMode;
  return (
    <motion.div 
    transition={{duration: 2, ease: true, type: 'spring', delay: 1}}
    className="toggle"
        onClick={() => dispatch({type: 'TOGGLE', payload: {darkMode: !state.darkMode}})}
    >
        <Moon />
        <Sun />
        <div className="t-btn"
        style={
            darkMode ? {left: '2px'} : {right: '2px'}
        }></div>
    </motion.div>
  )
}

export default Toggle