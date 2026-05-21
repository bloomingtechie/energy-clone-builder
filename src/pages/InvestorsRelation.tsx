import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import factsheetPdf from "@/assets/Factsheet-26032026.pdf";
import aboutPdf from "@/assets/CeF-lc.pdf";
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
import { Download, FileText } from "lucide-react";

const tabs = [
  "List of Our Investors",
  "Impact Story of Series1",
  "Dividend Payment History",
  "Documents",
];

const logoMap: Record<string, string> = {
  "Leadway Pensure PFA Limited": leadway,
  "NLPC Pension Fund Administrators Limited": nlpc,
  "FCMB Pensions Limited": fcmb,
  "Access ARM Pensions Limited": access,
  "Access ARM Pensions": access,
  "All On Partnerships for Energy Access Limited": allon,
  "Oak Pensions Limited": oak,
  "Oak Pensions": oak,
  "CardinalStone Pensions": Cardinal,
  "FundCo Capital Managers Limited": fundco,
  "Veritas Glanvills Pensions": VGPensions,
  "Nigerian University Pension Management (NUPEMCO)": nupemco,
};

const series1Investors = [
  { name: "Leadway Pensure PFA Limited", pct: "16%" },
  { name: "NLPC Pension Fund Administrators Limited", pct: "15%" },
  { name: "FCMB Pensions Limited", pct: "15%" },
  { name: "Access ARM Pensions Limited", pct: "30%" },
  { name: "All On Partnerships for Energy Access Limited", pct: "9%" },
  { name: "Oak Pensions Limited", pct: "6%" },
  { name: "CardinalStone Pensions", pct: "5%" },
  { name: "FundCo Capital Managers Limited", pct: "5%" },
];

const series2Investors = [
  { name: "FundCo Capital Managers Limited", pct: "5.36%" },
  { name: "Veritas Glanvills Pensions", pct: "5.01%" },
  { name: "Nigerian University Pension Management (NUPEMCO)", pct: "5.45%" },
  { name: "Oak Pensions", pct: "5.54%" },
  { name: "NLPC Pension Fund Administrators Limited", pct: "4.47%" },
  { name: "Access ARM Pensions", pct: "35.74%" },
  { name: "Leadway Pensure PFA Limited", pct: "29.49%" },
  { name: "FCMB Pensions Limited", pct: "8.94%" },
];

const dividends = [
  { sn: 1, date: "December 10, 2024", amount: "330,000,000.00" },
  { sn: 2, date: "September 11, 2025", amount: "400,000,000.00" },
];

const impactVideos = [
  {
    title: "GroSolar & CeF",
    type: "iframe" as const,
    embedUrl:
      "https://drive.google.com/file/d/1xAemYMZWNuydV7o3HZ-_h4gxomwUhA8m/preview",
  },
  {
    title: "CeF Impact Story",
    type: "iframe" as const,
    embedUrl:
      "https://drive.google.com/file/d/1f9jv9k9LO53s2NQ2EusBeqITGNVmqEYS/preview",
  },
  {
    title: "CEF Impact Story Pass 4",
    type: "youtube" as const,
    videoId: "JXhJeJule8Y",
  },
];

const documents = [
  { name: "About Fund", file: aboutPdf, filename: "CeF-lc.pdf" },
  {
    name: "Fund Factsheet",
    file: factsheetPdf,
    filename: "Factsheet-26032026.pdf",
  },
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
            This section provides key information for current and prospective
            investors, including fund structure, investor base, performance
            indicators, and downloadable materials. CeF's diversified investor
            base of pension funds and institutional asset managers demonstrates
            strong domestic participation in Nigeria's clean energy transition.
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

      <PortfolioDistribution />
    </div>
  );
};

/* ── Portfolio Distribution & AuM Allocation ── */
const sectorAllocation = [
  { label: "Solar Mini-Grids & C&I", pct: 38, color: "bg-secondary" },
  { label: "Rooftop & Distributed Solar", pct: 24, color: "bg-primary" },
  { label: "Energy Storage & Batteries", pct: 14, color: "bg-secondary/70" },
  { label: "Productive-Use & SME Energy", pct: 12, color: "bg-primary/70" },
  { label: "E-Mobility & Clean Transport", pct: 7, color: "bg-secondary/50" },
  { label: "Energy Efficiency & Others", pct: 5, color: "bg-primary/50" },
];

