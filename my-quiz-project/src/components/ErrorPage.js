import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            {
                error.statusText && (
                    <div className='text-center text-5xl mt-48 font-bold '>
                        <p className='text-blue-900'>{error.statusText}</p>
                        <p className='text-red-600'>{error.status}</p>
                    </div>)
            }
        </div>
    );
};

export default ErrorPage;