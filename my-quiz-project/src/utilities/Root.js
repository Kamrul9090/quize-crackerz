import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
    const loaderData = useLoaderData();
    console.log(loaderData.data);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;