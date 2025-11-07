'use client';

import { useEffect } from 'react';

export const useMouseGradient = () => {
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const { innerWidth: w, innerHeight: h } = window;
      document.body.style.setProperty('--posX', (x - w / 2).toString());
      document.body.style.setProperty('--posY', (y - h / 2).toString());
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);
};
