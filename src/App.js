import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
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
  const [direction, setDirection] = useState(null);

  const translateX =
    direction === 'PREV' ? '-50px' : direction === 'NEXT' ? '50px' : 0;

  const transitions = useTransition(baseIndex, item => item, {
    config: { duration: 100 },
    from: {
      transform: `translateX(${translateX})`,
      opacity: 0,
    },
    enter: { transform: 'translateX(0)', opacity: 1 },
    leave: { display: 'none' },
  });

  const onClickPrev = () => {
    setBaseIndex(prevIndex => prevIndex - 7);
    setDirection('PREV');
  };

  const onClickNext = () => {
    setBaseIndex(prevIndex => prevIndex + 7);
    setDirection('NEXT');
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
