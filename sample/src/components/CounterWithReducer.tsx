import { useReducer } from "react";

type Action = 'increment' | 'decrement' | 'double' | 'reset';

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'increment':
      return currentCount + 1;
    case 'decrement':
      return currentCount - 1;
    case 'double':
      return currentCount * 2;
    case 'reset':
      return 0;
    default:
      return currentCount;
  }
}

type CounterProps = {
  initialCount: number;
};

const CounterWithReducer = (props: CounterProps): JSX.Element => {
  const [currentCount, dispatch] = useReducer(reducer, props.initialCount);
  return (
    <div>
      <p>Count: {currentCount}</p>
      <button onClick={() => dispatch('increment')}
      >
        +1
      </button>
      <button onClick={() => dispatch('decrement')}
      >
        -1
      </button>
      <button onClick={() => dispatch('double')}
      >
        *2
      </button>
      <button onClick={() => dispatch('reset')}
      >
        reset
      </button>
    </div>
  )
}

export default CounterWithReducer;