
import React, { useState } from 'react';
import './App.css';
import './app.scss'

function App() {
  const [time, settime1] = useState({ms:0,s:0,m:0,h:0})
  const [ status,setstatus] = useState(0)
  const [ctime,settime] =useState(new Date().toLocaleTimeString())
  const [interv,setinterv] = useState()
  let name = false;
  const updatetime= ()=>
  {
    let time = new Date().toLocaleTimeString();
    settime(time);
  }
  const start = ()=>
  {
    run()
    setstatus(1)
    setinterv(setInterval(run,10))
  }
  const stop = ()=>
  {
    clearInterval(interv)
    name=true;
    setstatus(2)
  }

  const reset = ()=>
  {
    
      setstatus(0)
    settime1({ms:0,s:0,m:0,h:0})
    
    
  }
  var updatems =time.ms,updates = time.s,updatem=time.m,updateh =time.h;
  const run=()=>
  {
    if (updatem === 60) {
      updateh++;
      updatem = 0;
  }
  if (updates === 60) {
      updatem++;
      updates = 0;
  }
  if (updatems === 60) {
      updates++;
      updatems = 0;
  }
  updatems++;
  return settime1({ms:updatems,s:updates,m:updatem,h:updateh })
  }
  setInterval(updatetime)
  return (
    <>
      <div className="clock">
        <div className="clockinner">
        <p>{ctime}</p>
        </div>
        <div className='stopwatch'> {(time.h>=10? time.h: "0" + time.h)} &nbsp;:&nbsp;
        {(time.m>=10? time.m: "0" + time.m)}&nbsp;:&nbsp;
        {(time.s>=10? time.s: "0" + time.s)}&nbsp;:&nbsp;
          {(time.ms>=10? time.ms: "0" + time.ms)}
          <br/>
         
         {(status === 0?<button type="submit" onClick={start}>start</button>:"")}
         {(status ===2?<div><button className='ong' type="submit" onClick={start}>resume</button><button type="submit" className='ong1' onClick={reset}>reset</button></div>:"")}
          {(status ===1?<div><button type="submit" onClick={stop}>stop</button></div>:"")}
        </div>
        
      </div>
    </>
  );
}

export default App;
