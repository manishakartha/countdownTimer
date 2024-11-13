
function Button({start,paused,handlePause,handleStart,handleResume,handleReset}){
    return(
        <>
        {
        !start ? 
          <div>
            <button onClick={handleStart} className="button">Start</button>
          </div> :
          <div>
            {
              !paused ?  <button className="button" onClick={handlePause}>Pause</button> :
              <button onClick={handleResume} className="button">Resume</button>
            }
           
           
            <button  onClick={handleReset} className="button">Reset</button>
          </div>
      }
        </>
    )
}



export default Button;