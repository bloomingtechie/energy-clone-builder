import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Leaf,
  Zap,
  Users,
  Building2,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const climateImpact = [
  { value: "21,000+", label: "Estimated CO₂ emissions avoided (tCO₂e)", icon: Leaf },
  { value: "Multiple", label: "Clean energy projects financed across Nigeria", icon: Zap },
];

const devImpact = [
  { value: "370+", label: "Jobs created across portfolio projects", icon: Users },
  { value: "200+", label: "SMEs supported through clean energy value chains", icon: Building2 },
  { value: "5,000+", label: "New energy connections enabled", icon: Zap },
];

const additionalityPoints = [
  "Enables projects that would not otherwise reach financial close due to FX risk and tenor limitations",
  "Reduces foreign exchange risk barriers through local currency financing",
  "Mobilises domestic institutional capital that was previously inaccessible for clean energy",
  "Combines credit enhancement, blended finance, and guarantee structures",
];

const paradigmShift = [
  "Creates a repeatable, scalable model for local currency climate finance in Nigeria",
  "Strengthens domestic capital markets by introducing climate-compliant infrastructure assets",
  "Demonstrates that institutional investors can achieve risk-adjusted returns from climate infrastructure",
  "Builds local capacity for structuring and managing climate-aligned investments",
];

const Impact = () => (
  <div>
    <SEO
      title="Impact & Additionality"
      description="Discover CeF's climate and development impact — 21,000+ tonnes CO₂ avoided, 370+ jobs created, 5,000+ energy connections enabled across Nigeria."
      path="/impact"
    />
    <PageBanner title="Impact & Additionality" />

    {/* Climate Impact */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-10 uppercase tracking-wider text-center">
          Climate Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {climateImpact.map((m) => (
            <div key={m.label} className="bg-muted rounded-xl p-8 text-center">
              <m.icon className="text-secondary mx-auto mb-3" size={36} />
              <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">{m.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Development Impact */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-10 uppercase tracking-wider text-center">
          Development Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {devImpact.map((m) => (
            <div key={m.label} className="bg-background rounded-xl p-8 text-center shadow-sm">
              <m.icon className="text-secondary mx-auto mb-3" size={36} />
              <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">{m.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Additionality */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider text-center">
          Additionality
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          CeF addresses critical financing gaps that prevent clean energy projects from reaching financial close in Nigeria.
        </p>
        <div className="space-y-3">
          {additionalityPoints.map((p) => (
            <div key={p} className="flex items-start gap-3 p-4 rounded-lg bg-muted">
              <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-foreground">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Paradigm Shift */}
    <section className="py-16 md:py-20 cef-gradient-bg">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-8 uppercase tracking-wider text-center">
          Paradigm Shift
        </h2>
        <div className="space-y-4">
          {paradigmShift.map((p) => (
            <div key={p} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5 flex items-start gap-4">
              <TrendingUp className="text-secondary flex-shrink-0 mt-0.5" size={20} />
              <p className="text-primary-foreground text-sm">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Country Ownership */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto text-center">
        <Globe className="text-secondary mx-auto mb-4" size={40} />
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6 uppercase tracking-wider">
          Country Ownership
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          CeF's investments are aligned with Nigeria's Nationally Determined Contributions (NDCs) under the Paris Agreement. By mobilising domestic capital for climate infrastructure, CeF strengthens Nigeria's ownership of its energy transition and supports the country's commitment to reducing greenhouse gas emissions while promoting inclusive economic growth.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 cef-teal-gradient text-center">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
          Partner with us to scale climate impact
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  </div>
);

export default Impact;
