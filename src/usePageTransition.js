import { useTransition } from 'react-spring';

function usePageTransition(state, direction) {
  const translateX =
    direction === 'PREV' ? '-50px' : direction === 'NEXT' ? '50px' : 0;

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
