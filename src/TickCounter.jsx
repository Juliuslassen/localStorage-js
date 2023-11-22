import { useState, useEffect } from "react";



/* eslint-disable no-undef */
function TickCounter() {
  const [minuts, setMinuts] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning === true) {
      timer = setInterval(() => {
        setSeconds((prevSecound) => prevSecound - 1);
        if (minuts > 0 && seconds === 0) {
          countDownMinuts();
          setSeconds(60);
        } else if (minuts === 0 && seconds === 1) {
          setIsRunning(false);
          setTimerDone(true);
          alertTimerDone();
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, minuts, seconds]);

  function resetTimer() {
    setMinuts(0);
    setSeconds(0);
  }

  function countDownMinuts() {
    setMinuts((prevMinuts) => prevMinuts - 1);
  }

  function alertTimerDone() {
    alert("Timer done");
    alert("are you sure you want more time?");
    alert("completely sure?");
    for(let i = 0; i < 10; i++){
        const randomInt = Math.floor(Math.random() * 10000);
        alert("are you sure?, we could make a new timer with: " + randomInt + " minutes");
    }
}

  return (
    <>
      <h1>
        Time left: Minutes: {minuts} + seconds: {seconds}
      </h1>
      {/*
      <Alert severity="error" onChange={timerDone}>This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
        */}
        <h2>Is the timer done?: {timerDone.toString()}</h2>

      <h2>Is the timer running?: {isRunning.toString()}</h2>
      <div>
        <input
          type="number"
          placeholder="minutes"
          value={minuts}
          onChange={(e) => setMinuts(parseInt(e.target.value))}
        />

        <input
          type="number"
          placeholder="seconds"
          value={seconds}
          onChangeCapture={(e) => setSeconds(parseInt(e.target.value))}
        />
      </div>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}

export default TickCounter;
