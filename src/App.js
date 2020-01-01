import React, { useState } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import usePageTransition, { directionType } from './usePageTransition';

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
  const [direction, setDirection] = useState(null);

  const transitions = usePageTransition(baseIndex, direction);

  const onClickPrev = () => {
    setBaseIndex(prevIndex => prevIndex - 7);
    setDirection(directionType.prev);
  };

  const onClickNext = () => {
    setBaseIndex(prevIndex => prevIndex + 7);
    setDirection(directionType.next);
  };

  return (
    <Container>
      <button onClick={onClickPrev}>
        <span>⬅️</span>
        前へ
      </button>
      <button onClick={onClickNext}>
        次へ
        <span>➡️</span>
      </button>
      {transitions.map(({ item, key, props }) => (
        <Items style={props} key={key}>
          {[...Array(7)].map((_, i) => (
            <Item key={item + i}>{item + i}</Item>
          ))}
        </Items>
      ))}
    </Container>
  );
}

export default App;
