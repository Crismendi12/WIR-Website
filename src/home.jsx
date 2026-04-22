/* ───────── Home · assembler + shared hooks ───────── */

function AnimatedNum({ to, duration=1400 }) {
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const raf = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(to * eased);
            if (t < 1) requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const isFloat = to % 1 !== 0;
  const txt = isFloat ? n.toFixed(1) : Math.round(n).toString();
  return <span ref={ref}>{txt}</span>;
}

Object.assign(window, { AnimatedNum });

function HomePage({ go }) {
  useReveal();
  return (
    <>
      <Opening go={go}/>
      <Proof/>
      <Shift/>
      <ProductTabs go={go}/>
      <WorkflowSVG/>
      <Trust/>
      <Closing go={go}/>
    </>
  );
}

Object.assign(window, { HomePage });
