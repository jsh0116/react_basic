import React, { useEffect, useRef, useState } from 'react';
import './App.css';

type Position = {
  x: number;
  y: number;
}

const App = (): JSX.Element => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const pointRef = useRef<HTMLDivElement>(null);

  // 마우스가 움직일때 마다 커서의 현재 위치를 state에 업데이트한다 
  document.documentElement.addEventListener('mousemove', (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  });

  // state가 업데이트 될때마다 state값에 대응해서 pointer의 top, left를 변경해준다.
  useEffect(() => {
    if (pointRef.current !== null) {
      pointRef.current.style.left = position.x - 10 + 'px';
      pointRef.current.style.top = position.y - 10 + 'px';
    }
  }, [position.x, position.y]);

  return (
    <div className='container'>
      <div ref={pointRef} className='pointer' />
    </div>
  );
}

export default App;
