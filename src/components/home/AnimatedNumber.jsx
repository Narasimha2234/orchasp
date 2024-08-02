import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ number }) => {

    const [ref, inView] = useInView({ triggerOnce: true });
    const [start, setStart] = useState(false);
  
    useEffect(() => {
      if (inView) setStart(true);
    }, [inView]);
  
    const props = useSpring({
      number: start ? number : 0,
      from: { number: 0 },
      config: { duration: 2500 }
    });
  
    return <animated.div ref={ref}>{props.number.to(n => n.toFixed(0))}</animated.div>;
  };

  export default AnimatedNumber