import QuizOption from './QuizOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const SingleQuiz = ({ ques }) => {
    const { question, options, correctAnswer } = ques;
    console.log();
    const seeRightAnswer = (correct) => {
        if (correct === ques.correctAnswer) {
            toast.success(`Right Answer is: ${correctAnswer}`)
        }
    }
    return (
        <div className='w-3/4 mx-auto space-y-5'>
            <div className='flex items-center justify-between'>
                <h1 className='md:text-xl font-bold'>{question}</h1>
                <FontAwesomeIcon onClick={() => seeRightAnswer(correctAnswer)} icon={faEye}></FontAwesomeIcon>
            </div>
            <ul>
                {
                    options.map(item => <QuizOption item={item} correctAnswer={correctAnswer}></QuizOption>)
                }
            </ul>
        </div>
    );
};

export default SingleQuiz;