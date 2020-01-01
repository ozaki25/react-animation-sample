import { useTransition } from 'react-spring';

export const directionType = {
  prev: 'PREV',
  next: 'NEXT',
};

function usePageTransition(state, direction) {
  const translateX =
    direction === directionType.prev
      ? '-50px'
      : direction === directionType.next
      ? '50px'
      : 0;

  return useTransition(state, item => item, {
    config: { duration: 100 },
    from: {
      transform: `translateX(${translateX})`,
      opacity: 0,
    },
    enter: { transform: 'translateX(0)', opacity: 1 },
    leave: { display: 'none' },
  });
}

export default usePageTransition;
