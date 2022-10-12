import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TopicsContext } from '../utilities/Root';
const Statistics = () => {
    const totalData = useContext(TopicsContext)
    // const data = totalData.data.map(d => d.total)
    console.log(totalData.data);


    return (
        <div className='w-11/12 mx-auto mt-20 grid md:grid-cols-1'>
            <h1 className='text-2xl font-serif font-bold'>Total Quiz</h1>
            <ResponsiveContainer width={450} height={250}>
                <BarChart data={totalData.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                    <Bar dataKey="id" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;