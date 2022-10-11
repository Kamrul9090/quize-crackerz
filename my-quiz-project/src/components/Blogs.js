import React from 'react';

const Blogs = () => {
    return (

        <div>
            <h1 className='text-center mt-28 text-5xl font-serif font-bold underline decoration-wavy decoration-blue-900 text-orange-800'>Reads All Blogs</h1>
            <div className='grid md:grid-cols-2 w-11/12 mx-auto gap-10 mt-20'>
                <div className='space-y-4 border-2 shadow-5xl p-5 rounded-md bg-orange-200'>
                    <h2 className='text-2xl font-bold font-serif'>What is the purpose of react router?</h2>
                    <p className='font-semibold font-mono'>React Router is a standard library for routing in React. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                </div>
                <div className='space-y-4 border-2 shadow-5xl p-5 rounded-md bg-orange-200'>
                    <h2 className='text-2xl font-bold font-serif'>How does context API work ?</h2>
                    <p className='font-semibold font-mono'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className='space-y-4 border-2 shadow-5xl p-5 rounded-md bg-orange-200'>
                    <h2 className='text-2xl font-bold font-serif'>What is useRef in react?</h2>
                    <p className='font-semibold font-mono'> useRef is like a “box” that can hold a mutable value in its .current property. might be familiar with refs primarily as a way to access the DOM.
                        <li>The useRef Hook allows you to persist values between renders.</li>
                        <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
                        <li>
                            It can be used to access a DOM element directly.
                        </li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;