import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Users,
  Building2,
  Eye,
  Scale,
  ArrowRight,
} from "lucide-react";
import abiodun from "@/assets/abiodun.png";
import alli from "@/assets/alli.png";
import humprehy from "@/assets/humprehy.png";
import wella from "@/assets/wella.png";
import emi from "@/assets/emi.png";
import ojuru from "@/assets/ojuru.png";

const investmentCommittee = [
  {
    name: "David Humphrey",
    image: humprehy,
    bio: "Experienced infrastructure and energy finance professional with extensive background in power sector advisory. Previously CFO at Hive Energy (Renewable Energy) and Global Head, Power & Infrastructure at Standard Bank.",
  },
  {
    name: "Welela Dawit",
    image: wella,
    bio: "Distinguished finance executive with deep expertise in corporate governance and financial management across Africa. Previously CFO at Microsoft South Africa and CFO at General Electric (GE) Africa.",
  },
  {
    name: "Ade Alli",
    image: alli,
    bio: "Infrastructure, ESG, and renewables specialist with significant experience in sustainable infrastructure investment across West Africa. Previously with Oodua Group and Sterling Bank Renewables.",
  },
  {
    name: "Abiodun Oni",
    image: abiodun,
    bio: "Founder and Managing Director of FundCo Capital Managers. Consultant on the Clean Energy Funding Program with InfraCredit. Brings decades of structured finance and fund management expertise.",
  },
  {
    name: "Emi Agaba-Oloja",
    image: emi,
    bio: "Chief Executive at Stanbic IBTC Trustees Limited.",
  },
  {
    name: "Ojuru Adeniji",
    image: ojuru,
    bio: "Sector Lead, Digital Infrastucture & Green Growth, InfraCredit.",
  },
];

const advisers = [
  { role: "Legal Adviser", name: "Olaniwun Ajayi LP" },
  { role: "Financial Adviser", name: "FSDH Capital Ltd and FCMB" },
  { role: "Auditor", name: "PricewaterhouseCoopers" },
  { role: "Trustee", name: "Stanbic IBTC" },
  { role: "Registrar", name: "Africa Prudential" },
];

const partners = [
  {
    name: "InfraCredit",
    desc: "Provides AAA-rated guarantees under the Clean Energy Funding Programme (CEFP)",
  },
  {
    name: "All On Energy",
    desc: "Partner to the Fund",
  },
  { name: "FundCo Capital Managers", desc: "SEC-regulated Fund Manager" },
];

const governanceProcess = [
  {
    icon: Eye,
    title: "Investment Screening",
    desc: "Rigorous assessment of project eligibility, climate alignment, and bankability",
  },
  {
    icon: ShieldCheck,
    title: "Risk Review",
    desc: "Comprehensive risk analysis covering credit, operational, environmental, and social factors",
  },
  {
    icon: CheckCircle2,
    title: "Portfolio Monitoring",
    desc: "Ongoing oversight of investee projects including financial performance and impact metrics",
  },
  {
    icon: Scale,
    title: "Conflict Management",
    desc: "Clear policies and procedures for managing conflicts of interest across all stakeholders",
  },
];

const OurTeam = () => (
  <div>
    <SEO
      title="Governance & Team"
      description="Meet the Investment Committee and governance structure of the Clean Energy Local Currency Fund. Experienced professionals in infrastructure, finance, and climate investment."
      path="/our-team"
    />
    <PageBanner title="Governance" />

    {/* Investment Committee */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="text-center font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider">
          Investment Committee
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-14">
          The Fund Manager has established an Investment Committee comprising
          senior and experienced professionals, including independent members
          with wide-ranging experience in clean energy investments, risk and
          fund management. The six members of the IC collectively have more than
          100 years of investing and financing experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentCommittee.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 md:w-52 rounded-lg bg-primary-foreground/90 p-3"
                  loading="lazy"
                  width={160}
                  height={160}
                />
              </div>
              <h4 className="font-heading font-bold text-foreground">
                <span>{member.name.split(" ")[0]} </span>
                <span className="text-secondary">
                  {member.name.split(" ").slice(1).join(" ")}
                </span>
              </h4>
              <p className="text-sm text-muted-foreground mt-2 px-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fund Manager */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-4xl mx-auto text-center">
        <Building2 className="text-secondary mx-auto mb-4" size={36} />
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider">
          Fund Manager
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          FundCo Capital Managers Limited is authorised and registered by the
          Nigeria Securities & Exchange Commission to act as fund manager for
          the Clean Energy Local Currency Fund. The firm brings deep expertise
          in structured finance, fund management, and climate-aligned
          infrastructure investment.
        </p>
      </div>
    </section>

    {/* Advisers */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8 uppercase tracking-wider text-center">
          Advisers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advisers.map((a) => (
            <div key={a.role} className="bg-muted rounded-xl p-6">
              <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">
                {a.role}
              </p>
              <p className="font-heading font-bold text-foreground text-sm">
                {a.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Strategic Partners */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8 uppercase tracking-wider text-center">
          Strategic Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-background rounded-xl p-6 shadow-sm"
            >
              <h4 className="font-heading font-bold text-foreground mb-2">
                {p.name}
              </h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Governance Process */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-10 uppercase tracking-wider text-center">
          Governance Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {governanceProcess.map((g) => (
            <div key={g.title} className="bg-muted rounded-xl p-6 text-center">
              <g.icon className="text-secondary mx-auto mb-3" size={28} />
              <h4 className="font-heading font-bold text-foreground text-sm mb-2">
                {g.title}
              </h4>
              <p className="text-xs text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 cef-teal-gradient text-center">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
          Want to learn more about our team and governance?
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

export default OurTeam;
