import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import {
  Zap,
  Flame,
  Wheat,
  Radio,
  Truck,
  ArrowDown,
  TrendingUp,
  BarChart3,
  DollarSign,
  Layers,
  Battery,
  ShieldCheck,
  Users,
  Building2,
  Handshake,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroSolar from "@/assets/hero-solar.jpg";
import climateBadge from "@/assets/climate-bonds-badge.png";
import factsheetPdf from "@/assets/Factsheet-26032026.pdf";

const sectors = [
  { icon: Zap, label: "Energy Access", desc: "Mini-grids, solar home systems" },
  {
    icon: Flame,
    label: "Clean Cooking",
    desc: "LPG, biogas, electric cooking",
  },
  {
    icon: Radio,
    label: "Telecommunications",
    desc: "Tower & connectivity infrastructure",
  },
  {
    icon: Truck,
    label: "Transportation",
    desc: "Including e-mobility solutions",
  },
  { icon: Wheat, label: "Agro-Processing", desc: "Productive use of energy" },
];

const impactMetrics = [
  { value: "21,000+", label: "Estimated CO₂ emissions avoided (tCO₂e)" },
  { value: "370+", label: "Jobs created" },
  { value: "200+", label: "SMEs supported" },
  { value: "5,000+", label: "New energy connections enabled" },
];

const whyLocalCurrency = [
  "Eliminates or reduces foreign exchange (FX) risk for infrastructure projects",
  "Enables long-term financing in local currency (naira)",
  "Improves affordability and tariff stability for end users",
  "Unlocks domestic institutional capital from pension funds and insurers",
  "Supports development of local capital markets",
];

const whyNow = [
  "Nigeria has over 85 million people without access to reliable electricity",
  "Rapid population growth is increasing energy demand",
  "Significant dependence on fossil fuel generators (~$14 billion annual spend)",
  "Strong national climate commitments (NDCs)",
  "Growing domestic institutional capital base seeking long-term investments",
];

const portfolioItems = [
  {
    title: "E-Mobility",
    desc: "Deployment of electric 2-wheelers, 3-wheelers, and charging/swapping infrastructure for urban and rural logistics",
  },
  {
    title: "Mini-Grids",
    desc: "Renewable energy systems supporting rural electrification across underserved communities",
  },
  {
    title: "Solar Home Systems",
    desc: "Asset-backed platforms providing distributed solar solutions to households",
  },
  {
    title: "Telecom Infrastructure",
    desc: "Tower infrastructure for mobile and internet connectivity expansion",
  },
  {
    title: "Agro-Processing",
    desc: "Equipment enabling productive use of energy in rural communities",
  },
];

const ctaBlocks = [
  {
    icon: TrendingUp,
    title: "Investors",
    desc: "Access institutional climate infrastructure opportunities",
    link: "/contact",
    label: "Learn More",
  },
  {
    icon: Building2,
    title: "Project Sponsors",
    desc: "Submit eligible projects for financing",
    link: "/pipeline-eligibility",
    label: "Submit Project",
  },
  {
    icon: Globe,
    title: "DFIs",
    desc: "Partner on blended finance and climate impact",
    link: "/contact",
    label: "Get in Touch",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    desc: "Collaborate on pipeline and ecosystem development",
    link: "/contact",
    label: "Partner With Us",
  },
];

const Index = () => (
  <div>
    <SEO
      title="Clean Energy Local Currency Fund (CeF) | Climate Infrastructure Investment in Nigeria"
      description="CeF mobilises domestic institutional capital to finance climate-aligned infrastructure across Nigeria. Long-term naira financing for clean energy, reducing FX risk and unlocking private capital."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "InvestmentFund",
        name: "Clean Energy Local Currency Fund",
        alternateName: "CeF",
        description:
          "A Nigeria-focused climate infrastructure fund providing long-term local currency financing for clean energy and sustainable infrastructure projects.",
        url: "https://cleanenergyfund.ng",
        areaServed: "Nigeria",
        knowsAbout: [
          "Climate Finance",
          "Clean Energy",
          "Infrastructure Investment",
          "Renewable Energy",
          "Local Currency Financing",
        ],
      }}
    />
    {/* Hero */}
    <section
      className="relative min-h-[90vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroSolar})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsla(210,70%,20%,0.88), hsla(175,70%,30%,0.55))",
        }}
      />
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-[3.2rem] leading-tight font-heading font-bold text-primary-foreground mb-6">
            Financing Nigeria's energy transition through local currency climate
            infrastructure investment
          </h1>
          <p className="text-primary-foreground/85 text-base md:text-lg mb-8 leading-relaxed">
            The Clean Energy Local Currency Fund (CeF) mobilises domestic
            institutional capital to finance climate-aligned infrastructure
            across Nigeria. By providing long-term naira financing, CeF reduces
            foreign exchange risk, unlocks private capital, and supports
            inclusive economic growth.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/investors-relation"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              For Investors
            </Link>
            <Link
              to="/pipeline-eligibility"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm"
            >
              Submit a Project
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={climateBadge}
            alt="Climate Bonds Standard Certified"
            className="w-40 md:w-52 rounded-lg bg-primary-foreground/90 p-3"
            loading="lazy"
            width={512}
            height={512}
          />
        </div>
      </div>
    </section>

    {/* Impact Metrics Strip */}
    <section className="py-10 md:py-14 cef-gradient-bg">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {impactMetrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                {m.value}
              </p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Credibility */}
    <section className="py-14 md:py-20 bg-muted">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <ShieldCheck className="text-secondary mx-auto mb-3" size={32} />
            <h4 className="font-heading font-bold text-foreground text-sm mb-1">
              Climate Bonds Certified
            </h4>
            <p className="text-xs text-muted-foreground">
              Portfolio-level green certification by CBI
            </p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <BarChart3 className="text-secondary mx-auto mb-3" size={32} />
            <h4 className="font-heading font-bold text-foreground text-sm mb-1">
              GCR BBB Rating
            </h4>
            <p className="text-xs text-muted-foreground">
              Investment grade national scale rating
            </p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <BarChart3 className="text-secondary mx-auto mb-3" size={32} />
            <h4 className="font-heading font-bold text-foreground text-sm mb-1">
              Agusto BBB Rating
            </h4>
            <p className="text-xs text-muted-foreground">
              International scale rating by Agusto & Co
            </p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <Building2 className="text-secondary mx-auto mb-3" size={32} />
            <h4 className="font-heading font-bold text-foreground text-sm mb-1">
              SEC Regulated
            </h4>
            <p className="text-xs text-muted-foreground">
              FundCo Capital Managers Limited
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Local Currency Matters */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
          Why Local Currency Matters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyLocalCurrency.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-4 rounded-lg bg-muted"
            >
              <CheckCircle2
                className="text-secondary flex-shrink-0 mt-0.5"
                size={20}
              />
              <p className="text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Priority Sectors */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container">
        <p className="text-center text-muted-foreground font-medium mb-2 uppercase tracking-wider text-sm">
          Priority Sectors
        </p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">
          Our investments directly address key infrastructure gaps
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                <s.icon className="text-secondary" size={28} />
              </div>
              <span className="font-heading font-semibold text-sm text-center text-foreground">
                {s.label}
              </span>
              <span className="text-xs text-muted-foreground text-center">
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why CeF Is Additional */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
          Why CeF?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Commercial financing in Nigeria often does not provide long-term local
          currency funding for infrastructure projects due to FX risk, tenor
          limitations, and perceived credit risks. CeF addresses this gap by
          structuring investments that combine credit enhancement, blended
          finance, and institutional capital mobilisation.
        </p>
      </div>
    </section>

    {/* Why Now */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
          Why Now
        </h2>
        <div className="space-y-3">
          {whyNow.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 p-4 rounded-lg bg-background"
            >
              <ArrowRight
                className="text-secondary flex-shrink-0 mt-0.5"
                size={18}
              />
              <p className="text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How CeF Works */}
    <section className="py-16 md:py-20 cef-gradient-bg">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6 text-center">
          How CeF Works
        </h2>
        <p className="text-primary-foreground/80 text-center mb-10 max-w-2xl mx-auto">
          CeF operates in partnership with InfraCredit under the Clean Energy
          Funding Programme (CEFP):
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: ShieldCheck,
              text: "InfraCredit provides AAA-rated guarantees to de-risk investments",
            },
            {
              icon: Layers,
              text: "CeF provides subordinated or bridge capital",
            },
            {
              icon: Users,
              text: "Pension funds and insurance companies provide senior debt financing",
            },
            {
              icon: TrendingUp,
              text: "The model unlocks scalable local currency financing for clean energy projects",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 flex items-start gap-4"
            >
              <item.icon
                className="text-secondary flex-shrink-0 mt-1"
                size={24}
              />
              <p className="text-primary-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Snapshot */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">
          Portfolio Snapshot
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="font-heading font-bold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Eligibility / Factsheet */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Got a project? Check our eligibility criteria.
        </h2>
        <p className="text-muted-foreground mb-8">
          The Clean Energy Local Currency Fund treats each investment
          opportunity on its own merit and designs a suitable transaction
          structure that reflects the risks and particularities of that
          investment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={factsheetPdf}
            download="Factsheet-26032026.pdf"
            className="inline-block bg-secondary text-secondary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Download Factsheet
          </a>
          <Link
            to="/pipeline-eligibility"
            className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            View Eligibility Criteria
          </Link>
        </div>
      </div>
    </section>

    {/* Green Certification & Fund Rating */}
    <section className="py-16 md:py-20">
      <div className="section-container grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">
            Green Certification
          </h3>
          <p className="text-muted-foreground mb-6">
            Clean Energy Local Currency Fund has met the criteria and received
            green certification for its loan portfolio by the Climate Bonds
            Standard Board on behalf of the Climate Bonds Initiative.
          </p>
          <div className="w-full h-48 border border-border rounded-xl flex items-center justify-center">
            <img
              src={climateBadge}
              alt="Climate Bonds Standard Certified"
              className="w-40 md:w-52 rounded-lg bg-primary-foreground/90 p-3"
              loading="lazy"
              width={512}
              height={512}
            />
          </div>
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">
            Fund Rating
          </h3>
          <p className="text-muted-foreground mb-6">
            The Clean Energy Fund was assigned an investment grade national
            scale fund rating by GCR and an international scale rating by Agusto
            & Co, both with a Stable outlook.
          </p>
          <div className="w-full h-48 bg-foreground/5 border border-border rounded-xl flex flex-col items-center justify-center gap-2">
            <span className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              GCR/BBB
            </span>
            <span className="text-sm text-muted-foreground">
              Investment Grade · Stable Outlook
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Segmented CTAs */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">
          How Can We Work Together?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaBlocks.map((cta) => (
            <div
              key={cta.title}
              className="bg-background rounded-xl p-6 flex flex-col shadow-sm"
            >
              <cta.icon className="text-secondary mb-4" size={28} />
              <h4 className="font-heading font-bold text-foreground mb-2">
                {cta.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {cta.desc}
              </p>
              <Link
                to={cta.link}
                className="text-sm font-semibold text-secondary hover:underline inline-flex items-center gap-1"
              >
                {cta.label} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 cef-teal-gradient text-center">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
          Interested in learning more?
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

export default Index;
