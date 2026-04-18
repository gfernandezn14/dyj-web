import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let rafId = null;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const loop = () => {
      cx += (tx - cx) * 0.25;
      cy += (ty - cy) * 0.25;
      if (el) el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = null;
      }
    };
    const move = (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(loop);
    };
    const over = (e) => {
      if (e.target.closest('a, button, [role="button"], .hoverable')) {
        el.classList.add('is-hover');
      } else {
        el.classList.remove('is-hover');
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  return <div ref={ref} className="cursor" />;
}
