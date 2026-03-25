import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Zap,
  Flame,
  Radio,
  Truck,
  Wheat,
  CheckCircle2,
  FileText,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

const eligibleProjects = [
  { icon: Zap, title: "Clean Energy Generation", desc: "Solar, wind, biomass, and hybrid power generation systems" },
  { icon: Zap, title: "Energy Access Solutions", desc: "Mini-grids, solar home systems, and distributed energy platforms" },
  { icon: Radio, title: "Telecom Infrastructure", desc: "Tower infrastructure supporting mobile and internet connectivity" },
  { icon: Wheat, title: "Agro-Processing", desc: "Equipment and systems enabling productive use of energy in agriculture" },
  { icon: Flame, title: "Clean Cooking", desc: "LPG, biogas, and electric cooking solutions" },
  { icon: Truck, title: "E-Mobility & Transportation", desc: "Electric vehicles, charging infrastructure, and logistics solutions" },
];

const requirements = [
  "Climate alignment with Nigeria's NDCs and international climate standards",
  "Bankable cash flows with demonstrable revenue generation capacity",
  "Strong governance structures and transparent management",
  "Investment readiness with clear project development milestones",
  "Environmental and social safeguards compliance",
];

const documentChecklist = [
  "Feasibility study or pre-feasibility assessment",
  "Detailed financial model with revenue projections",
  "Environmental & social impact assessment",
  "Gender analysis and inclusivity framework",
  "Stakeholder engagement plan",
  "Corporate governance documentation",
  "Regulatory approvals and licences (where applicable)",
];

const submissionSteps = [
  { step: "1", title: "Initial Enquiry", desc: "Contact CeF with a project overview and expression of interest" },
  { step: "2", title: "Document Submission", desc: "Submit required project documentation per the checklist above" },
  { step: "3", title: "Screening & Assessment", desc: "CeF's Investment Committee reviews eligibility, climate alignment, and bankability" },
  { step: "4", title: "Due Diligence", desc: "Comprehensive financial, legal, environmental, and social due diligence" },
  { step: "5", title: "Investment Approval", desc: "Final approval by the Investment Committee and execution of transaction documentation" },
];

const PipelineEligibility = () => (
  <div>
    <SEO
      title="Pipeline & Eligibility"
      description="Submit eligible clean energy and infrastructure projects for CeF financing. Review sector eligibility criteria, document requirements, and the submission process."
      path="/pipeline-eligibility"
    />
    <PageBanner title="Pipeline & Eligibility" />

    {/* Eligible Projects */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider text-center">
          Eligible Projects
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          CeF finances climate-aligned infrastructure projects across Nigeria. The following sectors are eligible for investment consideration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibleProjects.map((p) => (
            <div key={p.title} className="bg-muted rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="text-secondary" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Requirements */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8 uppercase tracking-wider text-center">
          Investment Requirements
        </h2>
        <div className="space-y-3">
          {requirements.map((r) => (
            <div key={r} className="flex items-start gap-3 p-4 rounded-lg bg-background">
              <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-foreground">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Document Checklist */}
    <section className="py-16 md:py-20">
      <div className="section-container max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <ClipboardList className="text-secondary" size={28} />
          <h2 className="font-heading font-bold text-2xl text-foreground uppercase tracking-wider">
            Document Checklist
          </h2>
        </div>
        <div className="bg-muted rounded-xl p-8">
          <div className="space-y-3">
            {documentChecklist.map((doc) => (
              <div key={doc} className="flex items-start gap-3">
                <FileText className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-foreground">{doc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Submission Pathway */}
    <section className="py-16 md:py-20 cef-gradient-bg">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-10 uppercase tracking-wider text-center">
          Submission Pathway
        </h2>
        <div className="space-y-4">
          {submissionSteps.map((s) => (
            <div key={s.step} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-secondary-foreground font-heading font-bold text-sm">{s.step}</span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary-foreground text-sm mb-1">{s.title}</h4>
                <p className="text-primary-foreground/80 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Ready to submit a project?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Contact our team to discuss your project and begin the submission process.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Submit a Project
        </Link>
      </div>
    </section>
  </div>
);

export default PipelineEligibility;
