
import './App.css';
import { useEffect, useState } from 'react';

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
    const updatedData=(prevstate)=>(
      {...prevstate,[e.target.name]:e.target.value
    })
    setData(updatedData)
  };

  const handleResume =()=>{
    setPaused(false)
  };
  const handleReset =()=>{
    setPaused(false);
    setData({hours:0,minutes:0,seconds:0})
  }
  useEffect(()=>{
    const timer = setInterval(()=>{

    },1000)

    return () => clearInterval(timer);
  },[start,paused,data])
  return (
    <div className="App">
      <div>
        <h2 className='header'>Timer</h2>
        </div>
        <div className='input-container'>
          <input name="hours" 
          onChange={(e)=>{handleInputChange(e)}}  
          value={data.hours} 
          className="input" placeholder='HH'/>
          <input  name="minutes" 
          onChange={(e)=>{handleInputChange(e)}} 
          value={data.minutes} 
          className="input" placeholder='MM'/>
          <input  name="seconds" 
          onChange={(e)=>{handleInputChange(e)}} 
          value={data.seconds} 
          className="input" placeholder='SS'/>
        </div>
        {
        !start ? 
          <div>
            <button onClick={handleStart} className="start-button">Start</button>
          </div> :
          <div>
            {
              !paused ?  <button className="pause-button" onClick={handlePause}>Pause</button> :
              <button onClick={handleResume} className="resume-button">Resume</button>
            }
           
           
            <button  onClick={handleReset} className="reset-button">Reset</button>
          </div>
      }
      
        
      
      
      
    
    </div>
  );
}

export default App;
