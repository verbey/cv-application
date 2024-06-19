import '../styles/Input.css';

function Input(props) {

	return (
		<input type="text" className="textInput" maxLength={props.maxLength} placeholder={props.placeholder} id={props.id} defaultValue={props.value} />
	);
}

export default Input;