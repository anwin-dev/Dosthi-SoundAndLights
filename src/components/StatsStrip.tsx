import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { metrics } from '../data/siteData';

const AnimatedMetric = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const visible = useInView(ref, { once: true, margin: '-20%' });
  const [count, setCount] = useState(0);
  const target = Number.parseInt(value.replaceAll(',', ''), 10);

  useEffect(() => {
    if (!visible || Number.isNaN(target)) return;
    const duration = 1100;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, visible]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export const StatsStrip = () => (
  <section className="section-shell my-20 grid gap-4 md:grid-cols-4">
    {metrics.map((metric) => (
      <article key={metric.label} className="reveal-up glass-panel rounded-3xl p-6">
        <p className="text-4xl font-semibold text-[#FFD54A]">
          <AnimatedMetric value={metric.value} />
          {metric.suffix}
        </p>
        <p className="mt-2 text-sm text-white/65">{metric.label}</p>
      </article>
    ))}
  </section>
);
