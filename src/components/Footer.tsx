import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="cef-gradient-bg text-primary-foreground py-10">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">
            Clean Energy Fund
          </h3>
          <p className="text-sm opacity-80">
            Providing local currency funding to climate aligned, sustainable and
            inclusive clean energy infrastructure.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link to="/" className="hover:opacity-100 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/our-team"
                className="hover:opacity-100 transition-opacity"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/investors-relation"
                className="hover:opacity-100 transition-opacity"
              >
                Investors Relations
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <p className="text-sm opacity-80">info@cleanenergyfund.ng</p>
          <p className="text-sm opacity-80 mt-2">
            6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria
            Island, Lagos.
          </p>
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">
            Fundco Capital Managers
          </h3>
          <p className="text-sm opacity-80">
            FundCo is authorised and registered by the Nigeria Securities &
            Exchange Commission to act as fund manager for the Clean Energy
            Local Currency Fund.
          </p>
          <h3 className="font-heading font-bold text-lg mb-3">
            Renaissance Capital
          </h3>
          <p className="text-sm opacity-80">
            Renaissance Securities (Nigeria) Limited is acting as the Issuing
            Housing and Financial Adviser to the Clean Energy Local Currency
            Fund.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Clean Energy Local Currency Fund. All
        rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
