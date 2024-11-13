
import './App.css';
import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

function App() {
  const[start,setStart] = useState(false);
  const [data,setData] = useState({
    hours:0,
    minutes:0,
    seconds:0
  });
  const[paused,setPaused]=useState(false)
  const handleStart=()=>{
    setStart(true);
    setPaused(false);
  };
  const handlePause=()=>{
    setPaused(true)
  }
  const handleInputChange=(e)=>{
    setData((prevData)=>(
      {
        ...prevData,[e.target.name]:Math.min(59,parseInt(e.target.value)||0)
      }
    ))
  };

  const handleResume =()=>{
    setPaused(false)
  };
  const handleReset =()=>{
    setPaused(false);
    setData({hours:0,minutes:0,seconds:0})
  }
  useEffect(()=>{
    if(start && !paused) { 
      const timer = setInterval(()=>{
      setData((prevData)=>{
        const{hours,minutes,seconds}=prevData;
      
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setStart(false); // Stop timer when it reaches zero
          return prevData;
        }
        if (seconds > 0) {
          return { ...prevData, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevData, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevData, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        return prevData
      })
      }
    ,1000)
  
    return () => clearInterval(timer);
  }


  },[start,paused,data])
  return (
    <div className="App">
      <div>
        <h2 className='header'>Timer</h2>
        </div>
        <Input
        data={data}
        handleInputChange={(e)=>handleInputChange(e)}
        />
        <Button
        start={start}
        paused={paused}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
        handleResume={handleResume}
        />
    </div>
  );
}

export default App;
