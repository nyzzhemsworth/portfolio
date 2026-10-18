import React, { useEffect, useRef, useState } from 'react';

// Animasi reveal saat elemen masuk viewport (fade + naik pelan).
// delay: ms (buat efek stagger), y: jarak geser awal (px).
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        '--reveal-y': `${y}px`,
      }}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
