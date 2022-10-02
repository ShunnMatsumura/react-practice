import React, {memo, useState} from "react";

type FizzProps = {
  isFizz: boolean;
}

const Fizz = (props: FizzProps): JSX.Element => {
  const {isFizz} = props;

  console.log('render Fixzz');

  return (
    <span>{isFizz ? 'isFizz' : ''}</span>
  )
}

type BuzzProps = {
  isBuzz: boolean;
  onClick: () => void;
}

const Buzz = memo<BuzzProps>(props => {
  const {isBuzz} = props;
  console.log('render Buzz');

  return (
    <span>{isBuzz ? 'isBuzz' : ''}</span>
  )
})


export const Parent = () => {
  const [count, setCount] = useState(0);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  console.log('render Parent');

  const onBuzzClick = () => {
    console.log('onBuzzClick');
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      <Fizz isFizz={isFizz} />
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
    </div>
  )
}