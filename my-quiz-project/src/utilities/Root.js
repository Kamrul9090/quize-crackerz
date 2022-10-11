import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';

export const TopicsContext = createContext([])
const Root = () => {
    const loaderData = useLoaderData();



    return (
        <div>
            <TopicsContext.Provider value={loaderData}>
                <Header></Header>
                <Outlet></Outlet>
            </TopicsContext.Provider>
        </div>
    );
};

export default Root;