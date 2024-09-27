import "./App.css";
import react , {useState , useRef} from "react";


function padTime(time){
  return time.toString().padStart(2,"0");
}




function App() {
  const [timeLeft, setTimeLeft] = useState(15);
  const [title , setTitle] = useState("Let the CountDown Begin!");

  const[isRunning , setIsRunning] = useState(false);

  const minutes = padTime(Math.floor(timeLeft/60));
  const seconds = padTime(timeLeft - minutes * 60);



  const intervalRef = useRef(null);

  console.log(intervalRef);

  function startTimer(){
    if(intervalRef.current !== null) return;
    setTitle('You are Doing Great!');
    setIsRunning(true);
    intervalRef.current = setInterval(()=>{
      setTimeLeft((timeLeft) =>{
      if(timeLeft >= 1) return timeLeft - 1;
        resetTimer();
      return 0;
    });
    },1000);
    console.log(intervalRef.current);
  }

  function stopTimer(){
    if(intervalRef.current === null) return;
    setTitle('Keep it Up!');
    console.log(intervalRef.current);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
  }

  function resetTimer(){
    clearInterval(intervalRef.current);
    setTitle("Ready to go Another Round?");
    setTimeLeft(3 *60);
    intervalRef.current = null;
    setIsRunning(false);
  }

  return (
    <div className='app'>
      <h2>{title}</h2>

      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className='buttons'>
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
