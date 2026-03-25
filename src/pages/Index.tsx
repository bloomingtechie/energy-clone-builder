import { Link } from "react-router-dom";
import { Zap, Flame, Wheat, Radio, Truck, ArrowDown, TrendingUp, BarChart3, DollarSign, Layers, Battery } from "lucide-react";
import heroSolar from "@/assets/hero-solar.jpg";
import climateBadge from "@/assets/climate-bonds-badge.png";
import eligibilityImg from "@/assets/eligibility-criteria.png";

const sectors = [
  { icon: Zap, label: "Energy Access" },
  { icon: Flame, label: "Clean Cooking" },
  { icon: Wheat, label: "Agro-Processing" },
  { icon: Radio, label: "Telecommunication" },
  { icon: Truck, label: "Transportation" },
];

const fundAims = [
  { icon: TrendingUp, text: "Support small-scale clean energy generation" },
  { icon: Battery, text: "Support low-carbon energy infrastructure" },
  { icon: Layers, text: "Support alternative clean energy infrastructure" },
  { icon: DollarSign, text: "Reduce FX exposure by providing local currency financing" },
  { icon: BarChart3, text: "Create a diversified portfolio of investments across multiple value chains" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${heroSolar})` }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(210,70%,20%,0.8), hsla(175,70%,30%,0.5))" }} />
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-10 py-20">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl lg:text-[3.2rem] leading-tight font-heading font-bold text-primary-foreground mb-6">
            Providing local currency funding to climate aligned, sustainable and inclusive clean energy infrastructure
          </h1>
          <a href="#about" className="inline-flex items-center gap-2 text-primary-foreground border border-primary-foreground/40 rounded-full px-5 py-2 hover:bg-primary-foreground/10 transition-colors">
            <ArrowDown size={18} /> Learn More
          </a>
        </div>
        <div className="flex-shrink-0">
          <img src={climateBadge} alt="Climate Bonds Standard Certified" className="w-40 md:w-52 rounded-lg bg-primary-foreground/90 p-3" loading="lazy" width={512} height={512} />
        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="section-container text-center max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
          We provide local currency funding from domestic institutional investors to small and medium sized climate compliant energy projects.
        </h2>
      </div>
    </section>

    {/* Sectors */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <p className="text-center text-muted-foreground font-medium mb-10 uppercase tracking-wider text-sm">Our investment will directly address key priority sectors</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                <s.icon className="text-secondary" size={28} />
              </div>
              <span className="font-heading font-semibold text-sm text-center text-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fund Aims */}
    <section className="py-16 md:py-20 cef-gradient-bg">
      <div className="section-container">
        <h3 className="text-center font-heading font-bold text-lg uppercase tracking-wider text-primary-foreground mb-4">The Fund Aims To</h3>
        <p className="text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Provide domestic capital to support climate mitigation and energy transition projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundAims.map((aim) => (
            <div key={aim.text} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 flex items-start gap-4">
              <aim.icon className="text-secondary flex-shrink-0 mt-1" size={24} />
              <p className="text-primary-foreground text-sm">{aim.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Eligibility */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <p className="text-sm font-heading uppercase tracking-wider text-secondary mb-2">Eligibility Criteria</p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Got a project? Check our eligibility criteria on how we choose where to invest.
            </h2>
            <p className="text-muted-foreground mb-6">
              The Clean Energy Local Currency Fund treats each investment opportunity on its own merit and designs a suitable transaction structure around it that reflects the risks and particularities of that investment.
            </p>
            <a href="#" className="inline-block bg-secondary text-secondary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm">
              Download FactSheet
            </a>
          </div>
          <img src={eligibilityImg} alt="Eligibility Criteria" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={600} />
        </div>
      </div>
    </section>

    {/* Green Certification & Fund Rating */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">Green Certification</h3>
          <p className="text-muted-foreground">
            Clean Energy Local Currency Fund has met the criteria and received green certification for its loan portfolio by the Climate Bonds Standard Board on behalf of the Climate Bonds Initiative.
          </p>
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">Fund Rating</h3>
          <p className="text-muted-foreground">
            The Clean Energy Fund was assigned an investment grade national scale fund rating with the outlook accorded as Stable.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 cef-teal-gradient text-center">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">Interested in learning more?</h2>
        <Link to="/contact" className="inline-block bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Get In Touch
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
