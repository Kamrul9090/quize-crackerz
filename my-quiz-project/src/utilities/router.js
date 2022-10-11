import Root from './Root';
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import Quiz from '../components/Quiz';
import Blogs from '../components/Blogs';
import Statistics from '../components/Statistics';

export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: 'home/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Quiz></Quiz>
            },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blogs', element: <Blogs></Blogs> },
        ]
    },
])