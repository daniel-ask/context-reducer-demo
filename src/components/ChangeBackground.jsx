import React, { useState } from 'react'
import { useThemeContext } from '../context/NameThemeProvider';

export default function ChangeBackground() {
	const [background, setBackground] = useState('');
	const [theme, themeDispatch] = useThemeContext();

	const changeBackground = e =>{
		e.preventDefault();
		themeDispatch({ type:'ChangeBackground', value: background})
	}

	return (
		<form onSubmit={changeBackground}>
			<input type="color" value={background} onChange={(e) => setBackground(e.target.value)} />
			<input type="submit" value="Change Background" />
		</form>
	)
}
