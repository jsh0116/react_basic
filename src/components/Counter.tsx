import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  setCount: Dispatch<SetStateAction<number>>,
};

const Counter = (props: Props): JSX.Element => {
  const { setCount } = props;
  const [num, setNum] = useState<number>(0);

  return (
    <div className='counter'>
      <span className='number'>{num}</span>
      <button
        className='button'
        onClick={() => {
          setNum(num + 1);
          setCount((prev: number) => prev + 1);
        }}
      >
        +
      </button>
      <button
        className='button'
        onClick={() => {
          if (num === 0) {
            return;
          }
          setNum(num - 1);
          setCount((prev: number) => prev - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;