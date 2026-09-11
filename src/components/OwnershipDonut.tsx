import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export interface OwnershipSlice {
  name: string;
  pct: number;
}

interface OwnershipDonutProps {
  data: OwnershipSlice[];
  title?: string;
}

// Brand palette (navy / blue / teal / green family) — matches the CeF HSL
// design tokens defined in src/index.css / tailwind.config.ts (cef.*).
const SEGMENT_COLORS = [
  "hsl(220, 80%, 20%)", // cef-navy
  "hsl(175, 70%, 42%)", // cef-teal
  "hsl(220, 80%, 30%)", // cef-blue
  "hsl(140, 60%, 40%)", // cef-green
  "hsl(220, 60%, 50%)", // mid blue
  "hsl(175, 55%, 62%)", // light teal
  "hsl(140, 45%, 58%)", // light green
  "hsl(220, 30%, 68%)", // muted blue-gray
];

const WIDTH = 280;
const HEIGHT = 280;
const RADIUS = Math.min(WIDTH, HEIGHT) / 2;
const INNER_RADIUS = RADIUS * 0.6;

const OwnershipDonut = ({ data, title = "Ownership Breakdown" }: OwnershipDonutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const total = data.reduce((sum, d) => sum + d.pct, 0);

  // Trigger draw-in only once, when the chart scrolls into view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg
      .attr("width", WIDTH)
      .attr("height", HEIGHT)
      .attr("viewBox", `0 0 ${WIDTH} ${HEIGHT}`)
      .append("g")
      .attr("transform", `translate(${WIDTH / 2}, ${HEIGHT / 2})`);

    const pie = d3
      .pie<OwnershipSlice>()
      .value((d) => d.pct)
      .sort(null)
      .padAngle(0.01);

    const arc = d3
      .arc<d3.PieArcDatum<OwnershipSlice>>()
      .innerRadius(INNER_RADIUS)
      .outerRadius(RADIUS);

    const arcs = pie(data);

    const paths = g
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("fill", (_, i) => SEGMENT_COLORS[i % SEGMENT_COLORS.length])
      .attr("stroke", "hsl(0, 0%, 100%)")
      .attr("stroke-width", 2)
      .each(function (d) {
        (this as unknown as { _current: d3.PieArcDatum<OwnershipSlice> })._current = {
          ...d,
          startAngle: d.startAngle,
          endAngle: d.startAngle,
        };
      });

    paths
      .transition()
      .duration(1200)
      .delay((_, i) => i * 90)
      .ease(d3.easeCubicOut)
      .attrTween("d", function (d) {
        const self = this as unknown as { _current: d3.PieArcDatum<OwnershipSlice> };
        const interpolate = d3.interpolate(self._current, d);
        self._current = interpolate(1);
        return (t: number) => arc(interpolate(t)) ?? "";
      });

    paths
      .append("title")
      .text((d) => `${d.data.name}: ${d.data.pct}%`);

    // Center label
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.1em")
      .attr("class", "fill-foreground")
      .style("font-family", "Montserrat, sans-serif")
      .style("font-weight", 700)
      .style("font-size", "1.6rem")
      .text(`${total}%`);

    g.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "1.4em")
      .attr("class", "fill-muted-foreground")
      .style("font-family", "Open Sans, sans-serif")
      .style("font-size", "0.7rem")
      .text("Total Holding");
  }, [hasAnimated, data, total]);

  return (
    <div
      ref={containerRef}
      className="bg-background rounded-xl p-6 shadow-sm flex flex-col items-center"
    >
      <h3 className="font-heading font-bold text-foreground mb-1 text-center">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground mb-4 text-center">
        Animated share of holdings by investor
      </p>
      <svg ref={svgRef} className="max-w-full h-auto" />
      <ul className="w-full mt-4 space-y-1.5">
        {data.map((d, i) => (
          <li key={d.name} className="flex items-center gap-2 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: SEGMENT_COLORS[i % SEGMENT_COLORS.length],
              }}
            />
            <span className="text-foreground flex-1 truncate">{d.name}</span>
            <span className="font-semibold text-foreground">{d.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnershipDonut;
