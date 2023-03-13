import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyComponent () {
    let first_text = "Hello World!";
    let second_text = "Hi there!";
    const [state, setState] = useState({greetings: first_text});

    function handleClick(){
        if (state.greetings === first_text)
            setState({greetings: second_text});
        else
            setState({greetings: first_text});
    }

    return (
        <div className='container'>
            <div className='pt-5 pd-5'>
                <h1>{state.greetings}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quod tenetur doloribus? Ab tenetur enim iste illo. Est voluptas repellendus sed quidem architecto adipisci quo? Repudiandae praesentium consectetur rerum animi.</p>
                <button className={'btn btn-primary'} onClick={handleClick}>Change State</button>
            </div>

            <Link to='/'><button className="btn btn-secondary mt-3">Home</button></Link>
        </div>
    );
}