const geoAllocation = [
  { label: "South-West", pct: 32 },
  { label: "South-South", pct: 21 },
  { label: "North-Central", pct: 18 },
  { label: "South-East", pct: 12 },
  { label: "North-West", pct: 10 },
  { label: "North-East", pct: 7 },
];

const aumPerSeries = [
  {
    series: "Series 1",
    raised: "₦10.00 Bn",
    deployed: "₦9.60 Bn",
    deployedPct: 96,
    status: "Fully Allocated",
  },
  {
    series: "Series 2",
    raised: "₦15.00 Bn",
    deployed: "₦7.20 Bn",
    deployedPct: 48,
    status: "Active Deployment",
  },
  {
    series: "Series 3 (Indicative)",
    raised: "₦20.00 Bn",
    deployed: "—",
    deployedPct: 0,
    status: "Planned 2026",
  },
];

const PortfolioDistribution = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="section-container">
      <h2 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider">
        Portfolio Distribution & AuM Allocation
      </h2>
      <p className="text-muted-foreground max-w-3xl mb-12">
        An indicative view of how committed capital is deployed across clean
        energy sub-sectors, geographies, and funding series. Figures shown are
        illustrative and will be updated as portfolio data is published.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Sector Allocation */}
        <div className="bg-background rounded-xl p-6 shadow-sm">
          <h3 className="font-heading font-bold text-foreground mb-1">
            Portfolio Distribution by Sector
          </h3>
          <p className="text-xs text-muted-foreground mb-6">
            % of committed capital across clean energy sub-sectors
          </p>
          <div className="space-y-4">
            {sectorAllocation.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{s.label}</span>
                  <span className="font-semibold text-foreground">
                    {s.pct}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.color} rounded-full`}
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Allocation */}
        <div className="bg-background rounded-xl p-6 shadow-sm">
          <h3 className="font-heading font-bold text-foreground mb-1">
            Geographic Distribution
          </h3>
          <p className="text-xs text-muted-foreground mb-6">
            Deployment by Nigerian geopolitical zone
          </p>
          <div className="space-y-4">
            {geoAllocation.map((g) => (
              <div key={g.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{g.label}</span>
                  <span className="font-semibold text-foreground">
                    {g.pct}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full"
                    style={{ width: `${g.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AuM per Series */}
      <div className="bg-background rounded-xl p-6 shadow-sm">
        <h3 className="font-heading font-bold text-foreground mb-1">
          Allocation of AuM per Series to Date
        </h3>
        <p className="text-xs text-muted-foreground mb-6">
          Capital raised vs. deployed across CeF funding series
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {aumPerSeries.map((s) => (
            <div key={s.series} className="bg-muted rounded-lg p-5">
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                {s.series}
              </p>
              <p className="text-2xl font-heading font-bold text-foreground">
                {s.raised}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Total Capital Raised
              </p>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Deployed</span>
                <span className="font-semibold text-foreground">
                  {s.deployed} ({s.deployedPct}%)
                </span>
              </div>
              <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full cef-gradient-bg rounded-full"
                  style={{ width: `${s.deployedPct}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3">{s.status}</p>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="cef-gradient-bg text-primary-foreground">
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Series
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Capital Raised
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Deployed
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Deployment %
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {aumPerSeries.map((s, i) => (
                <tr
                  key={s.series}
                  className={i % 2 === 0 ? "bg-muted" : "bg-background"}
                >
                  <td className="px-4 py-3 text-sm font-medium text-foreground">
                    {s.series}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {s.raised}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {s.deployed}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {s.deployedPct}%
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {s.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground italic mt-4">
          Figures shown are illustrative placeholders pending publication of
          audited portfolio data.
        </p>
      </div>
    </div>
  </section>
);


/* ── Investors Table with Series Toggle ── */
const InvestorsTable = () => {
  const [series, setSeries] = useState<1 | 2>(1);
  const investors = series === 1 ? series1Investors : series2Investors;

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        This diversified investor base reflects strong institutional
        participation across multiple funding series, demonstrating sustained
        confidence in CeF's investment strategy and performance.
      </p>

      {/* Series Toggle */}
      <div className="flex gap-2 mb-6">
        {([1, 2] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSeries(s)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              series === s
                ? "cef-gradient-bg text-primary-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Series {s} Investors
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="cef-gradient-bg text-primary-foreground">
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Logo
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Investor
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Holding
              </th>
            </tr>
          </thead>
          <tbody>
            {investors.map((inv, i) => {
              const logo = logoMap[inv.name];
              return (
                <tr
                  key={inv.name}
                  className={i % 2 === 0 ? "bg-muted" : "bg-background"}
                >
                  <td className="px-4 py-3">
                    <div className="w-20 h-12 flex items-center justify-center">
                      {logo ? (
                        <img
                          src={logo}
                          alt={inv.name}
                          className="max-h-10 w-auto object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-16 h-10 rounded bg-muted-foreground/10" />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {inv.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">
                    {inv.pct}
                  </td>
                </tr>
              );
            })}
            <tr className="bg-muted font-bold">
              <td className="px-4 py-3 text-sm text-foreground" colSpan={2}>
                Total
              </td>
              <td className="px-4 py-3 text-sm text-foreground">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ── Impact Story Tab ── */
const ImpactStoryTab = () => (
  <div className="space-y-8">
    {impactVideos.map((video, idx) => (
      <div key={idx} className="bg-muted rounded-xl p-6">
        <div className="w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden">
          <iframe
            src={
              video.type === "youtube"
                ? `https://www.youtube.com/embed/${video.videoId}`
                : video.embedUrl
            }
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          {video.title}
        </p>
      </div>
    ))}
  </div>
);

