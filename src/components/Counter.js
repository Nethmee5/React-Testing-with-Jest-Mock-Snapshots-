import React, {useState} from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(1);

    const incrementCounter = () => {
        setCounter((prevcounter) => prevcounter + 1)
    }
    const decrementCounter  = () =>{
        setCounter((prevcounter) => prevcounter - 1)
    }

    return(
        <div className='counter'>
            <button data-testid = 'increment' onClick={incrementCounter}>+</button>
            <p data-testid="counter">{counter}</p>
            <button data-testid="decrement"onClick={decrementCounter}>-</button>
        </div>
    )
}

export default Counter;