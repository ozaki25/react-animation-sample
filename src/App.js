import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px;
`;

const Items = styled(animated.div)`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  border: solid 1px #bbb;
  width: 100%;
  height: 100px;
`;

function App() {
  const [baseIndex, setBaseIndex] = useState(1);
  const props = useSpring({
    config: { duration: 100 },
    to: { transform: 'translateX(0)', opacity: 1 },
    from: { transform: 'translateX(50px)', opacity: 0 },
  });
  return (
    <Container>
      <Items style={props}>
        {[...Array(baseIndex + 6)].map((_, i) => (
          <Item key={i}>{i}</Item>
        ))}
      </Items>
    </Container>
  );
}

export default App;
