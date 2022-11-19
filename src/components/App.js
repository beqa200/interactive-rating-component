import Rate from './Rate'
import Result from './Result'
import { useState } from 'react'
function App() {
    const [isChoosen, setChoose] = useState(false);
    const [isSubmitted, setSubmit] = useState(false);
    const [rate, setRate] = useState();
    let rating = <Rate rate={rate} setRate={setRate} isChoosen={isChoosen} setChoose={setChoose} isSubmitted={isSubmitted} setSubmit={setSubmit}/>;
    let result = <Result rate={rate}/> ;
    console.log(isChoosen)
    console.log(isSubmitted)
    if(isChoosen == false || isSubmitted == false) {
        return (
            <div>
                {rating}
            </div>
            
        );
    } else if (isChoosen == true && isSubmitted == true) {
        return (
         <div>
            {result}
         </div>   
        );
        }
    
    

    
}

export default App;