import { Link } from "react-router-dom";

const Topics = ({ topic, handleAddToQuiz }) => {
    const { id, name, logo, total } = topic;

    return (
        <div className='font-bold font-mono'>
            <div className='border-2 bg-slate-100 hover:bg-slate-500 hover:text-white border-blue-900 hover:border-0 hover:shadow-2xl p-3 rounded-lg'>
                <img className='w-96 h-[50%] shadow-2xl rounded-lg' src={logo} alt="" />
                <div className='space-y-2 p-3'>
                    <h4 className='text-2xl'>{name}</h4>
                    <h4 className='text-2xl'>{id}</h4>
                    <p>Total Questions: {total}</p>
                </div>
                <Link to={`/home/${id}`}> <button onClick={() => handleAddToQuiz(id)} className='bg-blue-900 p-2 w-full rounded-xl text-white hover:bg-blue-200 hover:text-blue-900 uppercase'>Quiz Practice</button></Link>
            </div>
        </div>
    );
};

export default Topics;