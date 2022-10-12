import React, { useState } from 'react';
import { toast } from 'react-toastify'
const QuizOption = ({ item, correctAnswer }) => {
    const [checked, setChecked] = useState(false);
    const addToast = () => {
        if (item === correctAnswer) {
            toast('right')
        } else {
            toast('wrong')
        }
    }
    return (
        <div>
            <div className='flex font-semibold mb-5'>
                <input className='mx-2'
                    type="checkbox"
                    id='check'
                    checked={checked}

                    onChange={(e) => setChecked(e.target.checked)}
                    onClick={addToast}
                />
                <li for="check" onClick={() => setChecked((c) => !c)}>{item}</li>
            </div>
        </div >
    );
};

export default QuizOption;