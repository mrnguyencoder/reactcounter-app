import React, { Component, createContext } from 'react'


class Counter extends Component {
    state = {
        count: 0
    };

    render() {  
        return ( 
        <div className='container mx-auto px-4'>
            <h1 className='container mx-auto px-4'>{this.formatCount()}</h1>
            <button className='bg-blue-500 rounded'>Increase</button>
        </div>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;