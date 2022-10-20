import {createContext, useReducer} from 'react';


export const themeContext = createContext();

let INIT_STATE;

if (localStorage && localStorage.getItem("darkMode")) {
  INIT_STATE = {
    darkMode: JSON.parse(localStorage.getItem("darkMode")),
  };
} else {
  INIT_STATE = {
    darkMode: false,
  };
}

const themeReducer = (state, action) => {

    switch (action.type) {
        case 'TOGGLE':
           return {...state, darkMode: action.payload.darkMode};
    
        default:
            return state;
            
    }
}

const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer,INIT_STATE);

    localStorage &&
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));


    return (
        <themeContext.Provider value={{state, dispatch}}>
            {children}
        </themeContext.Provider>
    )
}


export default ThemeProvider;