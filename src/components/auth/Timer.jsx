import React from 'react'
import Countdown from 'react-countdown'
function Timer() {
  return (
    <div className='timer'>
      <Countdown date={Date.now()+1*60*1000}/>
    </div>
  )
}

export default Timer
