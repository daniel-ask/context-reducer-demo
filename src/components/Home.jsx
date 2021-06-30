import React from 'react'
import { useNameContext } from '../context/NameThemeProvider';

export default function Home() {
	const [name] = useNameContext();
	return (
		<div>
			<h1>Welcome {name}</h1>
		</div>
	)
}
