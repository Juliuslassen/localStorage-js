/* eslint-disable react/prop-types */
import { useRef, useState , useEffect } from "react";

function Counter({ init, inc}) {

  //const { init, inc} = props;

  const initFromStore = 
    parseInt(localStorage.getItem("count")) > 0 
    ?
     parseInt(localStorage.getItem("count")) : init;
  
  const [count, setCount] = useState(initFromStore);

  const [x, setX] = useState(1);

  useEffect(() => {
    console.log("save", count)
    localStorage.setItem("count", count);
  }, [count]);

  const handleXInput = (event) => {
    setX(event.target.value);
  }
  

  function updateCounter() {
    setCount(count + 1);
  }

  function resetCounter() {
    setCount(0);
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  function squareRootCounter() {
    setCount(Math.sqrt(count));
  }

  function multiplyWithNumber() {
    setCount(count * x);
  }

  function resetCounterAndMultiplier(){
    resetCounter();
    setX(1);
  }

  return (
    <div className="card">
      <h1>Counter: {count}</h1>
      <p>Number you wanna multiple with: {x}</p>

      <button onClick={updateCounter}>add</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}> subtract</button>
      <div>
        <button onClick={resetCounterAndMultiplier}>reset</button>
      </div>
      <div>
        <button onClick={squareRootCounter}>Squareroot</button>
      </div>
      <div>
        <input type="number" placeholder="Write a number" onChange={handleXInput}/>
        <button onClick={multiplyWithNumber}>multiply</button>
      </div>
    </div>
  );
}

export default Counter;
