import React from 'react';
import { useNameContext, useThemeContext } from '../context/NameThemeProvider';

export default function Nav() {
	const [name] = useNameContext();
	const [theme, switchTheme]  = useThemeContext();
	return (
		<nav className='Nav' style={theme}>
			<h4>Home</h4>
			<h4>{name}</h4>
			<h4><button onClick={switchTheme}>Switch Theme</button></h4>
		</nav>
	)
}
