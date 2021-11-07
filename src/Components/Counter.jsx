import React, { Component } from 'react';


class Counter extends React.Component {
    constructor(){
        super();
        this.state = {count:0};
    }

    render() { 
        return <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>;
    }
}
 
export default counter;