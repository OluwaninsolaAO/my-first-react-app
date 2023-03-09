import React, { useState } from 'react';

export default function MyComponet () {
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
                <button onClick={handleClick}>Change State</button>
            </div>
        </div>
    );
}