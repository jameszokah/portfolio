import {createContext, useReducer} from 'react';


export const themeContext = createContext();

const initState = {
    darkMode: true
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
    const [state, dispatch] = useReducer(themeReducer,initState);

    return (
        <themeContext.Provider value={{state, dispatch}}>
            {children}
        </themeContext.Provider>
    )
}


export default ThemeProvider;