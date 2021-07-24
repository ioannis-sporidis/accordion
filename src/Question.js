import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button type='button' className='btn'>
          click me
        </button>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Question;
