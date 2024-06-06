import '../styles/App.css';
import FormSection from './FormSection.jsx';

function App() {

  return (
    <>
      <h1>CV Application</h1>
      <FormSection headerText='Name' inputFields={['Name', 'Email', 'Phone']} />
      <FormSection headerText='Education' inputFields={['University', 'Speciality', 'Date of study']} />
      <FormSection headerText='Previous jobs' inputFields={['Company', 'Position', 'Responsibilities', 'Date']} />
    </>
  );
}

export default App;
