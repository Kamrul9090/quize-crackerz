import Root from './Root';
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import Topics from '../components/Topics';
import Quiz from '../components/Quiz';

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
            { path: '/statistics', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
        ]
    },
])