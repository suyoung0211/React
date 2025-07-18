// GPT 사용해서 코딩
// 비교용

import React, { useEffect, useRef, useState } from 'react';
import './App.css'; // 스타일은 여기 포함했거나 인라인으로 작성 가능

function App() {
  const boxRef = useRef(null);
  const mainRef = useRef(null);

  const [boxStyle, setBoxStyle] = useState({
    top: 0,
    left: 0,
    width: 150,
    height: 150,
  });

  // 방향키 이동
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!mainRef.current || !boxRef.current) return;

      const parentWidth = mainRef.current.offsetWidth;
      const parentHeight = mainRef.current.offsetHeight;

      let { top, left, width, height } = boxStyle;

      switch (e.key) {
        case 'ArrowUp':
          if (top - 10 > 0) setBoxStyle((prev) => ({ ...prev, top: prev.top - 10 }));
          break;
        case 'ArrowDown':
          if (top + height + 10 < parentHeight)
            setBoxStyle((prev) => ({ ...prev, top: prev.top + 10 }));
          break;
        case 'ArrowLeft':
          if (left - 10 > 0) setBoxStyle((prev) => ({ ...prev, left: prev.left - 10 }));
          break;
        case 'ArrowRight':
          if (left + width + 10 < parentWidth)
            setBoxStyle((prev) => ({ ...prev, left: prev.left + 10 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [boxStyle]);

  // 버튼 클릭 시 크기 조정
  const handleResize = (direction) => {
    setBoxStyle((prev) => {
      let { width, height } = prev;

      switch (direction) {
        case 'top':
          return { ...prev, height: Math.max(height - 10, 10) };
        case 'down':
          return { ...prev, height: height + 10 };
        case 'left':
          return { ...prev, width: Math.max(width - 10, 10) };
        case 'right':
          return { ...prev, width: width + 10 };
        default:
          return prev;
      }
    });
  };

  return (
    <div id="container" style={{ padding: 0, margin: 0 }}>
      <div className="nav" style={styles.nav}>
        <button onClick={() => handleResize('top')}>👆</button>
        <button onClick={() => handleResize('right')}>👉</button>
        <button onClick={() => handleResize('down')}>👇</button>
        <button onClick={() => handleResize('left')}>👈</button>
      </div>

      <div className="main" style={styles.main} ref={mainRef}>
        <div
          ref={boxRef}
          style={{
            position: 'absolute',
            backgroundColor: 'cadetblue',
            ...boxStyle,
          }}
        ></div>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 100,
    backgroundColor: 'aquamarine',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  main: {
    height: 'calc(100vh - 100px)',
    backgroundColor: 'antiquewhite',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
};

export default App;
