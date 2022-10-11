import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loading from '../utilities/loading.json'
import { TopicsContext } from '../utilities/Root';
import Topics from './Topics';
const Home = () => {
    const data = useContext(TopicsContext);
    const topicsData = data.data;

    return (
        <div>
            <div className='w-11/12 mx-auto mt-20 grid md:grid-cols-2 border-2 bg-slate-300 rounded-xl'>
                <div className='font-bold p-10'>
                    <h1 className='text-6xl text-blue-900'>Online Learning Test.</h1>
                    <p className='text-2xl mt-5'>Test your cognitive skills and see where you rank.</p>
                    <ul className='p-10'>
                        <li>20+ Questions</li>
                        <li>Instant Result</li>
                        <li>Perfect Accuracy</li>
                        <li>official IQ certification</li>
                        <li>Determine your intelligence level instantly</li>
                    </ul>
                </div>
                <Lottie className='w-full' animationData={loading} loop={true}></Lottie>
            </div>
            <div className='grid md:grid-cols-4 bg-orange-100 w-11/12 mx-auto mt-20 gap-5 p-5 rounded-xl'>
                {
                    topicsData.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;