import { useEffect, useRef } from "react";
import gsap from "gsap";

import leadway from "@/assets/leadway.png";
import nlpc from "@/assets/nlpc.png";
import fcmb from "@/assets/fcmb.png";
import access from "@/assets/access.png";
import allon from "@/assets/allon.png";
import oak from "@/assets/oak.png";
import Cardinal from "@/assets/Cardinal.png";
import fundco from "@/assets/fundco.png";
import nupemco from "@/assets/nupemco.png";
import VGPensions from "@/assets/VGPensions.png";
import rencap from "@/assets/ren-cap.png";

export interface PartnerLogo {
  name: string;
  src: string;
}

// The full partner/investor logo roster used across CeF's marquee treatments.
// DREEF is intentionally excluded here — it already has its own dedicated
// "Initiatives We Back" spotlight elsewhere on the Governance page, and CeF's
// own brand mark (cef.png, used in the site footer) is excluded since CeF is
// not its own partner.
export const partnerLogos: PartnerLogo[] = [
  { name: "Leadway Pensure PFA", src: leadway },
  { name: "NLPC Pension Fund Administrators", src: nlpc },
  { name: "FCMB Pensions", src: fcmb },
  { name: "Access ARM Pensions", src: access },
  { name: "All On Partnerships for Energy Access", src: allon },
  { name: "Oak Pensions", src: oak },
  { name: "CardinalStone Pensions", src: Cardinal },
  { name: "FundCo Capital Managers", src: fundco },
  { name: "Nigerian University Pension Management (NUPEMCO)", src: nupemco },
  { name: "Veritas Glanvills Pensions", src: VGPensions },
  { name: "Renewable Capital", src: rencap },
];

/* ── Row 1: seamless infinite scroll ── */
const ScrollRow = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative overflow-hidden py-6 group"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-14 partner-marquee-track group-hover:[animation-play-state:paused]"
      >
        {[...partnerLogos, ...partnerLogos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center justify-center h-14 w-32 flex-shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-12 max-w-full w-auto object-contain grayscale opacity-70 transition-all duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Row 2: GSAP-driven crossfade switcher ── */
const SwitcherRow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const imgs = Array.from(
      container.querySelectorAll<HTMLImageElement>("img[data-switcher-logo]")
    );
    if (imgs.length === 0) return;

    gsap.set(imgs, { autoAlpha: 0, scale: 0.85 });
    gsap.set(imgs[0], { autoAlpha: 1, scale: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    imgs.forEach((_, i) => {
      const current = imgs[i];
      const next = imgs[(i + 1) % imgs.length];
      tl.to(current, {
        autoAlpha: 0,
        scale: 0.85,
        duration: 0.6,
        ease: "power2.inOut",
      }, `+=${2.5}`)
        .fromTo(
          next,
          { autoAlpha: 0, scale: 0.85 },
          { autoAlpha: 1, scale: 1, duration: 0.6, ease: "power2.inOut" },
          "<"
        );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="py-6 flex flex-col items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
        Trusted By Our Institutional Partners
      </span>
      <div
        ref={containerRef}
        className="relative h-16 w-56 flex items-center justify-center"
      >
        {partnerLogos.map((logo) => (
          <img
            key={logo.name}
            data-switcher-logo
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            className="absolute inset-0 m-auto max-h-14 max-w-full w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

const PartnerMarquee = ({ className = "" }: { className?: string }) => {
  return (
    <section className={`py-14 md:py-16 bg-muted/60 ${className}`}>
      <div className="section-container">
        <p className="text-center text-muted-foreground font-medium mb-2 uppercase tracking-wider text-xs md:text-sm">
          Our Investors & Strategic Partners
        </p>
        <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8 text-center">
          Backed by Nigeria's Leading Institutional Capital
        </h2>

        <ScrollRow />

        <div className="my-2 border-t border-border/60 max-w-3xl mx-auto" />

        <SwitcherRow />
      </div>
    </section>
  );
};

export default PartnerMarquee;
