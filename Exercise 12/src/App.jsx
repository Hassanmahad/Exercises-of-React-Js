import { useState } from "react";
const App = () => {

    const [digit, setDigit] = useState(0);
    const [noAction , setNoAction] = useState(true);

 const plus = ()=>{
  if (digit >= 0){
         setDigit(digit + 1 )
  }
  }
 
 const minus = ()=>{
if (digit >= 1){
         setDigit(digit - 1 )
         setNoAction(true)

  }  }
  return (
    <>
    <h1>Count : {digit}</h1>
    <button onClick={plus}   >Increment</button>
    <button onClick={minus} disabled={digit === 0} >Decrement</button>
    </>
  )
};

export default App;
