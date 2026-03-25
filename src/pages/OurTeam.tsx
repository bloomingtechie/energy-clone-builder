import PageBanner from "@/components/PageBanner";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "David Humphrey",
    roles: ["CFO, Hive Energy (Renewable Energy).", "Global Head, Power & Infrastructure, Standard Bank."],
  },
  {
    name: "Welela Dawit",
    roles: ["CFO, Microsoft, South Africa.", "CFO, General Electric (GE) Africa."],
  },
  {
    name: "Obinna Ihedioha",
    roles: ["DMD, United Kingdom Nigeria Infrastructure Advisory Facility.", "VP & Senior Portfolio Manager, NSIA."],
  },
  {
    name: "Chizoba Onoh",
    roles: ["Infrastructure Finance Consultant, UKNIAF.", "Private Sector Specialist, IFC."],
  },
  {
    name: "Ade Alli",
    roles: ["Infrastructure, ESG.", "Oodua Group, Sterling Bank Renewables."],
  },
  {
    name: "Abiodun Oni",
    roles: ["FundCo Capital Managers.", "Consultant, Clean Energy Funding Program, InfraCredit."],
  },
];

const OurTeam = () => (
  <div>
    <PageBanner title="Our Team" />

    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="text-center font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider">Fund Investment Committee</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-14">
          The Fund Manager has established an Investment Committee comprising senior and experienced professionals, including independent members with wide-ranging experience in clean energy investments, risk and fund management. The five members of the IC collectively have more than 100 years of investing and financing experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                <User className="text-muted-foreground" size={64} />
              </div>
              <h4 className="font-heading font-bold text-foreground">
                <span className="text-foreground">{member.name.split(" ")[0]} </span>
                <span className="text-secondary">{member.name.split(" ").slice(1).join(" ")}</span>
              </h4>
              {member.roles.map((role, i) => (
                <p key={i} className="text-sm text-muted-foreground mt-1">{role}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default OurTeam;
