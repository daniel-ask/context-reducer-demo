import React, { useState, useContext } from 'react'

export const NameContext = React.createContext();
export const ThemeContext = React.createContext();

export function useNameContext(){
	return useContext(NameContext);
}
export function useThemeContext(){
	return useContext(ThemeContext);
}

export default function NameThemeProvider({children}) {
  const darkTheme = {
    backgroundColor: 'black',
    color: 'white'
  }
	const lightTheme = {
		backgroundColor: 'aliceblue',
		color: 'grey'
	}
	const [name, setName] = useState("Daniel");
	const [theme, setTheme] = useState(darkTheme);
  
	const changeTheme = () => {
		if(theme.color === 'white'){
			setTheme(lightTheme)
		}else{
			setTheme(darkTheme)
		}
	}

	return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      <NameContext.Provider value={[name, setName]}>
				{children}
      </NameContext.Provider>
    </ThemeContext.Provider>
	)
}
