import React from 'react';
import { useNameContext, useThemeContext } from '../context/NameThemeProvider';

export default function Nav() {
	
	const [name] = useNameContext();
	const [state, dispatch]  = useThemeContext();

	return (
		<nav className='Nav' style={state}>
			<h4>Home</h4>
			<h4>{name}</h4>
			<h4><button onClick={() => dispatch({ type: 'ToggleTheme'})}>Switch Theme</button></h4>
		</nav>
	)
}
