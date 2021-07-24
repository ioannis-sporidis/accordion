import { useState } from 'react';
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data);

  return questions.map(question => {
    const { id, title, info } = question;
    return (
      <div key={id}>
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    );
  });
}

export default App;
