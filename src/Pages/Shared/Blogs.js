import React from 'react'

const Blogs = () => {
    return (
        <div>
            <h2 className='text-5xl text-accent font-bold text-center'>Blogs</h2>
            <h2 className='text-2xl text-center text-secondary font-bold p-5 '>How will you improve the performance of a React Application?</h2>
            <p className='text-md font-bold p-5'>
                ans: Detecting unnecessary rendering of components by using “Why did you update” library,
                React performance tuning by fixing unnecessary rendering of components in React,
                Implementing shouldComponentUpdate for preventing unnecessary renders.
                Optimizing the app loading time further with Code splitting,
                Improving the apps loading time by lazy loading Images,
                etc,
            </p>
            <h2 className='text-2xl text-center text-secondary font-bold p-5  '> What are the different ways to manage a state in a React application?</h2>
            <p className='text-md font-bold p-5 text-center'>
                ans:   1.  Local state.
                2.  Global state.
                3. Server state.
                4. URL state.
            </p>
            <h2 className='text-2xl text-center text-secondary font-bold p-5 '>How does prototypical inheritance work?</h2>
            <p className='text-md font-bold p-5 '>
                ans:  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object
            </p>
            <h2 className='text-2xl text-center text-secondary font-bold p-5 '>What is a unit test? Why should write unit tests??</h2>
            <p className='text-md font-bold p-5 '>
                ans:  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
            </p>
            <h2 className='text-2xl text-center text-secondary font-bold p-5 '>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p className='text-md font-bold p-5 text-center'>
                ans:  using array method filter and includes
            </p>
        </div>
    )
}

export default Blogs