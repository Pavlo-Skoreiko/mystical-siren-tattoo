import React, {
  useEffect,
  useState,
} from 'react';

import {
  Content,
  ParallaxBackground,
  ParallaxWrapper,
} from './styled';

const Parallax = () => {
    const [scrollY, setScrollY] = useState(0);
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <ParallaxWrapper>
        <ParallaxBackground style={{ transform: `translate3d(0, ${scrollY * 0.5}px, 0)` }} />
        <Content>
          {/* Ваш контент здесь */}
          <h1>Your Content</h1>
          <p>Scroll down to see the parallax effect!</p>
        </Content>
      </ParallaxWrapper>
    );
  };
  
  export default Parallax;