import { useEffect, useRef, useMemo, isValidElement, cloneElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const renderString = (str, keyPrefix) => {
      return str.split('|').map((phrase, phraseIndex) => {
        if (!phrase) return null;
        // Keep spaces around phrases so they don't stick together
        return (
          <span className="word inline-block mr-[0.3em]" key={`${keyPrefix}-p-${phraseIndex}`}>
            {phrase.trim()}
          </span>
        );
      });
    };

    if (typeof children === 'string') {
      return renderString(children, 'str');
    } else if (Array.isArray(children)) {
      return children.map((child, index) => {
        if (typeof child === 'string') return renderString(child, index);
        
        if (isValidElement(child) && typeof child.props.children === 'string') {
          return cloneElement(child, {
            key: index,
            className: `${child.props.className || ''} word inline-block mr-[0.3em]`,
          });
        }
        return <span className="word inline-block mr-[0.3em]" key={index}>{child}</span>;
      });
    }
    return children;
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: 0, y: 30, scale: 0.9, filter: enableBlur ? `blur(${blurStrength}px)` : 'none', willChange: 'opacity, transform, filter' },
      {
        duration: 0.5,
        ease: 'power3.out',
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: el.closest('.scroll-trigger-wrapper') || el.parentElement,
          scroller,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 2
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, wordAnimationEnd]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
