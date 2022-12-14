import Button from "./components/Button/Button";
import Timer from "./components/Timer/Timer"
import { useState, useEffect } from 'react';
import Container from "./components/Container/Container";

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
      }), 100);
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
    <Container>
      <Timer time={deltaTime} />
      <div>
        <Button handleClick={start}>Start</Button>
        <Button handleClick={stop}>stop</Button>
        <Button handleClick={reset}>reset</Button>
      </div>
    </Container>
  );
};

export default App;