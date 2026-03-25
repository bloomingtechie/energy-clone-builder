import PageBanner from "@/components/PageBanner";
import { Target, Users, Globe, Leaf, TrendingUp, Zap } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "SDG 8 – Decent Work & Economic Growth",
    description:
      "We promote sustained, inclusive economic growth and productive employment by channelling investments into clean energy projects that create jobs and support local economic development across Nigeria.",
  },
  {
    icon: Globe,
    title: "SDG 11 – Sustainable Cities & Communities",
    description:
      "Our investments support the development of sustainable, resilient infrastructure including off-grid energy solutions, mini-grids and clean cooking systems that make communities more inclusive and liveable.",
  },
  {
    icon: Leaf,
    title: "SDG 13 – Climate Action",
    description:
      "We confront climate change by accelerating the flow of private capital into climate-smart technologies that facilitate Nigeria's energy transition towards clean energy sources and reduce carbon emissions.",
  },
  {
    icon: Users,
    title: "Gender Equality",
    description:
      "Gender equality is a core value embedded across our operations and investment decisions. We actively seek investments that empower women and promote equal participation in the clean energy value chain.",
  },
];

const About = () => (
  <div>
    <PageBanner title="About Us" />

    {/* Mission */}
    <section className="py-16 md:py-24">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6 uppercase tracking-wider">
          Our Mission
        </h2>
        <p className="text-muted-foreground mb-6">
          In collaboration with our development partners we are developing a clean energy fund with a mission to confront climate change by accelerating the flow of private capital in domestic currency into energy projects and climate-smart technologies that facilitate Nigeria's energy transition towards clean energy sources and energy efficiency that reduce carbon emissions and achieve less expensive, more reliable sources of energy while creating jobs and supporting local economic growth.
        </p>
        <p className="text-muted-foreground mb-6">
          A local currency fund dedicated to clean energy projects will act as a catalyst for private sector participation in climate and sustainable infrastructure finance by attracting investments from pension funds, insurance firms and other long-term institutional investors into eligible climate change adaptation projects linked to National Determined Contributions (NDCs), deepening the local capital markets with a new climate-compliant infrastructure asset and facilitating access to long term local currency.
        </p>
        <p className="text-muted-foreground">
          Our aim is to mobilise blended finance to attract private investments that will support the country in delivering a more ambitious Paris aligned NDCs.
        </p>
      </div>
    </section>

    {/* Market Gap */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6 uppercase tracking-wider">
          The Market Gap
        </h2>
        <p className="text-muted-foreground mb-6">
          Nigeria is now the country with the largest number of people without energy access in the world – over 85 million or 43%. This number has been growing due to population expansion. Sustainable Development Goal 7 (clean energy access) will not be globally achieved without significant progress in Nigeria.
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

        <p className="text-muted-foreground mb-6">
          Nigeria is currently the largest economy in Sub-Saharan Africa (GDP of $405 billion) with a population of about 184 million people. The electricity demand (industrial and domestic) is estimated to be about 180,000 Mega Watts (MW). The country however only has an installed capacity of 11,000MW, 8,000MW of which is operational.
        </p>
        <p className="text-muted-foreground">
          The development of off-grid alternatives such as mini-grids and solar systems, used efficiently, would create a $9.2 billion market opportunity and would potentially help Nigeria save c.$4.4 billion per annum, in addition to reducing carbon emissions and environmental degradation.
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
          Our investments are guided by a commitment to the United Nations Sustainable Development Goals and principles of inclusivity.
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

    {/* Fund Info */}
    <section className="py-16 md:py-20 cef-gradient-bg">
      <div className="section-container max-w-4xl mx-auto text-center">
        <h3 className="font-heading font-bold text-xl text-primary-foreground mb-6 uppercase tracking-wider">
          Fund Management
        </h3>
        <p className="text-primary-foreground/80 mb-4">
          The Fund Manager has established an Investment Committee comprising senior and experienced professionals, including independent members with wide-ranging experience in clean energy investments, risk and fund management. The five members of the IC collectively have more than 100 years of investing and financing experience.
        </p>
        <p className="text-primary-foreground/80">
          FundCo Capital Managers is authorised and registered by the Nigeria Securities & Exchange Commission to act as fund manager for the Clean Energy Local Currency Fund. Renaissance Securities (Nigeria) Limited is acting as the Issuing Housing and Financial Adviser to the Fund.
        </p>
      </div>
    </section>
  </div>
);

export default About;
