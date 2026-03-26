import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import factsheetPdf from "@/assets/CeF-lc.pdf";
import leadway from "@/assets/leadway.png";
import nlpc from "@/assets/nlpc.png";
import fcmb from "@/assets/fcmb.png";
import access from "@/assets/access.png";
import allon from "@/assets/allon.png";
import oak from "@/assets/oak.png";
import Cardinal from "@/assets/Cardinal.png";
import fundco from "@/assets/fundco.png";
import { Download, FileText } from "lucide-react";

const tabs = [
  "List of Our Investors",
  "Impact Story of Series1",
  "Dividend Payment History",
  "Documents",
];

const investors = [
  { name: "Leadway Pensure PFA Limited", pct: "16%", image: leadway },
  { name: "NLPC Pension Fund Administrators Limited", pct: "15%", image: nlpc },
  { name: "FCMB Pensions Limited", pct: "15%", image: fcmb },
  { name: "Access ARM Pensions Limited", pct: "30%", image: access },
  { name: "All On Partnerships for Energy Access Limited", pct: "9%", image: allon },
  { name: "Oak Pensions Limited", pct: "6%", image: oak },
  { name: "CardinalStone Pensions", pct: "5%", image: Cardinal },
  { name: "FundCo Capital Managers Limited", pct: "5%", image: fundco },
];

const dividends = [
  { sn: 1, date: "December 10, 2024", amount: "330,000,000.00" },
  { sn: 2, date: "September 11, 2025", amount: "400,000,000.00" },
];

const impactVideos = [
  {
    title: "GroSolar & CeF",
    type: "iframe" as const,
    embedUrl: "https://drive.google.com/file/d/1xAemYMZWNuydV7o3HZ-_h4gxomwUhA8m/preview",
  },
  {
    title: "CeF Impact Story",
    type: "iframe" as const,
    embedUrl: "https://drive.google.com/file/d/1f9jv9k9LO53s2NQ2EusBeqITGNVmqEYS/preview",
  },
  {
    title: "CEF Impact Story Pass 4",
    type: "youtube" as const,
    videoId: "JXhJeJule8Y",
  },
];

const documents = [
  { name: "Fund Factsheet", file: factsheetPdf, filename: "CeF-lc.pdf" },
];
const InvestorsRelation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <SEO
        title="Investor Relations"
        description="Access fund performance data, investor base details, dividend history, and downloadable documents for the Clean Energy Local Currency Fund."
        path="/investors-relation"
      />
      <PageBanner title="Investor Relations" />

      <section className="py-16 md:py-24">
        <div className="section-container">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider">
            Investor Information
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            This section provides key information for current and prospective investors, including fund structure, investor base, performance indicators, and downloadable materials. CeF's diversified investor base of pension funds and institutional asset managers demonstrates strong domestic participation in Nigeria's clean energy transition.
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex-shrink-0 space-y-2">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === i
                      ? "cef-gradient-bg text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex-1">
              {activeTab === 0 && <InvestorsTable />}
              {activeTab === 1 && <ImpactStoryTab />}
              {activeTab === 2 && <DividendTable />}
              {activeTab === 3 && <DocumentsTab />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InvestorsTable = () => (
  <div>
    <p className="text-sm text-muted-foreground mb-4">
      This diversified investor base reflects strong institutional confidence in CeF's ability to deliver stable returns from climate-aligned infrastructure investments.
    </p>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="cef-gradient-bg text-primary-foreground">
            <th className="px-4 py-3 text-left text-sm font-semibold">Investor Logo</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Investor</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Percentage Holding</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((inv, i) => (
            <tr key={inv.name} className={i % 2 === 0 ? "bg-muted" : "bg-background"}>
              <td className="px-4 py-3">
                <div className="w-16 h-10 bg-muted-foreground/10 rounded flex items-center justify-center">
                  <img src={inv.image} alt={inv.name} className="h-10 md:h-14 w-auto" loading="lazy" />
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-foreground">{inv.name}</td>
              <td className="px-4 py-3 text-sm text-foreground font-medium">{inv.pct}</td>
            </tr>
          ))}
          <tr className="bg-muted font-bold">
            <td className="px-4 py-3 text-sm text-foreground" colSpan={2}>Total</td>
            <td className="px-4 py-3 text-sm text-foreground">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ImpactStoryTab = () => (
  <div className="space-y-8">
    {impactVideos.map((video) => (
      <div key={video.id} className="bg-muted rounded-xl p-6">
        <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden">
          <iframe
            src={getYouTubeEmbedUrl(video.id)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">{video.title}</p>
      </div>
    ))}
  </div>
);

const DividendTable = () => (
  <div>
    <p className="text-sm text-muted-foreground mb-4">
      Dividend distributions reflect underlying project cash flows and portfolio performance. CeF is committed to delivering consistent, risk-adjusted returns to its investors.
    </p>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="cef-gradient-bg text-primary-foreground">
            <th className="px-4 py-3 text-left text-sm font-semibold">S/N</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Payment Date</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Dividend Paid (₦)</th>
          </tr>
        </thead>
        <tbody>
          {dividends.map((d) => (
            <tr key={d.sn} className={d.sn % 2 === 0 ? "bg-background" : "bg-muted"}>
              <td className="px-4 py-3 text-sm text-foreground">{d.sn}</td>
              <td className="px-4 py-3 text-sm text-foreground">{d.date}</td>
              <td className="px-4 py-3 text-sm text-foreground">{d.amount}</td>
            </tr>
          ))}
          <tr className="bg-muted font-bold">
            <td className="px-4 py-3 text-sm text-foreground" colSpan={2}>Total</td>
            <td className="px-4 py-3 text-sm text-foreground">730,000,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const DocumentsTab = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Download key fund documents for review. Additional documents including the prospectus, impact brief, and governance summary will be made available shortly.
    </p>
    {documents.map((doc) => (
      <a
        key={doc.name}
        href={doc.file}
        download={doc.filename}
        className="flex items-center gap-4 bg-muted rounded-lg p-4 hover:shadow-md transition-shadow"
      >
        <FileText className="text-secondary flex-shrink-0" size={24} />
        <span className="text-sm font-medium text-foreground flex-1">{doc.name}</span>
        <Download className="text-muted-foreground" size={18} />
      </a>
    ))}
    <div className="bg-muted rounded-lg p-4 opacity-60">
      <div className="flex items-center gap-4">
        <FileText className="text-muted-foreground flex-shrink-0" size={24} />
        <span className="text-sm text-muted-foreground flex-1">Prospectus — Coming Soon</span>
      </div>
    </div>
    <div className="bg-muted rounded-lg p-4 opacity-60">
      <div className="flex items-center gap-4">
        <FileText className="text-muted-foreground flex-shrink-0" size={24} />
        <span className="text-sm text-muted-foreground flex-1">Impact Brief — Coming Soon</span>
      </div>
    </div>
    <div className="bg-muted rounded-lg p-4 opacity-60">
      <div className="flex items-center gap-4">
        <FileText className="text-muted-foreground flex-shrink-0" size={24} />
        <span className="text-sm text-muted-foreground flex-1">Governance Summary — Coming Soon</span>
      </div>
    </div>
  </div>
);

export default InvestorsRelation;
