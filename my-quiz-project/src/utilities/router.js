import Root from './Root';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Home from '../components/Home';
import Header from '../components/Header';
import ErrorPage from '../components/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        children: [
            { path: '/home', element: <Home></Home> },
            { path: '/statistics', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
        ]
    },
])