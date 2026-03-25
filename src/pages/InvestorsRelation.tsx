import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import leadway from "@/assets/leadway.png";
import nlpc from "@/assets/nlpc.png";
import fcmb from "@/assets/fcmb.png";
import access from "@/assets/access.png";
import allon from "@/assets/allon.png";
import oak from "@/assets/oak.png";
import Cardinal from "@/assets/Cardinal.png";
import fundco from "@/assets/fundco.png";

const tabs = [
  "List of Our Investors",
  "Impact Story of Series1",
  "Dividend Payment History",
  "Our Price",
];

const investors = [
  { name: "Leadway Pensure PFA Limited", pct: "16%", image: leadway },
  { name: "NLPC Pension Fund Administrators Limited", pct: "15%", image: nlpc },
  { name: "FCMB Pensions Limited", pct: "15%", image: fcmb },
  { name: "Access ARM Pensions Limited", pct: "30%", image: access },
  {
    name: "All On Partnerships for Energy Access Limited",
    pct: "9%",
    image: allon,
  },
  { name: "Oak Pensions Limited", pct: "6%", image: oak },
  { name: "CardinalStone Pensions", pct: "5%", image: Cardinal },
  { name: "FundCo Capital Managers Limited", pct: "5%", image: fundco },
];

const dividends = [
  { sn: 1, date: "December 10, 2024", amount: "330,000,000.00" },
  { sn: 2, date: "September 11, 2025", amount: "400,000,000.00" },
];

const InvestorsRelation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <PageBanner title="Investors Relations" />

      <section className="py-16 md:py-24">
        <div className="section-container">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider">
            Our Investment Information
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            The Fund Manager has established an Investment Committee comprising
            senior and experienced professionals, including independent members
            with wide-ranging experience in clean energy investments, risk and
            fund management. The five members of the IC collectively have more
            than 100 years of investing and financing experience.
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
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

            {/* Content */}
            <div className="flex-1">
              {activeTab === 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="cef-gradient-bg text-primary-foreground">
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Investor Logo
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Investor
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Percentage Holding
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {investors.map((inv, i) => (
                        <tr
                          key={inv.name}
                          className={i % 2 === 0 ? "bg-muted" : "bg-background"}
                        >
                          <td className="px-4 py-3">
                            <div className="w-16 h-10 bg-muted-foreground/10 rounded flex items-center justify-center text-xs text-muted-foreground">
                              <img
                                src={inv.image}
                                alt="image"
                                className="h-10 md:h-14 w-auto"
                                loading="lazy"
                              />
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            {inv.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground font-medium">
                            {inv.pct}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-muted font-bold">
                        <td
                          className="px-4 py-3 text-sm text-foreground"
                          colSpan={2}
                        >
                          Total
                        </td>
                        <td className="px-4 py-3 text-sm text-foreground">
                          100%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 1 && (
                <div className="bg-muted rounded-xl p-10 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="w-full max-w-lg mx-auto aspect-video bg-foreground/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-muted-foreground text-sm">
                        Video Placeholder – CEF Impact Story
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      CEF Impact Story Pass 4 1
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="cef-gradient-bg text-primary-foreground">
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          S/N
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Payment Date
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Dividend Paid
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dividends.map((d) => (
                        <tr
                          key={d.sn}
                          className={
                            d.sn % 2 === 0 ? "bg-background" : "bg-muted"
                          }
                        >
                          <td className="px-4 py-3 text-sm text-foreground">
                            {d.sn}
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            {d.date}
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            {d.amount}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-muted font-bold">
                        <td
                          className="px-4 py-3 text-sm text-foreground"
                          colSpan={2}
                        >
                          Total
                        </td>
                        <td className="px-4 py-3 text-sm text-foreground">
                          730,000,000.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 3 && (
                <div className="bg-muted rounded-xl p-10 text-center min-h-[200px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Pricing information coming soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsRelation;
