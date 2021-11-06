import React, { useState } from 'react';
import StopWatch from './StopWatch';
import Timer from './Timer';

function Clone() {
  const [showTimer, setShowTimer] = useState(false)
  const toggle = () => {
    setShowTimer(!showTimer)
  }
  return <div>
    <div className="container">
      <div className="row">
        <div className="col p-3" onClick={toggle}>
          <button  type="button" class="float-end btn btn-primary" style={{ width: "180px" }}>Timer</button>
        </div>
        <div className="col p-3" onClick={toggle}>
          <button type="button" class="btn btn-primary" style={{ width: "180px" }}> StopWatch</button>
        </div>
      </div>
      {showTimer ? <Timer /> : <StopWatch />}
    </div>
  </div>;
}

export default Clone;