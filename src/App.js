import React from 'react';
import { useSpring, animated } from 'react-spring';

function App() {
  const props = useSpring({
    to: { transform: 'translateX(0)', opacity: 1 },
    from: { transform: 'translateX(100%)', opacity: 0 },
  });
  return (
    <div>
      <animated.h1 style={props}>Hello</animated.h1>
    </div>
  );
}

export default App;
