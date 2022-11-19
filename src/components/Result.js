import {Card} from './styles/Result.styled'
import phone from '../images/illustration-thank-you.svg'
import { useState } from 'react'
function Result(props) {
    return (
        <Card>
            <img src={phone} />
            <p className='thank'>You selected {props.rate} out of 5</p>
            <h1>Thank you!</h1>
            <p className='text'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </Card>
    )
}

export default Result;