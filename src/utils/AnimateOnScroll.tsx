import React, { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  rootMargin?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  threshold = 0.1,
  className = 'fade-in',
  rootMargin = '0px 0px -50px 0px'
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;