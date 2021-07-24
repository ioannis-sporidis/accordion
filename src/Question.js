import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button type='button' className='btn' onClick={toggleHandler}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo ? info : null}</p>
    </article>
  );
};

export default Question;
