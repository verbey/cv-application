import '../styles/App.css';
import '../styles/reset.css';
import FormSection from './FormSection.jsx';
import Button from './Button.jsx';
import { useState } from 'react';
function App() {
  const [jobFormSectionsNumber, setJobFormSectionsNumber] = useState(1);

  function addNewJobFormSection() {

    setJobFormSectionsNumber(jobFormSectionsNumber + 1);
  }

  const jobFormSections = [];

  for (let i = 2; i < jobFormSectionsNumber + 2; i++) {
    jobFormSections.push(<FormSection headerText='Job' inputFields={['Job title', 'Company', 'Responsibilities', 'Date of work']} id={i} key={i} />);
  }

  return (
    <div className="app">
      <h1>CV Application</h1>
      <FormSection headerText='Name' inputFields={['Name', 'Email', 'Phone']} id='0' />
      <FormSection headerText='Education' inputFields={['University', 'Speciality', 'Date of study']} id='1' />
      {jobFormSections}
      <Button name='Add new' type='button' onClick={addNewJobFormSection} />
    </div>
  );
}

export default App;
