import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const AppCounter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {count} {count > 10 ? '🔥' : '⚡️'}
      </div>
      <div className='counters'>
        <Counter setCount={setCount} />
        <Counter setCount={setCount} />
      </div>

    </div>
  );
}

export default AppCounter;
