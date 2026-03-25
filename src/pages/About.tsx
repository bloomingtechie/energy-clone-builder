import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Globe,
  Leaf,
  TrendingUp,
  Zap,
  ShieldCheck,
  ArrowRight,
  Layers,
  Building2,
  DollarSign,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "SDG 5 — Gender Equality",
    description:
      "Gender equality is a core value embedded across our operations and investment decisions. We actively seek investments that empower women and promote equal participation in the clean energy value chain.",
  },
  {
    icon: TrendingUp,
    title: "SDG 8 — Decent Work & Economic Growth",
    description:
      "We promote sustained, inclusive economic growth and productive employment by channelling investments into clean energy projects that create jobs and support local economic development across Nigeria.",
  },
  {
    icon: Globe,
    title: "SDG 11 — Sustainable Cities & Communities",
    description:
      "Our investments support the development of sustainable, resilient infrastructure including off-grid energy solutions, mini-grids and clean cooking systems that make communities more inclusive and liveable.",
  },
  {
    icon: Leaf,
    title: "SDG 13 — Climate Action",
    description:
      "We confront climate change by accelerating the flow of private capital into climate-smart technologies that facilitate Nigeria's energy transition towards clean energy sources and reduce carbon emissions.",
  },
];

const investorTypes = [
  "Pension Funds",
  "Insurance Companies",
  "Development Finance Institutions",
  "High Net Worth Individuals",
];

const About = () => (
  <div>
    <SEO
      title="About CeF"
      description="Learn about the Clean Energy Local Currency Fund — a blended finance vehicle mobilising Nigerian institutional capital for climate-aligned infrastructure investment."
      path="/about"
    />
    <PageBanner title="About CeF" />

    {/* Fund Description */}
    <section className="py-16 md:py-24">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6 uppercase tracking-wider">
          Fund Overview
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The Clean Energy Local Currency Fund (CeF) is a Nigeria-focused climate infrastructure fund providing long-term local currency financing to clean energy and sustainable infrastructure projects. CeF was created to confront climate change by accelerating the flow of private capital in domestic currency into energy projects and climate-smart technologies that facilitate Nigeria's energy transition.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          In collaboration with our development partners, we are mobilising blended finance to attract private investments that will support the country in delivering more ambitious Paris-aligned Nationally Determined Contributions (NDCs).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A local currency fund dedicated to clean energy projects acts as a catalyst for private sector participation in climate and sustainable infrastructure finance by attracting investments from pension funds, insurance firms and other long-term institutional investors.
        </p>
      </div>
    </section>

    {/* Fund Structure */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-10 uppercase tracking-wider text-center">
          Fund Structure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background rounded-xl p-8 text-center shadow-sm">
            <Layers className="text-secondary mx-auto mb-4" size={36} />
            <h4 className="font-heading font-bold text-foreground mb-2">Blended Finance Model</h4>
            <p className="text-sm text-muted-foreground">
              Combines subordinated capital, guarantees, and senior institutional debt to de-risk investments and attract institutional capital.
            </p>
          </div>
          <div className="bg-background rounded-xl p-8 text-center shadow-sm">
            <ShieldCheck className="text-secondary mx-auto mb-4" size={36} />
            <h4 className="font-heading font-bold text-foreground mb-2">InfraCredit Partnership</h4>
            <p className="text-sm text-muted-foreground">
              InfraCredit provides AAA-rated guarantees under the Clean Energy Funding Programme (CEFP), enabling pension funds to participate.
            </p>
          </div>
          <div className="bg-background rounded-xl p-8 text-center shadow-sm">
            <Building2 className="text-secondary mx-auto mb-4" size={36} />
            <h4 className="font-heading font-bold text-foreground mb-2">SEC Regulated</h4>
            <p className="text-sm text-muted-foreground">
              FundCo Capital Managers Limited is authorised by the Nigeria Securities & Exchange Commission to act as fund manager.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Capital Flow */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8 uppercase tracking-wider">
          Capital Flow
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {["Investors", "CeF", "Project SPVs", "Returns"].map((step, i) => (
            <div key={step} className="flex items-center gap-4 md:gap-6">
              <div className="bg-primary text-primary-foreground rounded-lg px-6 py-4 font-heading font-bold text-sm">
                {step}
              </div>
              {i < 3 && <ArrowRight className="text-secondary hidden md:block" size={24} />}
              {i < 3 && <ArrowRight className="text-secondary md:hidden rotate-90" size={24} />}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 text-sm">
          Investors provide capital → CeF deploys into project SPVs → Returns flow back as interest and dividends
        </p>
      </div>
    </section>

    {/* Investment Strategy */}
    <section className="py-16 md:py-20 cef-gradient-bg">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-8 uppercase tracking-wider text-center">
          Investment Strategy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: TrendingUp, text: "Focus on scalable infrastructure with measurable climate impact" },
            { icon: DollarSign, text: "Long-term capital deployment in local currency to reduce FX risk" },
            { icon: Target, text: "Climate-aligned sectors including energy access, e-mobility, and clean cooking" },
            { icon: Layers, text: "Diversified portfolio across multiple value chains and geographies within Nigeria" },
          ].map((item) => (
            <div key={item.text} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 flex items-start gap-4">
              <item.icon className="text-secondary flex-shrink-0 mt-1" size={24} />
              <p className="text-primary-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Target Investors */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8 uppercase tracking-wider text-center">
          Target Investors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {investorTypes.map((type) => (
            <div key={type} className="bg-muted rounded-xl p-6 text-center">
              <p className="font-heading font-semibold text-sm text-foreground">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Market Gap */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6 uppercase tracking-wider">
          The Market Gap
        </h2>
        <p className="text-muted-foreground mb-6">
          Nigeria is now the country with the largest number of people without
          energy access in the world — over 85 million or 43%. This number has
          been growing due to population expansion. Sustainable Development Goal
          7 (clean energy access) will not be globally achieved without
          significant progress in Nigeria.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <Zap className="text-secondary mx-auto mb-2" size={32} />
            <p className="text-3xl font-heading font-bold text-foreground">85m</p>
            <p className="text-sm text-muted-foreground mt-1">People without access to power</p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <Users className="text-secondary mx-auto mb-2" size={32} />
            <p className="text-3xl font-heading font-bold text-foreground">184m</p>
            <p className="text-sm text-muted-foreground mt-1">Population of Nigeria</p>
          </div>
          <div className="bg-background rounded-xl p-6 text-center shadow-sm">
            <Target className="text-secondary mx-auto mb-2" size={32} />
            <p className="text-3xl font-heading font-bold text-foreground">$14bn</p>
            <p className="text-sm text-muted-foreground mt-1">Spent on fossil fuel generators yearly</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          The development of off-grid alternatives such as mini-grids and solar
          systems would create a $9.2 billion market opportunity and potentially
          help Nigeria save approximately $4.4 billion per annum.
        </p>
      </div>
    </section>

    {/* Our Values */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider text-center">
          Our Values
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our investments are guided by a commitment to the United Nations
          Sustainable Development Goals and principles of inclusivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-muted rounded-xl p-8 flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <v.icon className="text-secondary" size={28} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 cef-teal-gradient text-center">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
          Ready to invest in Nigeria's clean energy future?
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

export default About;
