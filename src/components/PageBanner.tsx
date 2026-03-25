import heroSolar from "@/assets/hero-solar.jpg";

interface PageBannerProps {
  title: string;
}

const PageBanner = ({ title }: PageBannerProps) => (
  <section className="page-banner" style={{ backgroundImage: `url(${heroSolar})` }}>
    <div className="section-container relative z-10">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{title}</h1>
    </div>
  </section>
);

export default PageBanner;
