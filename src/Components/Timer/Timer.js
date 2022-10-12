// import { useState } from 'react';

const Timer = ({ time }) => {

  return (
    <div>
      <span>{(Math.floor(time / 3600000))}
        :{(Math.floor(time / 60000)) % 60}
        :{(Math.floor(time / 1000)) % 60}
        :{time % 1000}</span>
    </div>
  )
}

export default Timer;