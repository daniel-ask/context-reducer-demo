import React, { useState } from 'react';
import { useNameContext } from '../context/NameThemeProvider';

export default function NameForm() {
	const [textInput, setTextInput] = useState('');
	const [name, setName] = useNameContext()

	const submitForm = (e) =>{
		e.preventDefault();
		setName(textInput);
	}

	return (
		<form onSubmit={submitForm}>
			<input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
			<input type="submit" value="Change Name" />
		</form>
	)
}
