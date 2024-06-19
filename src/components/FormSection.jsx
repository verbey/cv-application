import '../styles/FormSection.css';
import Header from './Header.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import { useState } from 'react';

function FormSection(props) {
	const [inputValues, setInputValue] = useState([""]);
	const [inputMode, setInputMode] = useState(true);


	if (inputMode) {
		function handleSubmit(e) {
			e.preventDefault();

			let inputFieldValues = [];
			const inputFields = document.querySelectorAll(`.formSection[id="${props.id}"] input`);
			inputFields.forEach(inputField => {
				inputFieldValues.push(inputField.value);
			});
			setInputValue(inputFieldValues);
			setInputMode(false);
		}

		const inputComponents = [];
		props.inputFields.forEach((inputComponent, index) => {
			inputComponents.push(<Input type='text' required placeholder={inputComponent} maxlength='64' id={index} key={index} value={inputValues[index]} />);
		});
		return (
			<div className="formSection" id={props.id}>
				<Header text={props.headerText} />
				<form action="">
					{inputComponents}
					<Button name='Submit' type='sumbit' onClick={handleSubmit} />
				</form>

			</div>
		);
	}
	else {
		function handleEdit(e) {
			e.preventDefault();

			setInputMode(true);
		}

		let textElements = [];
		inputValues.forEach((inputValue, index) => {
			textElements.push(
				<div key={index}>
					<div>{props.inputFields[index]}</div>
					<p>{inputValue}</p>
				</div>
			);
		});
		return (
			<div className="formSection" id={props.id}>
				<Header text={props.headerText} />
				<form action="">
					{textElements}
					<Button name='Edit' type='edit' onClick={handleEdit} />
				</form>

			</div>
		);
	}
}

export default FormSection;