/* ── Dividend Table ── */
const DividendTable = () => (
  <div>
    <p className="text-sm text-muted-foreground mb-4">
      Dividend distributions reflect underlying project cash flows and portfolio
      performance. CeF is committed to delivering consistent, risk-adjusted
      returns to its investors.
    </p>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="cef-gradient-bg text-primary-foreground">
            <th className="px-4 py-3 text-left text-sm font-semibold">S/N</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Payment Date
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Dividend Paid (₦)
            </th>
          </tr>
        </thead>
        <tbody>
          {dividends.map((d) => (
            <tr
              key={d.sn}
              className={d.sn % 2 === 0 ? "bg-background" : "bg-muted"}
            >
              <td className="px-4 py-3 text-sm text-foreground">{d.sn}</td>
              <td className="px-4 py-3 text-sm text-foreground">{d.date}</td>
              <td className="px-4 py-3 text-sm text-foreground">{d.amount}</td>
            </tr>
          ))}
          <tr className="bg-muted font-bold">
            <td className="px-4 py-3 text-sm text-foreground" colSpan={2}>
              Total
            </td>
            <td className="px-4 py-3 text-sm text-foreground">
              730,000,000.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

/* ── Documents Tab ── */
const DocumentsTab = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Download key fund documents for review. Additional documents including the
      prospectus, impact brief, and governance summary will be made available
      shortly.
    </p>
    {documents.map((doc) => (
      <a
        key={doc.name}
        href={doc.file}
        download={doc.filename}
        className="flex items-center gap-4 bg-muted rounded-lg p-4 hover:shadow-md transition-shadow"
      >
        <FileText className="text-secondary flex-shrink-0" size={24} />
        <span className="text-sm font-medium text-foreground flex-1">
          {doc.name}
        </span>
        <Download className="text-muted-foreground" size={18} />
      </a>
    ))}
    {["Prospectus", "Impact Brief", "Governance Summary"].map((name) => (
      <div key={name} className="bg-muted rounded-lg p-4 opacity-60">
        <div className="flex items-center gap-4">
          <FileText className="text-muted-foreground flex-shrink-0" size={24} />
          <span className="text-sm text-muted-foreground flex-1">
            {name} — Coming Soon
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default InvestorsRelation;
