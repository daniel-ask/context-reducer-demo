import React, { useState, useContext, useReducer } from 'react';

export const NameContext = React.createContext();
export const ThemeContext = React.createContext();

export function useNameContext(){
	return useContext(NameContext);
}
export function useThemeContext(){
	return useContext(ThemeContext);
}

const reducer = (state, action) =>{
	const lightTheme = {
		theme: 'light',
		backgroundColor: 'aliceblue',
		color: 'grey'
	}

  const darkTheme = {
		theme: 'dark',
		backgroundColor: 'black',
		color: 'white'
	}

	switch(action.type){
		case 'ToggleTheme':
			return state.theme === 'dark' ? lightTheme : darkTheme
		case 'ChangeToDark':
		 return darkTheme;
		 case 'ChangeBackground':
			 return {
				 ...state,
				 backgroundColor: action.value
			 }
		default:
			return state;
	}
}

export default function NameThemeProvider({children}) {
  const darkTheme = {
		theme: 'dark',
		backgroundColor: 'black',
		color: 'white'
	}

	const [name, setName] = useState("Daniel");

	const [state, dispatch] = useReducer(reducer, darkTheme)
  
	return (
    <ThemeContext.Provider value={[state, dispatch]}>
      <NameContext.Provider value={[name, setName]}>
				{children}
      </NameContext.Provider>
    </ThemeContext.Provider>
	)
}
