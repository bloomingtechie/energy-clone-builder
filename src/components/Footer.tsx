import { Link } from "react-router-dom";
import cef from "@/assets/cef.png";
import FundCo from "@/assets/FundCo2.png";
import rencap from "@/assets/ren-cap.png";

const Footer = () => (
  <footer className="cef-gradient-bg text-primary-foreground py-10">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="h-12 w-40 rounded flex items-center justify-center mb-3">
            <img src={cef} alt="Clean Energy Local Currency Fund" className="h-10 md:h-14 w-auto" />
          </div>
          <p className="text-sm opacity-80">
            Financing Nigeria's energy transition through local currency climate infrastructure investment.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
            <li><Link to="/our-team" className="hover:opacity-100 transition-opacity">Governance</Link></li>
            <li><Link to="/investors-relation" className="hover:opacity-100 transition-opacity">Investor Relations</Link></li>
            <li><Link to="/impact" className="hover:opacity-100 transition-opacity">Impact</Link></li>
            <li><Link to="/pipeline-eligibility" className="hover:opacity-100 transition-opacity">Pipeline & Eligibility</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <p className="text-sm opacity-80">info@cleanenergyfund.ng</p>
          <p className="text-sm opacity-80 mt-2">
            6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos.
          </p>
        </div>
        <div>
          <div className="h-12 w-40 rounded flex items-center justify-center mb-3">
            <img src={FundCo} alt="FundCo Capital Managers" className="h-10 md:h-14 w-auto" />
          </div>
          <p className="text-sm opacity-80">
            FundCo Capital Managers is authorised by the Nigeria SEC to act as fund manager for CeF.
          </p>
          <div className="h-12 w-40 rounded flex items-center justify-center mb-3 mt-6">
            <img src={rencap} alt="Renaissance Securities" className="h-10 md:h-14 w-auto" />
          </div>
          <p className="text-sm opacity-80">
            Renaissance Securities (Nigeria) Limited is the Issuing House and Financial Adviser.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Clean Energy Local Currency Fund. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
