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

  for (let i = 0; i < jobFormSectionsNumber; i++) {
    jobFormSections.push(<FormSection headerText='Job' inputFields={['Job title', 'Company', 'Responsibilities', 'Date of work']} />);
  }

  return (
    <div className="app">
      <h1>CV Application</h1>
      <FormSection headerText='Name' inputFields={['Name', 'Email', 'Phone']} />
      <FormSection headerText='Education' inputFields={['University', 'Speciality', 'Date of study']} />
      {jobFormSections}
      <Button name='Add new' type='button' onClick={addNewJobFormSection} />
    </div>
  );
}

export default App;
