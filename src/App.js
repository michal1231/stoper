import Button from "./Components/Button/Button";
import Timer from "./Components/Timer/Timer"
import { useState, useEffect } from 'react';

const App = () => {
  const [timeStart, setTimeStart] = useState(0);
  const [timeCurrent, setTimeCurrent] = useState(0);
  const [timer, setTimer] = useState();
  const deltaTime = timeCurrent - timeStart;

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = () => {
    if (!timer) {
      setTimeStart(new Date() - deltaTime);
      setTimer(setInterval(() => {
        setTimeCurrent(new Date());
      }), 1);
    };
  }

  const stop = () => {
    if (timer) {
      setTimer(clearInterval(timer));
    }
  }

  const reset = () => {
    const resetTime = new Date();
    setTimeStart(resetTime);
    setTimeCurrent(resetTime);
  }
  return (
    <div>
      <Timer time={deltaTime} />
      <Button handleClick={start}>Start</Button>
      <Button handleClick={stop}>stop</Button>
      <Button handleClick={reset}>reset</Button>
    </div>
  );
};

export default App;