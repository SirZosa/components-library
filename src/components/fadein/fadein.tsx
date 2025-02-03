import './fadein.css';
import { useState, useRef, useEffect } from 'react';

type Props = {
  children: React.JSX.Element;
  threshold?: number;
  classNames?: string;
};

export default function FadeIn({ children, threshold=0.5, classNames='' }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.error('IntersectionObserver is not supported in this browser.');
      setIsVisible(true); // Fallback: make the element visible immediately
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold, // Trigger when 50% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const nameClass = isVisible ? `fade visible ${classNames}`: `fade not-visible ${classNames}`;

  return (
    <div ref={elementRef} className={nameClass}>
      {children}
    </div>
  );
}