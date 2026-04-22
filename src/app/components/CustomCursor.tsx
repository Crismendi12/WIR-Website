import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-clickable]') ||
        target.closest('[role="button"]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON';

      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-all duration-150 ease-out"
        style={{
          width: isHovering ? '40px' : '32px',
          height: isHovering ? '40px' : '32px',
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          border: `2px solid ${isHovering ? '#1c17ff' : '#000'}`,
          borderRadius: '50%',
          opacity: isHovering ? 0.6 : 0.3,
        }}
      />

      {/* Inner dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-all duration-100"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          backgroundColor: isHovering ? '#1c17ff' : '#000',
          borderRadius: '50%',
          opacity: 0.8,
        }}
      />
    </>
  );
}
