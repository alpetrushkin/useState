import React, {useState} from 'react';
import './App.css';

function App() {
   // let a = 1
   let [a, setA] = useState(2)

   const onClickHandler = () => {
      setA(++a)
      console.log(a)
   }

   const onClickReset = () => {
      setA(0)
      console.log(a)
   }

   return (
      <div className="App">
         <h1>{a}</h1>
         <button onClick={onClickHandler}>number</button>
         <button onClick={onClickReset}>0</button>
      </div>
   );
}

export default App;
