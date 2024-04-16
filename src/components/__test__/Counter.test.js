import {render,fireEvent, screen} from '@testing-library/react'
import Counter from '../Counter'

describe('Couter', () => {
    it('Should increment counter',() => {
 //render componenent in the virtual DOM
 render(<Counter/>)

 //select element to interact
 const counter = screen.getByTestId('counter');
 const incrementBtn = screen.getByTestId('increment');

 //interact with elements
 fireEvent.click(incrementBtn);

 expect(counter).toHaveTextContent('2');
});
if('Should decrement Counter', () => {
    //render componenent in the virtual DOM
 render(<Counter/>)

 //select element to interact
 const counter = screen.getByTestId('counter');
 const decrementBtn = screen.getByTestId('decrement');

 //interact with elements
 fireEvent.click(decrementBtn);

 expect(counter).toHaveTextContent('0');
});
});



   