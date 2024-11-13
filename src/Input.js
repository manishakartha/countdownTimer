const Input =({data,handleInputChange})=>{
    return(
        <>
        <div className='input-container'>
          <input name="hours" 
          onChange={(e)=>{handleInputChange(e)}}  
          value={String(data.hours).padStart(2, '0')}
          className="input" placeholder='HH'/>
          <input  name="minutes" 
          onChange={(e)=>{handleInputChange(e)}} 
          value={String(data.minutes).padStart(2, '0')}
          className="input" placeholder='MM'/>
          <input  name="seconds" 
          onChange={(e)=>{handleInputChange(e)}} 
          value={String(data.seconds).padStart(2, '0')}
          className="input" placeholder='SS'/>
        </div>
        </>
    )

}
export default Input ;