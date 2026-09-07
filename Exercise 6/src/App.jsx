import { useEffect, useState } from "react";

const App = () => {
 const [name , setName] = useState('')
 const [Greating , setGreating] = useState('Hello')

 useEffect( ()=>{
  if (!name) {
    document.title = "Welcome";
  }else{
    document.title = Greating + " " + name ;
  }
},[Greating, name]) ;
 return (
    <div>
      <h1>Enter your name</h1>
      <input type="text" 
      value={name}     
       onChange={(e) => setName(e.target.value)} />

      <h1>Enter a Greating</h1>
      <input type="text" 
      value={Greating}
      onChange={(e) => setGreating(e.target.value)} />
    </div>
  );
};

export default App;
