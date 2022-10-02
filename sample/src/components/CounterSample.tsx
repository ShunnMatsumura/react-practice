import { useState } from "react";

type CounterProps = {
  initialCount: number;
};

const Counter = (props: CounterProps): JSX.Element => {
  const [currentCount, setCount] = useState(props.initialCount);
  return (
    <div>
      <p>Count: {currentCount}</p>
      <button onClick={() => setCount(currentCount + 1)}>
        +1
      </button>
      <button onClick={() => setCount(currentCount - 1)}>
        -1
      </button>
    </div>
  )
}

export default Counter;