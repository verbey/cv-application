import '../styles/App.css';
import '../styles/reset.css';
import FormSection from './FormSection.jsx';
import Button from './Button.jsx';
function App() {

  return (
    <>
      <h1>CV Application</h1>
      <FormSection headerText='Name' inputFields={['Name', 'Email', 'Phone']} />
      <FormSection headerText='Education' inputFields={['University', 'Speciality', 'Date of study']} />
      <FormSection headerText='Previous jobs' inputFields={['Company', 'Position', 'Responsibilities', 'Date']} />
      <Button name='Add new' type='button' />
      <Button name='Submit' type="submit" />
    </>
  );
}

export default App;
