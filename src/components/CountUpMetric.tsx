import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpMetricProps {
  value: string;
  className?: string;
}

// Parses strings like "21,000+", "370+", "5,000+", "Multiple" into a
// numeric target plus surrounding prefix/suffix text so it can be
// animated with GSAP while preserving the original formatting.
const parseValue = (raw: string) => {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numericStr, suffix] = match;
  const hasCommas = numericStr.includes(",");
  const target = parseFloat(numericStr.replace(/,/g, ""));
  if (Number.isNaN(target)) return null;
  return { prefix, target, suffix, hasCommas };
};

const CountUpMetric = ({ value, className = "" }: CountUpMetricProps) => {
  const elRef = useRef<HTMLParagraphElement>(null);
  const parsed = parseValue(value);

  useEffect(() => {
    const el = elRef.current;
    if (!el || !parsed) return;

    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: parsed.target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          const displayNum = Math.floor(counter.n);
          const formatted = parsed.hasCommas
            ? displayNum.toLocaleString("en-US")
            : String(displayNum);
          el.textContent = `${parsed.prefix}${formatted}${parsed.suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [parsed]);

  if (!parsed) {
    return <p className={className}>{value}</p>;
  }

  return (
    <p ref={elRef} className={className}>
      {parsed.prefix}0{parsed.suffix}
    </p>
  );
};

export default CountUpMetric;
