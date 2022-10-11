import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData()
    // const [question, setQuestion] = useState([]);
    const { questions } = quizData.data;
    return (
        <div>
            <h1>Total Quiz : {questions.length}</h1>
            <div>
                {
                    questions.map(ques => <SingleQuiz key={ques.id} ques={ques}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;