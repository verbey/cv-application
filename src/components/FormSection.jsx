import '../styles/FormSection.css';
import Header from './Header.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';

function FormSection(props) {
	const inputFields = [];
	props.inputFields.forEach((inputField, index) => {
		inputFields.push(<Input type='text' required placeholder={inputField} maxlength='64' id={index} key={index} />);
	});
	return (
		<div className="formSection" id={props.id}>
			<Header text={props.headerText} />
			<form action="">
				{inputFields}
				<Button name='Submit' type='sumbit' />
			</form>

		</div>
	);
}

export default FormSection;
