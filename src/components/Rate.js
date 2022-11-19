import {Card} from './styles/Card.styled'
import star from '../images/icon-star.svg'
import { useState } from 'react'

function Rate(props) {
  const numbers = [1, 2, 3, 4, 5];
  


  return (
    <Card>
        <img src={star} />
        <h1>How did we do?</h1>
        <p>Please let us know how we did 
          with your support request. 
          All feedback is appreciated to 
          help us improve our offering!
        </p>
        <div>
          {numbers.map(number => 
            <button 
              className={props.rate == number ? 'isActive num' : 'isNotActive num'} 
              key={number} onClick={() => {
              props.setRate(number);
              props.setChoose(true);
              props.setSubmit(false);
            }} >{number}</button>
          )}
        </div>
        
        <button onClick={() => {
          props.setSubmit(true);
        }} className='submit'>Submit</button>
    </Card>


  );
}

export default Rate;
